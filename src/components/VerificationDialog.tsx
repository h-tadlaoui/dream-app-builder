import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Shield, HelpCircle, CheckCircle2, XCircle, Send, User, Clock } from "lucide-react";
import { toast } from "sonner";

interface Claim {
  id: string;
  claimantEmail: string;
  message: string;
  createdAt: string;
}

interface VerificationDialogProps {
  open: boolean;
  onClose: () => void;
  claims: Claim[];
  onVerify: (claimId: string) => void;
  onReject: (claimId: string) => void;
  onAskQuestion: (claimId: string, question: string) => void;
}

const VerificationDialog = ({ 
  open, 
  onClose, 
  claims, 
  onVerify, 
  onReject,
  onAskQuestion 
}: VerificationDialogProps) => {
  const [selectedClaim, setSelectedClaim] = useState<string | null>(null);
  const [question, setQuestion] = useState("");

  const handleAskQuestion = () => {
    if (!selectedClaim || !question.trim()) {
      toast.error("Please enter a verification question");
      return;
    }
    onAskQuestion(selectedClaim, question);
    toast.success("Question sent to claimant");
    setQuestion("");
  };

  const handleVerify = (claimId: string) => {
    onVerify(claimId);
    toast.success("Ownership verified!", {
      description: "Contact information will be exchanged"
    });
    onClose();
  };

  const handleReject = (claimId: string) => {
    onReject(claimId);
    toast.info("Claim rejected");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Verify Ownership
          </DialogTitle>
          <DialogDescription>
            Review claims and verify the rightful owner by asking questions
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {claims.length > 0 ? (
            claims.map((claim) => (
              <Card 
                key={claim.id} 
                className={`p-4 cursor-pointer transition-all ${
                  selectedClaim === claim.id 
                    ? "border-primary ring-2 ring-primary/20" 
                    : "hover:border-muted-foreground/30"
                }`}
                onClick={() => setSelectedClaim(claim.id)}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{claim.claimantEmail}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(claim.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">Pending</Badge>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">
                      "{claim.message}"
                    </p>
                  </div>

                  {selectedClaim === claim.id && (
                    <div className="space-y-3 pt-2 border-t">
                      <div className="space-y-2">
                        <Label className="text-xs">Ask a verification question</Label>
                        <Textarea
                          placeholder="e.g., What color is the phone case? Is there a scratch on the back?"
                          value={question}
                          onChange={(e) => setQuestion(e.target.value)}
                          className="min-h-[60px]"
                        />
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={handleAskQuestion}
                          className="w-full"
                        >
                          <HelpCircle className="w-4 h-4 mr-2" />
                          Send Question
                        </Button>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleVerify(claim.id)}
                        >
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Verify Owner
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleReject(claim.id)}
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-8 text-center">
              <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h4 className="font-semibold mb-2">No Claims Yet</h4>
              <p className="text-sm text-muted-foreground">
                You'll be notified when someone claims this item
              </p>
            </Card>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="w-full">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VerificationDialog;
