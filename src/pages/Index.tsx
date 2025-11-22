import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Search, Package, Shield, History, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-found flex items-center justify-center">
              <Search className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-found bg-clip-text text-transparent">
              FindBack
            </h1>
          </div>
          <Button variant="ghost" size="sm" onClick={() => navigate("/history")}>
            <History className="w-4 h-4 mr-2" />
            History
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Lost Something?
            <br />
            <span className="bg-gradient-to-r from-primary via-found to-accent bg-clip-text text-transparent">
              Let's Find It Together
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered lost & found platform connecting people with their belongings through smart matching and community support
          </p>
        </div>

        {/* Main Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          {/* Lost Item Card */}
          <Card 
            className="group relative overflow-hidden border-2 hover:border-secondary hover:shadow-lg transition-all duration-300 cursor-pointer bg-gradient-to-br from-card to-muted/20"
            onClick={() => navigate("/report-lost")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">I Lost Something</h3>
              <p className="text-muted-foreground">
                Report your lost item and let our AI help you find it
              </p>
              <Button variant="secondary" className="w-full group-hover:shadow-md transition-shadow">
                Report Lost Item
              </Button>
            </div>
          </Card>

          {/* Found Item Card */}
          <Card 
            className="group relative overflow-hidden border-2 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer bg-gradient-to-br from-card to-muted/20"
            onClick={() => navigate("/report-found")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">I Found Something</h3>
              <p className="text-muted-foreground">
                Help reunite lost items with their owners
              </p>
              <Button className="w-full group-hover:shadow-md transition-shadow">
                Report Found Item
              </Button>
            </div>
          </Card>
        </div>

        {/* Anonymous Report Option */}
        <Card 
          className="group max-w-2xl mx-auto mt-6 border-2 hover:border-anonymous hover:shadow-lg transition-all duration-300 cursor-pointer bg-gradient-to-br from-card to-muted/20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
          onClick={() => navigate("/report-anonymous")}
        >
          <div className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-anonymous/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6 text-anonymous" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-lg font-bold text-anonymous">Anonymous Found Report</h3>
              <p className="text-sm text-muted-foreground">For valuable items - report without revealing details</p>
            </div>
            <Button variant="outline" className="border-anonymous text-anonymous hover:bg-anonymous hover:text-anonymous-foreground">
              Report Anonymously
            </Button>
          </div>
        </Card>
      </section>

      {/* Browse Section */}
      <section className="container mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Browse Active Reports</h3>
          <p className="text-muted-foreground">Manually search through reports while AI works in the background</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card 
            className="p-6 hover:shadow-md transition-all duration-300 cursor-pointer group border-2 hover:border-secondary"
            onClick={() => navigate("/browse-lost")}
          >
            <Search className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-bold mb-2">Lost Items</h4>
            <p className="text-sm text-muted-foreground">Browse items people are looking for</p>
          </Card>

          <Card 
            className="p-6 hover:shadow-md transition-all duration-300 cursor-pointer group border-2 hover:border-primary"
            onClick={() => navigate("/browse-found")}
          >
            <Package className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-bold mb-2">Found Items</h4>
            <p className="text-sm text-muted-foreground">See items waiting to be claimed</p>
          </Card>

          <Card 
            className="p-6 hover:shadow-md transition-all duration-300 cursor-pointer group border-2 hover:border-anonymous"
            onClick={() => navigate("/browse-anonymous")}
          >
            <Shield className="w-8 h-8 text-anonymous mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-bold mb-2">Anonymous Reports</h4>
            <p className="text-sm text-muted-foreground">Valuable items with hidden details</p>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <TrendingUp className="w-8 h-8 text-primary mx-auto" />
              <p className="text-3xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground">Items Recovered</p>
            </div>
            <div className="space-y-2">
              <Package className="w-8 h-8 text-accent mx-auto" />
              <p className="text-3xl font-bold text-accent">0</p>
              <p className="text-sm text-muted-foreground">Active Reports</p>
            </div>
            <div className="space-y-2">
              <Search className="w-8 h-8 text-secondary mx-auto" />
              <p className="text-3xl font-bold text-secondary">0</p>
              <p className="text-sm text-muted-foreground">Successful Matches</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Index;
