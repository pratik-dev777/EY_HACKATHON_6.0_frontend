import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // TODO: Add API authentication logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1220] text-white px-4">
      <div className="w-full max-w-md bg-[#111827] p-8 rounded-2xl shadow-xl border border-gray-800">
        
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
          AgentAI Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-700 
                         focus:border-blue-500 focus:ring-blue-500 outline-none"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-700 
                         focus:border-blue-500 focus:ring-blue-500 outline-none"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 
                       rounded-lg font-semibold shadow-md"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-3 flex justify-center items-center gap-2 text-sm">
        <a 
             href="/forgot-password" 
              className="text-blue-400 hover:underline"
         >
            Forgot Password?
          </a>
             <span>•</span>

             <a 
             href="/create-account" 
             className="text-blue-400 hover:underline"
               >
             Create Account!
             </a>
             </p>

          <p className="text-center text-gray-400 text-sm mt-6">
          © 2025 AgentAI • Predictive Maintenance System
        </p>
      </div>
    </div>
  );
};

export default Login;
