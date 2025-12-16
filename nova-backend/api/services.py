import requests
from django.conf import settings
from django.db import models
from .models import Item, Match, Notification

def index_item_in_ai(item):
    """Index item in AI service."""
    try:
        # Determine endpoint based on item type
        if item.type == 'lost':
            ai_url = f"{settings.AI_SERVICE_URL}/add/lost_item"
        else:
            ai_url = f"{settings.AI_SERVICE_URL}/add/found_item"
        
        # Prepare data for AI service
        data = {
            'item_id': str(item.id),
            'description': item.description or '',
        }
        
        files = {}
        if item.image:
            # Open and send image file
            # Note: handle file opening carefully if it's already closed
            try:
                item.image.open('rb')
                files['image'] = item.image
            except Exception:
                # If file cannot be opened (e.g. storage issue), verify path
                pass 
                
        # Send request
        # We need to ensure we don't close the file before request sends if we use a context manager improperly
        # Requests can take a dictionary of open files.
        if files:
            response = requests.post(ai_url, data=data, files=files, timeout=30)
            # Close file if we opened it
            item.image.close()
        else:
            response = requests.post(ai_url, data=data, timeout=30)
        
        if response.status_code == 200:
            item.ai_indexed = True
            item.ai_index_id = str(item.id)
            item.save(update_fields=['ai_indexed', 'ai_index_id'])
            return True
            
    except Exception as e:
        print(f"AI indexing failed: {str(e)}")
        return False

def find_matches_via_ai(item):
    """Call AI service to find matches."""
    try:
        # Determine search endpoint based on item type
        # Search FOR lost items (in found index) or FOR found items (in lost index)
        if item.type == 'lost':
            ai_url = f"{settings.AI_SERVICE_URL}/search/lost"
        else:
            ai_url = f"{settings.AI_SERVICE_URL}/search/found"
        
        # Prepare request data
        data = {}
        files = {}
        
        if item.description:
            data['text'] = item.description
        
        if item.image:
            try:
                item.image.open('rb')
                # requests needs (filename, file_object, content_type)
                files['image'] = ('image.jpg', item.image, 'image/jpeg')
            except:
                pass
                
        if not data and not files:
            print("No data to search with")
            return []

        response = requests.post(
            ai_url,
            data=data,
            files=files,
            params={'top_k': 10},
            timeout=30
        )
        
        if item.image:
            item.image.close()
        
        response.raise_for_status()
        result = response.json()
        return result.get('matches', [])
        
    except Exception as e:
        print(f"AI search failed: {str(e)}")
        return []

def process_matches(item, matches):
    """Process matches returned from AI service."""
    created_matches = []
    
    for match_data in matches:
        # Get the matched item
        matched_item_id = match_data['item_id']
        match_score = match_data['score'] * 100  # Convert to percentage
        
        try:
            if item.type == 'lost':
                found_item = Item.objects.get(id=matched_item_id, type='found')
                match, created = Match.objects.get_or_create(
                    lost_item=item,
                    found_item=found_item,
                    defaults={'match_score': match_score}
                )
            else:  # found
                lost_item = Item.objects.get(id=matched_item_id, type='lost')
                match, created = Match.objects.get_or_create(
                    lost_item=lost_item,
                    found_item=item,
                    defaults={'match_score': match_score}
                )
            
            if created:
                created_matches.append(match)
                # Create notifications for both users
                create_match_notifications(match)
        
        except Item.DoesNotExist:
            continue
            
    return created_matches

def create_match_notifications(match):
    """Create notifications for both users in a match."""
    # Notify lost item owner
    Notification.objects.create(
        user=match.lost_item.user,
        type='match_found',
        title='Potential Match Found!',
        message=f'We found a potential match for your lost {match.lost_item.category}',
        related_item=match.lost_item,
        related_match=match
    )
    
    # Notify found item owner
    Notification.objects.create(
        user=match.found_item.user,
        type='match_found',
        title='Potential Match Found!',
        message=f'Your found {match.found_item.category} may match a lost item',
        related_item=match.found_item,
        related_match=match
    )
