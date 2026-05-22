import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp } from "lucide-react";

const FailurePredictionChart = () => {
  const data = [
    { component: "Engine", current: 8, predicted: 15 },
    { component: "Brakes", current: 32, predicted: 58 },
    { component: "Transmission", current: 15, predicted: 22 },
    { component: "Battery", current: 55, predicted: 78 },
    { component: "Suspension", current: 12, predicted: 18 },
    { component: "Cooling", current: 20, predicted: 35 },
  ];

  return (
    <div className="glass-card rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 status-warning" />
        <h2 className="text-xl font-semibold">Failure Probability Analysis</h2>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={data}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis dataKey="component" stroke="hsl(var(--muted-foreground))" />
          <PolarRadiusAxis stroke="hsl(var(--muted-foreground))" />
          <Radar
            name="Current Risk %"
            dataKey="current"
            stroke="hsl(var(--chart-2))"
            fill="hsl(var(--chart-2))"
            fillOpacity={0.3}
          />
          <Radar
            name="Predicted (Next 30 Days)"
            dataKey="predicted"
            stroke="hsl(var(--chart-3))"
            fill="hsl(var(--chart-3))"
            fillOpacity={0.3}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FailurePredictionChart;
