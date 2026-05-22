import { Brain } from "lucide-react";

const OrchestrationGraph = () => {
  const workers = [
    { name: "Data", color: "hsl(var(--chart-1))", angle: 0 },
    { name: "Diagnosis", color: "hsl(var(--chart-2))", angle: 60 },
    { name: "Customer", color: "hsl(var(--chart-3))", angle: 120 },
    { name: "Scheduling", color: "hsl(var(--chart-4))", angle: 180 },
    { name: "Feedback", color: "hsl(var(--chart-5))", angle: 240 },
    { name: "Quality", color: "hsl(var(--status-warning))", angle: 300 },
  ];

  return (
    <div className="glass-card rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Brain className="w-5 h-5 status-active" />
        Agent Orchestration Network
      </h2>
      <div className="relative w-full aspect-square flex items-center justify-center">
        {/* Master Agent - Center */}
        <div className="absolute z-10 w-24 h-24 rounded-full gradient-primary flex items-center justify-center glow-primary">
          <div className="text-center">
            <Brain className="w-8 h-8 mx-auto mb-1 text-primary-foreground" />
            <p className="text-xs font-bold text-primary-foreground">Master</p>
          </div>
        </div>

        {/* Worker Agents - Circle */}
        {workers.map((worker) => {
          const radius = 140;
          const x = Math.cos((worker.angle * Math.PI) / 180) * radius;
          const y = Math.sin((worker.angle * Math.PI) / 180) * radius;

          return (
            <div key={worker.name}>
              {/* Connection Line */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 0 }}
              >
                <line
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${x}px)`}
                  y2={`calc(50% + ${y}px)`}
                  stroke={worker.color}
                  strokeWidth="2"
                  strokeOpacity="0.3"
                  strokeDasharray="4 4"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="8"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </line>
              </svg>

              {/* Worker Node */}
              <div
                className="absolute w-16 h-16 rounded-full border-2 flex items-center justify-center bg-card/80 backdrop-blur-sm"
                style={{
                  borderColor: worker.color,
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <p className="text-xs font-semibold text-center px-1">{worker.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrchestrationGraph;
