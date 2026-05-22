import { Wrench, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecommendationList = () => {
  const recommendations = [
    {
      id: 1,
      title: "Battery Replacement Service",
      priority: "high",
      description: "Your battery health is at 45%. We recommend replacement within 2 weeks to avoid unexpected failures.",
      estimatedCost: "$250 - $350",
    },
    {
      id: 2,
      title: "Brake Pad Inspection",
      priority: "medium",
      description: "Brake wear detected at 68%. Schedule an inspection to ensure optimal braking performance.",
      estimatedCost: "$150 - $200",
    },
    {
      id: 3,
      title: "Tire Rotation & Alignment",
      priority: "low",
      description: "Recommended based on your current mileage to extend tire life and improve fuel efficiency.",
      estimatedCost: "$80 - $120",
    },
  ];

  return (
    <div className="glass-card rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Wrench className="w-5 h-5 status-active" />
        <h2 className="text-xl font-semibold">AI-Generated Recommendations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all space-y-3"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-sm">{rec.title}</h3>
              <div
                className={`px-2 py-1 rounded text-xs font-medium ${
                  rec.priority === "high"
                    ? "bg-[hsl(var(--status-alert))]/20 text-[hsl(var(--status-alert))]"
                    : rec.priority === "medium"
                    ? "bg-[hsl(var(--status-warning))]/20 text-[hsl(var(--status-warning))]"
                    : "bg-[hsl(var(--status-active))]/20 text-[hsl(var(--status-active))]"
                }`}
              >
                {rec.priority}
              </div>
            </div>

            <p className="text-xs text-muted-foreground">{rec.description}</p>

            <div className="flex items-center justify-between pt-2 border-t border-border/50">
              <span className="text-sm font-semibold">{rec.estimatedCost}</span>
              <Button size="sm" variant="default">
                <Calendar className="w-3 h-3 mr-1" />
                Book Service
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationList;
