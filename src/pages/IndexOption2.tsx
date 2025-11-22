import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Search, Package, Shield, Sparkles } from "lucide-react";

const IndexOption2 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-accent/20">
      {/* Bold Header */}
      <header className="bg-card/80 backdrop-blur-lg border-b border-border/40 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FindBack
            </h1>
          </div>
        </div>
      </header>

      {/* Vibrant Split Hero */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black">
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Lost & Found
            </span>
            <br />Made Simple
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Powered by AI matching technology
          </p>
        </div>

        {/* Bold Split Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
          <Card 
            className="relative overflow-hidden border-4 border-secondary cursor-pointer group"
            onClick={() => navigate("/report-lost")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5" />
            <div className="relative p-8 space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center">
                <Search className="w-10 h-10 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-secondary mb-2">Lost</h3>
                <p className="text-muted-foreground">Report what you're missing</p>
              </div>
              <Button size="lg" variant="secondary" className="w-full">
                Report Lost Item
              </Button>
            </div>
          </Card>

          <Card 
            className="relative overflow-hidden border-4 border-primary cursor-pointer group"
            onClick={() => navigate("/report-found")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
            <div className="relative p-8 space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center">
                <Package className="w-10 h-10 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-primary mb-2">Found</h3>
                <p className="text-muted-foreground">Help return someone's item</p>
              </div>
              <Button size="lg" className="w-full">
                Report Found Item
              </Button>
            </div>
          </Card>
        </div>

        {/* Anonymous Banner */}
        <Card 
          className="max-w-5xl mx-auto border-4 border-anonymous cursor-pointer hover:shadow-2xl transition-all"
          onClick={() => navigate("/report-anonymous")}
        >
          <div className="p-6 flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-anonymous flex items-center justify-center">
              <Shield className="w-8 h-8 text-anonymous-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-black text-anonymous">Anonymous Report</h3>
              <p className="text-muted-foreground">Protect valuable items with hidden details</p>
            </div>
            <Button size="lg" variant="outline" className="border-2 border-anonymous">
              Report Now
            </Button>
          </div>
        </Card>
      </section>

      {/* Browse Grid */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-black text-center mb-8">Browse Active Reports</h3>
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { path: "/browse-lost", label: "Lost", icon: Search, color: "secondary" },
            { path: "/browse-found", label: "Found", icon: Package, color: "primary" },
            { path: "/browse-anonymous", label: "Anonymous", icon: Shield, color: "anonymous" }
          ].map((item) => (
            <Button
              key={item.path}
              variant="outline"
              size="lg"
              className="h-24 flex-col gap-2 border-2"
              onClick={() => navigate(item.path)}
            >
              <item.icon className="w-6 h-6" />
              <span className="font-bold">{item.label}</span>
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndexOption2;
