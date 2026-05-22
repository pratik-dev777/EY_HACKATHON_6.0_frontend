import { User, Mail, Phone, Car, Calendar } from "lucide-react";

const CustomerProfile = () => {
  const customer = {
    name: "Sarah Mitchell",
    email: "sarah.mitchell@email.com",
    phone: "+1 (555) 123-4567",
    vehicle: "2021 Tesla Model 3 Long Range",
    lastService: "March 15, 2024",
    mileage: "32,450 miles",
  };

  return (
    <div className="glass-card rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <User className="w-5 h-5 status-active" />
        <h2 className="text-xl font-semibold">Customer Profile</h2>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
            <User className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{customer.name}</h3>
            <p className="text-sm text-muted-foreground">Premium Member</p>
          </div>
        </div>

        <div className="space-y-2 pt-4">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{customer.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{customer.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Car className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{customer.vehicle}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Last Service: {customer.lastService}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Current Mileage</span>
            <span className="font-semibold">{customer.mileage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
