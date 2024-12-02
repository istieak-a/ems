import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  useEffect(() => {
    setLocalStorage();
  }, []);
  console.log(authData.userData);
  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.userData.admin.find((a) => a.email === email && a.password === password)
    ) {
      setUser("admin");
      console.log("This is admin");
    } else if (
      authData &&
      authData.userData.employees.find(
        (e) => e.email === email && e.password === password
      )
    ) {
      setUser("user");
      console.log("This is user");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : ""}
      {user === "user" ? <EmployeeDashboard /> : ""}
    </>
  );
};

export default App;
