import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Activity } from "lucide-react";

const LiveTelemetryChart = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: `T-${20 - i}s`,
      speed: Math.floor(Math.random() * 40) + 40,
      temperature: Math.floor(Math.random() * 20) + 70,
      engineHealth: Math.floor(Math.random() * 15) + 80,
    }));
    setData(initialData);

    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev.slice(1)];
        newData.push({
          time: "Now",
          speed: Math.floor(Math.random() * 40) + 40,
          temperature: Math.floor(Math.random() * 20) + 70,
          engineHealth: Math.floor(Math.random() * 15) + 80,
        });
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-5 h-5 status-active animate-pulse" />
        <h2 className="text-xl font-semibold">Live Vehicle Telemetry Stream</h2>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.5rem",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="speed"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dot={false}
            name="Speed (mph)"
          />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="hsl(var(--chart-3))"
            strokeWidth={2}
            dot={false}
            name="Temp (°F)"
          />
          <Line
            type="monotone"
            dataKey="engineHealth"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            dot={false}
            name="Engine Health (%)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LiveTelemetryChart;
