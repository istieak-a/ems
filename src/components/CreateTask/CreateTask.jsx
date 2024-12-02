import React from "react";

const CreateTask = () => {
  return (
    <div className="flex flex-col gap-8 border mx-5 py-6 px-5 bg-[#1c1c1c] rounded-lg">
      <h1 className="text-2xl font-bold">Create Task</h1>
      <form className="flex flex-col gap-4">
        <div className="input-box">
          <label>Task Title</label>
          <input type="text" placeholder="Make an ui design" />
        </div>
        <div className="input-box">
          <label>Task Description</label>
          <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta, similique praesentium quidem quos ab!"></textarea>
        </div>
        <div className="input-box">
          <label>Date</label>
          <input type="date" />
        </div>
        <div className="input-box">
          <label>Assign To</label>
          <select>
            <option>Employee 1</option>
            <option>Employee 2</option>
            <option>Employee 3</option>
          </select>
        </div>
        <div className="input-box">
          <label>Category</label>
          <input type="text" placeholder="Design, Development etc!" />
        </div>
        <button className="bg-black py-2 rounded-lg">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
