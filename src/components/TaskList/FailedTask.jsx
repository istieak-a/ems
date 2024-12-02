import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div className="bg-rose-700 text-white flex flex-col gap-8 px-5 py-7 rounded-lg">
        <div className="flex justify-between">
          <h4 className="text-sm font-bold">{task.category}</h4>
          <h4 className="text-xs font-bold">{task.taskDate}</h4>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">{task.taskTitle}</h1>
          <p className="text-sm">{task.taskDescription}</p>
        </div>
      </div>
  )
}

export default FailedTask