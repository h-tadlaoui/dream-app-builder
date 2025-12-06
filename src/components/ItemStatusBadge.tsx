import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Truck, Search, Shield } from "lucide-react";
import type { ItemStatus } from "@/types/item";

interface ItemStatusBadgeProps {
  status: ItemStatus;
  className?: string;
}

const ItemStatusBadge = ({ status, className }: ItemStatusBadgeProps) => {
  const getStatusConfig = (status: ItemStatus) => {
    switch (status) {
      case "Active":
        return {
          icon: Search,
          variant: "default" as const,
          className: "bg-secondary text-secondary-foreground",
        };
      case "Verification Pending":
        return {
          icon: Clock,
          variant: "secondary" as const,
          className: "bg-yellow-500/10 text-yellow-600 border-yellow-500/30",
        };
      case "Item on its way":
        return {
          icon: Truck,
          variant: "secondary" as const,
          className: "bg-primary/10 text-primary border-primary/30",
        };
      case "Recovered":
        return {
          icon: CheckCircle2,
          variant: "secondary" as const,
          className: "bg-accent/10 text-accent border-accent/30",
        };
      case "Closed":
        return {
          icon: Shield,
          variant: "outline" as const,
          className: "bg-muted text-muted-foreground",
        };
      default:
        return {
          icon: Search,
          variant: "outline" as const,
          className: "",
        };
    }
  };

  const config = getStatusConfig(status);
  const Icon = config.icon;

  return (
    <Badge 
      variant={config.variant} 
      className={`${config.className} ${className}`}
    >
      <Icon className="w-3 h-3 mr-1" />
      {status}
    </Badge>
  );
};

export default ItemStatusBadge;
