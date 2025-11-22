import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Search, Package, Shield, ArrowRight } from "lucide-react";

const IndexOption1 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="border-b border-border/40">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-xl font-bold">FindBack</h1>
        </div>
      </header>

      {/* Clean Hero */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Find what's<br />been lost.
          </h2>
          <p className="text-xl text-muted-foreground">
            AI-powered matching for lost and found items
          </p>

          {/* Minimal Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button 
              size="lg"
              className="w-full justify-between text-lg h-16"
              onClick={() => navigate("/report-lost")}
            >
              I Lost Something
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="w-full justify-between text-lg h-16"
              onClick={() => navigate("/report-found")}
            >
              I Found Something
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="ghost"
              className="w-full justify-between text-lg h-16"
              onClick={() => navigate("/report-anonymous")}
            >
              Anonymous Report
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Simple Browse Links */}
      <section className="container mx-auto px-4 py-12 border-t border-border/40">
        <div className="max-w-2xl space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Browse</h3>
          <div className="space-y-2">
            <button 
              onClick={() => navigate("/browse-lost")}
              className="w-full text-left py-3 text-lg hover:text-primary transition-colors"
            >
              Lost Items →
            </button>
            <button 
              onClick={() => navigate("/browse-found")}
              className="w-full text-left py-3 text-lg hover:text-primary transition-colors"
            >
              Found Items →
            </button>
            <button 
              onClick={() => navigate("/browse-anonymous")}
              className="w-full text-left py-3 text-lg hover:text-primary transition-colors"
            >
              Anonymous Reports →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexOption1;
