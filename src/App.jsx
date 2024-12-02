import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  useEffect(() => {
    setLocalStorage();
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  }, []);
  const handleLogin = (email, password) => {
    if (authData && authData.admin.find((a) => a.email === email && a.password === password)) {
      setUser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    } else if (authData) {
      const employee = authData.employees.find((e) => e.email === email && e.password === password);
      if (employee) {
        setUser("user");
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
      }else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : ""}
      {user === "user" ? <EmployeeDashboard data={loggedInUserData} /> : ""}
    </>
  );
};

export default App;
