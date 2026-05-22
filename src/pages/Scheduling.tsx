import { Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Scheduling = () => {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Intelligent Scheduling
        </h1>
        <p className="text-muted-foreground">
          AI-optimized service center capacity and appointment management
        </p>
      </header>

      <div className="glass-card rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 status-active" />
            <h2 className="text-xl font-semibold">Service Calendar</h2>
          </div>
          <Button className="gradient-primary">
            <Users className="w-4 h-4 mr-2" />
            Auto-Schedule
          </Button>
        </div>

        <div className="text-center py-20 text-muted-foreground">
          <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>Calendar heatmap visualization coming soon</p>
          <p className="text-sm mt-2">Showing predicted service demand by day and location</p>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
