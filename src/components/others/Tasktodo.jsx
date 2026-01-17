import React from 'react'
import AcceptTask from '../Tasklist/AcceptTask'
import CompleteTask from '../Tasklist/CompleteTask'
import FailedTask from '../Tasklist/FailedTask'
import NewTask from '../Tasklist/NewTask'

function Tasktodo({ tasks }) {
  const taskList = tasks || [];
  
  // Filter tasks by their status
  const newTasks = taskList.filter(task => task.newTask && !task.completed && !task.failed);
  const activeTasks = taskList.filter(task => task.active && !task.newTask && !task.completed && !task.failed);
  const completedTasks = taskList.filter(task => task.completed);
  const failedTasks = taskList.filter(task => task.failed);

  return (
    <div id='todo' className='p-2 overflow-x-auto h-[45vh] min-h-[300px] w-full flex gap-4 items-center mt-10 py-2'>
        {newTasks.map((task, index) => (
          <NewTask key={`new-${index}`} task={task} />
       ))}
        {activeTasks.map((task, index) => (
          <AcceptTask key={`active-${index}`} task={task} />
        ))}
        {completedTasks.map((task, index) => (
          <CompleteTask key={`complete-${index}`} task={task} />
        ))}
        {failedTasks.map((task, index) => (
          <FailedTask key={`failed-${index}`} task={task} />
        ))}
        {taskList.length === 0 && (
          <p className='text-gray-400 text-center w-full'>No tasks available</p>
        )}
    </div>
  )
}

export default Tasktodo