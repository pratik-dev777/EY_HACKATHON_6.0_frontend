import { Shield, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const UEBAStatusBar = () => {
  const status = "normal"; // normal | suspicious | unauthorized

  const statusConfig = {
    normal: {
      color: "status-healthy",
      bg: "bg-[hsl(var(--status-healthy))]/10",
      border: "border-[hsl(var(--status-healthy))]/30",
      text: "All agents operating within normal parameters",
      icon: CheckCircle,
    },
    suspicious: {
      color: "status-warning",
      bg: "bg-[hsl(var(--status-warning))]/10",
      border: "border-[hsl(var(--status-warning))]/30",
      text: "Suspicious activity detected - monitoring elevated",
      icon: Shield,
    },
    unauthorized: {
      color: "status-alert",
      bg: "bg-[hsl(var(--status-alert))]/10",
      border: "border-[hsl(var(--status-alert))]/30",
      text: "Unauthorized action prevented",
      icon: Shield,
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "glass-card rounded-lg p-4 flex items-center gap-4 border-2",
        config.bg,
        config.border
      )}
    >
      <Icon className={cn("w-6 h-6", config.color)} />
      <div className="flex-1">
        <h3 className="font-semibold text-sm">UEBA Security Status</h3>
        <p className="text-sm text-muted-foreground">{config.text}</p>
      </div>
      <div className={cn("px-3 py-1 rounded-full text-xs font-medium", config.bg)}>
        {status.toUpperCase()}
      </div>
    </div>
  );
};

export default UEBAStatusBar;
