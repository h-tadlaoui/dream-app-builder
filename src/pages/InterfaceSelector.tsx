import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Palette } from "lucide-react";

const InterfaceSelector = () => {
  const navigate = useNavigate();

  const interfaces = [
    {
      id: 1,
      name: "Minimal & Clean",
      description: "Simple, elegant, typography-focused design",
      path: "/interface-1",
      preview: "Clean lines, spacious layout, minimal colors"
    },
    {
      id: 2,
      name: "Bold & Vibrant",
      description: "Energetic with gradients and strong colors",
      path: "/interface-2",
      preview: "Eye-catching cards, split design, colorful accents"
    },
    {
      id: 3,
      name: "Card-Focused",
      description: "Grid layout with organized card sections",
      path: "/interface-3",
      preview: "Structured layout, easy navigation, compact design"
    },
    {
      id: 4,
      name: "Split Screen",
      description: "Dual-panel layout for lost/found distinction",
      path: "/interface-4",
      preview: "Dramatic split view, clear visual separation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Palette className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Choose Your Interface</h1>
              <p className="text-sm text-muted-foreground">Select the design that fits your style</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {interfaces.map((iface) => (
            <Card 
              key={iface.id}
              className="p-8 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary group"
              onClick={() => navigate(iface.path)}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                    {iface.id}
                  </div>
                  <Button variant="ghost" size="sm">
                    Preview →
                  </Button>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {iface.name}
                  </h3>
                  <p className="text-muted-foreground mb-3">{iface.description}</p>
                  <p className="text-sm text-muted-foreground/80 italic">{iface.preview}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Can't decide? Start with any option - you can always change it later</p>
          <Button variant="outline" size="lg" onClick={() => navigate("/interface-1")}>
            Start with Option 1
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterfaceSelector;
