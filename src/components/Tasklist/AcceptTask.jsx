import React from 'react'

function AcceptTask({ task }) {
  return (
       <div className='w-[250px]  flex-shrink-0 h-full bg-green-400 rounded-xl p-4'>
            <div className='flex justify-between'>
                <h2 className='bg-red-700 px-3 py-1 text-sm rounded-md'>{task?.category || 'Active'}</h2>
                <h3 className='text-sm'>{task?.taskDate || 'No date'}</h3>
            </div>
            <h2 className='mt-5 font-bold text-lg'>{task?.taskTitle || 'Untitled Task'}</h2>
            <p className='text-xs mt-2'>
                {task?.taskDescription || 'No description available'}
            </p>
            <div className='flex justify-between mt-6 '>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
        </div>
  )}

export default AcceptTask