import React from "react";
import Header from "../Header/Header";
import './Dashboard.css'
import CreateTask from "../CreateTask/CreateTask";
import TaskListAdmin from "../TaskList/TaskListAdmin";

const AdminDashboard = () => {
  return (
    <div className="bg-[#000] py-10 px-8 text-white flex flex-col gap-14">
      <Header />
      <CreateTask />
      <TaskListAdmin />
    </div>
  );
};

export default AdminDashboard;
