import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "admin") {
      setUser("admin");
      console.log("This is admin")
    } else if (email == "user@me.com" && password == "user") {
      setUser("user");
      console.log("This is user")
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
    </>
  );
};

export default App;
