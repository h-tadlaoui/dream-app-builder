import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Search, Package, Shield, ChevronRight } from "lucide-react";

const IndexOption4 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Side - Lost */}
      <div className="bg-secondary/5 border-r border-border flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-md space-y-8">
            <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center">
              <Search className="w-10 h-10 text-secondary-foreground" />
            </div>
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-secondary">Lost Something?</h2>
              <p className="text-xl text-muted-foreground">
                Report your missing item and let our AI find matches
              </p>
            </div>
            <div className="space-y-3">
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full justify-between text-lg h-14"
                onClick={() => navigate("/report-lost")}
              >
                Report Lost Item
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full justify-between text-lg h-14"
                onClick={() => navigate("/browse-lost")}
              >
                Browse Lost Items
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Found */}
      <div className="bg-primary/5 flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-md space-y-8">
            <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center">
              <Package className="w-10 h-10 text-primary-foreground" />
            </div>
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-primary">Found Something?</h2>
              <p className="text-xl text-muted-foreground">
                Help reunite items with their rightful owners
              </p>
            </div>
            <div className="space-y-3">
              <Button 
                size="lg"
                className="w-full justify-between text-lg h-14"
                onClick={() => navigate("/report-found")}
              >
                Report Found Item
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full justify-between text-lg h-14"
                onClick={() => navigate("/browse-found")}
              >
                Browse Found Items
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner - Anonymous */}
      <div className="md:col-span-2 border-t border-border bg-card">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-anonymous flex items-center justify-center">
                <Shield className="w-7 h-7 text-anonymous-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-anonymous">Anonymous Found Report</h3>
                <p className="text-sm text-muted-foreground">For valuable items - keep details private until verified</p>
              </div>
            </div>
            <Button 
              size="lg"
              variant="outline" 
              className="border-2 border-anonymous"
              onClick={() => navigate("/report-anonymous")}
            >
              Report Anonymously
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexOption4;
