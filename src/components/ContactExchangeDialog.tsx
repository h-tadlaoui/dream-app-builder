import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Mail, Phone, Copy, CheckCircle2, Shield, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface ContactExchangeDialogProps {
  open: boolean;
  onClose: () => void;
  contactInfo: {
    email: string;
    phone?: string;
  };
  otherPartyRole: "finder" | "owner";
  onConfirmHandover: () => void;
}

const ContactExchangeDialog = ({ 
  open, 
  onClose, 
  contactInfo, 
  otherPartyRole,
  onConfirmHandover 
}: ContactExchangeDialogProps) => {
  
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  const handleConfirmHandover = () => {
    onConfirmHandover();
    toast.success("Item marked as on its way!", {
      description: "The owner will confirm once they receive it"
    });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-accent" />
            Contact {otherPartyRole === "finder" ? "Finder" : "Owner"}
          </DialogTitle>
          <DialogDescription>
            Both parties have confirmed the match. You can now arrange item retrieval.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Card className="p-4 bg-accent/5 border-accent/30">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="font-medium text-accent">Match Verified</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Contact information is now shared between both parties
            </p>
          </Card>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium">{contactInfo.email}</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => copyToClipboard(contactInfo.email, "Email")}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>

            {contactInfo.phone && (
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium">{contactInfo.phone}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => copyToClipboard(contactInfo.phone!, "Phone")}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          <Card className="p-3 bg-muted/30">
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-muted-foreground mt-0.5" />
              <p className="text-xs text-muted-foreground">
                Arrange a safe meeting place or coordinate delivery. Contact info stays private to both parties.
              </p>
            </div>
          </Card>
        </div>

        <DialogFooter className="flex-col gap-2 sm:flex-col">
          <Button onClick={handleConfirmHandover} className="w-full">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Mark as Item on its Way
          </Button>
          <Button variant="outline" onClick={onClose} className="w-full">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContactExchangeDialog;
