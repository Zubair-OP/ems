import React from 'react'

function Tasklist({ taskCounts }) {
  const counts = taskCounts || { newTask: 0, active: 0, completed: 0, failed: 0 };

  return (
    <div className='flex w-full gap-5 justify-between mt-7 mx-auto'>
        <div className='px-10 py-5 w-[50%] bg-blue-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{counts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='px-10 py-5 w-[50%] bg-yellow-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{counts.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='px-10 py-5 w-[50%] bg-green-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{counts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className='px-10 py-5 w-[50%] bg-red-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{counts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default Tasklist