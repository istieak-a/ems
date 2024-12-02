import React from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";
import CompletedTask from "./CompletedTask";

const TaskList = ({data}) => {
  // console.log(data.tasks[0])
  return (
    <div className="flex flex-col gap-4">
      {
        data.tasks.map((task) => {
          if (task.active) {
            return <AcceptTask task={task} />
          }
          if (task.completed) {
            return <CompletedTask task={task}/>
          }
          if (task.failed) {
            return <FailedTask task={task}/>
          }
          if (task.newTask) {
            return <NewTask task={task}/>
          }
        })
      }
      
      
      
      
    </div>
  );
};

export default TaskList;
