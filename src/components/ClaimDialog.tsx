import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { MessageCircle, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

interface ClaimDialogProps {
  open: boolean;
  onClose: () => void;
  itemCategory: string;
  onSubmit: (data: { email: string; phone?: string; message: string }) => void;
}

const ClaimDialog = ({ open, onClose, itemCategory, onSubmit }: ClaimDialogProps) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.message) {
      toast.error("Please provide email and a message");
      return;
    }

    onSubmit(formData);
    toast.success("Claim submitted!", {
      description: "The finder will review your claim and contact you"
    });
    onClose();
    setFormData({ email: "", phone: "", message: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            Claim This Item
          </DialogTitle>
          <DialogDescription>
            Submit a claim for this {itemCategory}. The finder will verify your ownership.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="claim-email">Your Email *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="claim-email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="claim-phone">Phone (Optional)</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="claim-phone"
                type="tel"
                placeholder="+1234567890"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="claim-message">
              Describe why this is your item *
            </Label>
            <Textarea
              id="claim-message"
              placeholder="Include specific details like brand, color, distinctive marks, or any unique identifiers that prove this is your item..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-[100px]"
              required
            />
            <p className="text-xs text-muted-foreground">
              The more specific details you provide, the easier it is to verify ownership
            </p>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              <Send className="w-4 h-4 mr-2" />
              Submit Claim
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClaimDialog;
