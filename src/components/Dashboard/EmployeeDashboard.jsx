import React from "react";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="bg-[#1c1c1c] py-10 px-8 flex flex-col gap-8">
      <Header />
      <div className="grid grid-cols-2 gap-3">
        <div className="text-white bg-blue-600 px-5 py-2 rounded-lg">
          <h1 className="font-bold text-5xl">0</h1>
          <h2 className="font-semibold">New Task</h2>
        </div>
        <div className="text-white bg-green-600 px-5 py-2 rounded-lg">
          <h1 className="font-bold text-5xl">0</h1>
          <h2 className="font-semibold">Completed</h2>
        </div>
        <div className="text-white bg-yellow-600 px-5 py-2 rounded-lg">
          <h1 className="font-bold text-5xl">0</h1>
          <h2 className="font-semibold">Accepted</h2>
        </div>
        <div className="text-white bg-red-600 px-5 py-2 rounded-lg">
          <h1 className="font-bold text-5xl">0</h1>
          <h2 className="font-semibold">Failed</h2>
        </div>
      </div>
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
