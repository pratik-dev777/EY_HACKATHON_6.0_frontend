import VoiceAgentPanel from "@/components/engagement/VoiceAgentPanel";
import CustomerProfile from "@/components/engagement/CustomerProfile";
import RecommendationList from "@/components/engagement/RecommendationList";

const CustomerEngagement = () => {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Customer Engagement Hub
        </h1>
        <p className="text-muted-foreground">
          AI-powered voice assistant for seamless customer interaction
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VoiceAgentPanel />
        </div>
        <CustomerProfile />
      </div>

      <RecommendationList />
    </div>
  );
};

export default CustomerEngagement;
