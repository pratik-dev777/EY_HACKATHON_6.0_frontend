import { useState } from "react";
import { Mic, MicOff, Play, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const VoiceAgentPanel = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript] = useState([
    { role: "ai", text: "Hello! I'm your AI maintenance assistant. How can I help you today?" },
    { role: "user", text: "My check engine light is on. What should I do?" },
    { role: "ai", text: "I've detected fault code P0420 related to your catalytic converter efficiency. Based on your vehicle's current mileage and condition, I recommend scheduling a diagnostic inspection within the next week. Would you like me to book an appointment?" },
  ]);

  return (
    <div className="glass-card rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="w-5 h-5 status-active" />
        <h2 className="text-xl font-semibold">Voice Agent Interaction</h2>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto p-4 bg-background/30 rounded-lg">
        {transcript.map((message, index) => (
          <div
            key={index}
            className={cn(
              "p-3 rounded-lg max-w-[80%]",
              message.role === "ai"
                ? "bg-primary/10 border border-primary/20"
                : "bg-secondary/50 ml-auto"
            )}
          >
            <p className="text-sm font-medium mb-1 opacity-60">
              {message.role === "ai" ? "AI Assistant" : "Customer"}
            </p>
            <p className="text-sm">{message.text}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Button
          size="lg"
          variant={isListening ? "destructive" : "default"}
          className={cn(
            "w-16 h-16 rounded-full",
            isListening && "animate-pulse glow-alert"
          )}
          onClick={() => setIsListening(!isListening)}
        >
          {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
        </Button>

        <div className="flex-1 glass-card rounded-lg px-4 py-3 text-sm text-muted-foreground">
          {isListening ? "Listening..." : "Click microphone to start"}
        </div>

        <Button variant="secondary" size="lg">
          <Play className="w-4 h-4 mr-2" />
          Play Response
        </Button>

        <Button variant="outline" size="lg">
          <Send className="w-4 h-4 mr-2" />
          Send to Mobile
        </Button>
      </div>
    </div>
  );
};

export default VoiceAgentPanel;
