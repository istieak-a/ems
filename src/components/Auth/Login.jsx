import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black px-10">
      <div className="border px-5 flex flex-col gap-20 bg-[#1c1c1c] text-white w-full py-20">
        <h1 className="font-semibold text-4xl">Login</h1>
        <form
          className="flex flex-col gap-3 "
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 border-orange-800 rounded-full py-3 px-8 text-black"
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 border-orange-800 rounded-full py-3 px-8 text-black"
            type="password"
            placeholder="Password"
          />
          <button className="bg-orange-800 text-white rounded-full font-semibold text-2xl py-4 mt-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
