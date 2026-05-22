import { FileText } from "lucide-react";

const Manufacturing = () => {
  const insights = [
    {
      id: 1,
      defect: "Premature brake pad wear",
      frequency: 23,
      rootCause: "Supplier material variance in compound hardness",
      action: "Switch to alternate supplier or update spec tolerances",
    },
    {
      id: 2,
      defect: "Battery thermal management issues",
      frequency: 12,
      rootCause: "Insufficient cooling duct sealing in assembly",
      action: "Implement automated seal inspection in production line",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Manufacturing Quality Insights
        </h1>
        <p className="text-muted-foreground">
          Root Cause Analysis (RCA) and Corrective Actions (CAPA) from predictive data
        </p>
      </header>

      <div className="glass-card rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="w-5 h-5 status-active" />
          <h2 className="text-xl font-semibold">CAPA Summary</h2>
        </div>

        <div className="space-y-4">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold">{insight.defect}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Frequency: <span className="font-medium status-warning">{insight.frequency} incidents</span>
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-[hsl(var(--status-warning))]/20 text-[hsl(var(--status-warning))] text-xs font-medium">
                  Active
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-muted-foreground">Root Cause:</span>
                  <p className="mt-1">{insight.rootCause}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Corrective Action:</span>
                  <p className="mt-1 status-healthy">{insight.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
