import { Activity, Brain, MessageSquare, Calendar, Factory, Shield } from "lucide-react";
import AgentStatusCard from "@/components/dashboard/AgentStatusCard";
import LiveTelemetryChart from "@/components/dashboard/LiveTelemetryChart";
import OrchestrationGraph from "@/components/dashboard/OrchestrationGraph";
import UEBAStatusBar from "@/components/dashboard/UEBAStatusBar";

const Dashboard = () => {
  const agents = [
    { name: "Data Analysis", icon: Activity, status: "active" as const, task: "Processing vehicle telemetry" },
    { name: "Diagnosis", icon: Brain, status: "active" as const, task: "Analyzing fault patterns" },
    { name: "Customer Engagement", icon: MessageSquare, status: "idle" as const, task: "Awaiting customer inquiry" },
    { name: "Scheduling", icon: Calendar, status: "active" as const, task: "Optimizing service slots" },
    { name: "Feedback", icon: MessageSquare, status: "idle" as const, task: "Monitoring satisfaction" },
    { name: "Manufacturing Quality", icon: Factory, status: "alert" as const, task: "RCA on recurring defect" },
  ];

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Master Agent Dashboard
        </h1>
        <p className="text-muted-foreground">
          Real-time orchestration of autonomous AI agents for predictive maintenance
        </p>
      </header>

      <UEBAStatusBar />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Shield className="w-5 h-5 status-active" />
            Agent Status Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {agents.map((agent) => (
              <AgentStatusCard key={agent.name} {...agent} />
            ))}
          </div>
        </div>

        <OrchestrationGraph />
      </div>

      <LiveTelemetryChart />
    </div>
  );
};

export default Dashboard;
