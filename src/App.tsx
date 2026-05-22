import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import PredictiveMaintenance from "./pages/PredictiveMaintenance";
import CustomerEngagement from "./pages/CustomerEngagement";
import Scheduling from "./pages/Scheduling";
import Manufacturing from "./pages/Manufacturing";
import Security from "./pages/Security";
import NotFound from "./pages/NotFound";
import Login from "./components/login";
import CreateAccount from "./pages/CreateAccount";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/predictive" element={<PredictiveMaintenance />} />
          <Route path="/engagement" element={<CustomerEngagement />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/security" element={<Security />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/create-account" element={<CreateAccount />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
