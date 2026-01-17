import React from 'react'

function Tasklist({ taskCounts }) {
  const counts = taskCounts || { newTask: 0, active: 0, completed: 0, failed: 0 };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mt-7'>
        <div className='px-9 py-6 w-full bg-blue-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{counts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='px-9 py-6 w-full bg-yellow-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{counts.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='px-9 py-6 w-full bg-green-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{counts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className='px-9 py-6 w-full bg-red-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{counts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default Tasklist