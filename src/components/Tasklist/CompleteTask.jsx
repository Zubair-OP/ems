import React from 'react'

function CompleteTask({ task }) {
  return (
        <div className='w-62.5 shrink-0 h-full bg-green-400 rounded-xl p-4'>
            <div className='flex justify-between'>
                <h2 className='bg-green-700 px-3 py-1 text-sm rounded-md'>{task?.category || 'Completed'}</h2>
                <h3 className='text-sm'>{task?.taskDate || 'No date'}</h3>
            </div>
            <h2 className='mt-5 font-bold text-lg'>{task?.taskTitle || 'Untitled Task'}</h2>
            <p className='text-xs mt-2'>
                {task?.taskDescription || 'No description available'}
            </p>
             <div className='mt-6'>
                <button className='cursor-pointer w-full bg-green-600 rounded font-medium py-1 px-2 text-xs'>Completed ✓</button>
            </div>
        </div>
  )
}

export default CompleteTask