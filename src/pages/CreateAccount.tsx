import React, { useState } from "react";


const CreateAccount: React.FC = () => {
  const [customer, setCustomer] = useState({
    customer_id: "",
    name: "",
    contact_no: "",
    email: "",
    membership_detail: "",
  });

  const [vehicle, setVehicle] = useState({
    year: "",
    model: "",
    brand: "",
    mileage: "",
  });

  const inputStyle =
    "w-full p-3 rounded-lg bg-[#1F2937] border border-gray-700 focus:border-blue-500 focus:ring-blue-500 outline-none";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customer, vehicle }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1220] text-white px-4">
      <div className="w-full max-w-xl bg-[#111827] p-8 rounded-2xl border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Customer Section */}
          <h3 className="text-lg font-semibold mb-2">Enter Customer Details</h3>

          <input className={inputStyle} placeholder="Customer ID"
            value={customer.customer_id}
            onChange={e => setCustomer({ ...customer, customer_id: e.target.value })}
          />

          <input className={inputStyle} placeholder="Customer Name"
            value={customer.name}
            onChange={e => setCustomer({ ...customer, name: e.target.value })}
          />

          <input className={inputStyle} placeholder="Contact Number"
            value={customer.contact_no}
            onChange={e => setCustomer({ ...customer, contact_no: e.target.value })}
          />

          <input className={inputStyle} placeholder="Email"
            value={customer.email}
            onChange={e => setCustomer({ ...customer, email: e.target.value })}
          />

          <input className={inputStyle} placeholder="Membership Detail"
            value={customer.membership_detail}
            onChange={e => setCustomer({ ...customer, membership_detail: e.target.value })}
          />

          {/* Vehicle Section */}
          <h3 className="text-lg font-semibold mt-6">Enter Vehicle Details</h3>

          <input className={inputStyle} placeholder="Vehicle Year"
            value={vehicle.year}
            onChange={e => setVehicle({ ...vehicle, year: e.target.value })}
          />

          <input className={inputStyle} placeholder="Vehicle Model"
            value={vehicle.model}
            onChange={e => setVehicle({ ...vehicle, model: e.target.value })}
          />

          <input className={inputStyle} placeholder="Vehicle Brand"
            value={vehicle.brand}
            onChange={e => setVehicle({ ...vehicle, brand: e.target.value })}
          />

          <input className={inputStyle} placeholder="Vehicle Mileage"
            value={vehicle.mileage}
            onChange={e => setVehicle({ ...vehicle, mileage: e.target.value })}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
