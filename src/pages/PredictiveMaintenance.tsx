import { AlertTriangle, Car, Battery, Gauge } from "lucide-react";
import VehicleHealthCard from "@/components/predictive/VehicleHealthCard";
import FailurePredictionChart from "@/components/predictive/FailurePredictionChart";
import AlertList from "@/components/predictive/AlertList";

const PredictiveMaintenance = () => {
  const systems = [
    { name: "Engine", icon: Gauge, health: 92, status: "healthy" as const },
    { name: "Brakes", icon: AlertTriangle, health: 68, status: "warning" as const },
    { name: "Transmission", icon: Car, health: 85, status: "healthy" as const },
    { name: "Battery", icon: Battery, health: 45, status: "alert" as const },
  ];

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Predictive Maintenance
        </h1>
        <p className="text-muted-foreground">
          AI-powered vehicle health monitoring and failure prediction
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {systems.map((system) => (
          <VehicleHealthCard key={system.name} {...system} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FailurePredictionChart />
        <AlertList />
      </div>
    </div>
  );
};

export default PredictiveMaintenance;
