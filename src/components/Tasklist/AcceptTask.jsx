import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

function AcceptTask({ task }) {
  const { completeTask, failTask } = useContext(AuthContext);

  const handleComplete = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'));
    if (loggedInUser?.email) {
      completeTask(loggedInUser.email, task);
    }
  };

  const handleFail = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'));
    if (loggedInUser?.email) {
      failTask(loggedInUser.email, task);
    }
  };

  return (
       <div className='w-[250px] flex-shrink-0 h-full bg-yellow-400 rounded-xl p-4'>
            <div className='flex justify-between'>
                <h2 className='bg-red-700 px-3 py-1 text-sm rounded-md'>{task?.category || 'Active'}</h2>
                <h3 className='text-sm'>{task?.taskDate || 'No date'}</h3>
            </div>
            <h2 className='mt-5 font-bold text-lg'>{task?.taskTitle || 'Untitled Task'}</h2>
            <p className='text-xs mt-2'>
                {task?.taskDescription || 'No description available'}
            </p>
            <div className='flex justify-between mt-6 '>
                <button onClick={handleComplete} className='cursor-pointer bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button onClick={handleFail} className='cursor-pointer bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
        </div>
  )}

export default AcceptTask