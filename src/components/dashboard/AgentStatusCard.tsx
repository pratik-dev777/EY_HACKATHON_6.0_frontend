import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AgentStatusCardProps {
  name: string;
  icon: LucideIcon;
  status: "active" | "idle" | "alert";
  task: string;
}

const AgentStatusCard = ({ name, icon: Icon, status, task }: AgentStatusCardProps) => {
  const statusStyles = {
    active: "status-active glow-primary",
    idle: "text-muted-foreground",
    alert: "status-alert glow-alert",
  };

  const statusIndicator = {
    active: "bg-[hsl(var(--status-active))] animate-pulse",
    idle: "bg-muted-foreground/50",
    alert: "bg-[hsl(var(--status-alert))] animate-pulse",
  };

  return (
    <div className="glass-card rounded-lg p-4 hover:shadow-lg transition-all border border-border/50 hover:border-primary/30">
      <div className="flex items-start gap-3">
        <div className={cn("p-2 rounded-lg bg-secondary/50", statusStyles[status])}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-sm truncate">{name}</h3>
            <div className={cn("w-2 h-2 rounded-full", statusIndicator[status])} />
          </div>
          <p className="text-xs text-muted-foreground truncate">{task}</p>
          <p className="text-xs font-medium mt-1 capitalize">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default AgentStatusCard;
