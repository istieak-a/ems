import React from 'react'

const NewTask = ({task}) => {
  return (
    <div className="bg-indigo-700 text-white flex flex-col gap-8 px-5 py-7 rounded-lg">
        <div className="flex justify-between">
          <h4 className="text-sm font-bold">{task.category}</h4>
          <h4 className="text-xs font-bold">{task.taskDate}</h4>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">{task.taskTitle}</h1>
          <p className="text-sm">{task.taskDescription}</p>
        </div>
        <div className='flex gap-4'>
          <button className='bg-green-500 px-3 py-1 rounded-xl'>Mark Complete</button>
          <button className='bg-red-500 px-3 py-1 rounded-xl'>Mark Failed</button>
        </div>
      </div>
  )
}

export default NewTask