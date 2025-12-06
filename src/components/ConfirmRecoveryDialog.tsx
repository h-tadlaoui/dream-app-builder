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
import { CheckCircle2, Award, PartyPopper, Star } from "lucide-react";
import { toast } from "sonner";

interface ConfirmRecoveryDialogProps {
  open: boolean;
  onClose: () => void;
  itemCategory: string;
  onConfirm: () => void;
}

const ConfirmRecoveryDialog = ({ 
  open, 
  onClose, 
  itemCategory,
  onConfirm 
}: ConfirmRecoveryDialogProps) => {
  
  const handleConfirm = () => {
    onConfirm();
    toast.success("Item marked as recovered! 🎉", {
      description: "This case is now closed. Thank you for using FindBack!"
    });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <PartyPopper className="w-5 h-5 text-accent" />
            Confirm Item Recovery
          </DialogTitle>
          <DialogDescription>
            Have you received your {itemCategory}?
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Card className="p-6 text-center bg-accent/5 border-accent/30">
            <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Item Successfully Recovered!
            </h3>
            <p className="text-sm text-muted-foreground">
              Confirming recovery will close this case and update your history
            </p>
          </Card>

          <Card className="p-4 bg-primary/5 border-primary/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">Helper Badge</p>
                <p className="text-xs text-muted-foreground">
                  The finder will receive a badge for helping you!
                </p>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-center gap-1 text-muted-foreground">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm">Consider thanking the finder!</span>
          </div>
        </div>

        <DialogFooter className="flex-col gap-2 sm:flex-col">
          <Button onClick={handleConfirm} className="w-full bg-accent hover:bg-accent/90">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Confirm Recovery
          </Button>
          <Button variant="outline" onClick={onClose} className="w-full">
            Not Yet
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmRecoveryDialog;
