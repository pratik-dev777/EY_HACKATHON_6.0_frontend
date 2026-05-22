import { AlertCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AlertList = () => {
  const alerts = [
    {
      id: 1,
      severity: "high",
      component: "Battery",
      message: "Battery health degradation detected - replacement recommended within 15 days",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      severity: "medium",
      component: "Brake Pads",
      message: "Brake pad wear exceeds 60% - schedule inspection",
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      severity: "low",
      component: "Oil Filter",
      message: "Oil change due in 500 miles",
      timestamp: "1 day ago",
    },
  ];

  const severityColors = {
    high: "bg-[hsl(var(--status-alert))]/20 text-[hsl(var(--status-alert))] border-[hsl(var(--status-alert))]/30",
    medium: "bg-[hsl(var(--status-warning))]/20 text-[hsl(var(--status-warning))] border-[hsl(var(--status-warning))]/30",
    low: "bg-[hsl(var(--status-active))]/20 text-[hsl(var(--status-active))] border-[hsl(var(--status-active))]/30",
  };

  return (
    <div className="glass-card rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="w-5 h-5 status-alert" />
        <h2 className="text-xl font-semibold">Active Maintenance Alerts</h2>
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className={severityColors[alert.severity as keyof typeof severityColors]}>
                    {alert.severity.toUpperCase()}
                  </Badge>
                  <span className="font-semibold text-sm">{alert.component}</span>
                </div>
                <p className="text-sm text-muted-foreground">{alert.message}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {alert.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertList;
