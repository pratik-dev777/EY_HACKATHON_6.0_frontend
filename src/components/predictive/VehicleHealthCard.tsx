import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface VehicleHealthCardProps {
  name: string;
  icon: LucideIcon;
  health: number;
  status: "healthy" | "warning" | "alert";
}

const VehicleHealthCard = ({ name, icon: Icon, health, status }: VehicleHealthCardProps) => {
  const statusStyles = {
    healthy: "status-healthy",
    warning: "status-warning",
    alert: "status-alert",
  };

  return (
    <div className="glass-card rounded-lg p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={cn("p-2 rounded-lg bg-secondary/50", statusStyles[status])}>
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="font-semibold">{name}</h3>
        </div>
        <span className="text-2xl font-bold">{health}%</span>
      </div>
      <Progress value={health} className="h-2" />
      <p className={cn("text-xs font-medium capitalize", statusStyles[status])}>
        {status === "healthy" ? "Optimal" : status === "warning" ? "Attention Needed" : "Critical"}
      </p>
    </div>
  );
};

export default VehicleHealthCard;
