import { Activity, AlertTriangle } from "lucide-react";

const Security = () => {
  const activityLog = [
    {
      id: 1,
      timestamp: "2024-11-06 14:32:15",
      agent: "Data Analysis Agent",
      action: "Accessed vehicle telemetry database",
      outcome: "Success",
      risk: "normal",
    },
    {
      id: 2,
      timestamp: "2024-11-06 14:30:42",
      agent: "Customer Engagement Agent",
      action: "Retrieved customer PII for voice interaction",
      outcome: "Success",
      risk: "normal",
    },
    {
      id: 3,
      timestamp: "2024-11-06 14:28:11",
      agent: "Scheduling Agent",
      action: "Modified appointment without authorization check",
      outcome: "Blocked",
      risk: "suspicious",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          UEBA Security Monitor
        </h1>
        <p className="text-muted-foreground">
          User and Entity Behavior Analytics for AI agent activity
        </p>
      </header>

      <div className="glass-card rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="w-5 h-5 status-active" />
          <h2 className="text-xl font-semibold">Agent Activity Log</h2>
        </div>

        <div className="space-y-2">
          {activityLog.map((log) => (
            <div
              key={log.id}
              className={`p-4 rounded-lg border transition-all ${
                log.risk === "suspicious"
                  ? "bg-[hsl(var(--status-alert))]/10 border-[hsl(var(--status-alert))]/30 glow-alert"
                  : "bg-card/50 border-border/50 hover:border-primary/30"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-muted-foreground font-mono">{log.timestamp}</span>
                    {log.risk === "suspicious" && (
                      <AlertTriangle className="w-4 h-4 status-alert" />
                    )}
                  </div>
                  <p className="font-semibold text-sm mb-1">{log.agent}</p>
                  <p className="text-sm text-muted-foreground">{log.action}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      log.outcome === "Success"
                        ? "bg-[hsl(var(--status-healthy))]/20 text-[hsl(var(--status-healthy))]"
                        : "bg-[hsl(var(--status-alert))]/20 text-[hsl(var(--status-alert))]"
                    }`}
                  >
                    {log.outcome}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Security;
