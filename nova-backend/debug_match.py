from api.models import Item, Match, Notification
from api.views import MatchViewSet
import json

def debug_matching(item_id):
    try:
        item = Item.objects.get(id=item_id)
        print(f"DEBUG: Found Item {item.id} - {item.category} ({item.type})")
        print(f"DEBUG: Description: {item.description}")
        
        viewset = MatchViewSet()
        matches = viewset._find_matches_via_ai(item)
        print(f"DEBUG: AI returned {len(matches)} potential matches")
        
        for m in matches:
            print(f" -- Candidate: {m['item_id']} | Score: {m['score']}")
            
        # Check if notifications exist
        notifs = Notification.objects.filter(related_item=item)
        print(f"DEBUG: Notifications for this item: {notifs.count()}")
        for n in notifs:
            print(f" -- Notif: {n.title} - {n.message} (Read: {n.read})")
            
    except Exception as e:
        print(f"ERROR: {e}")

# Instructions:
# manually change ID below
pass
