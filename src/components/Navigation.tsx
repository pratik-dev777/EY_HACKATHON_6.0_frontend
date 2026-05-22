import { NavLink } from "@/components/NavLink";
import { LayoutDashboard, Wrench, Users, Calendar, Factory, Shield } from "lucide-react";
import { User } from "lucide-react";
import Login from "./login";

const username = localStorage.getItem("username");

const Navigation = () => {
  const navItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/predictive", label: "Predictive Maintenance", icon: Wrench },
    { path: "/engagement", label: "Customer Engagement", icon: Users },
    { path: "/scheduling", label: "Scheduling", icon: Calendar },
    { path: "/manufacturing", label: "Manufacturing Insights", icon: Factory },
    { path: "/security", label: "Security (UEBA)", icon: Shield },
    { path: "/login", label: "LogIn/SignUp", icon: Users},
  ];

  return (
    <nav className="glass-card border-b border-border/50 sticky top-0 z-50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">AgentAI</h1>
              <p className="text-xs text-muted-foreground">Predictive Maintenance System</p>
            </div>
          </div>

          <div className="flex gap-1">
            {username && (
  <span className="px-4 py-2 text-blue-400 font-semibold">
    {username}
  </span>
)}

            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
                  activeClassName="bg-secondary text-foreground"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden lg:inline">{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
