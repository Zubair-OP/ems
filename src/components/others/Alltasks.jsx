import React from 'react'

function Alltasks({ employees }) {
  const employeeList = employees || [];

  return (
    <div id='todo' className='bg-[#1c1c1c] p-2 rounded mt-2 overflow-x-auto h-auto min-h-[60vh]'>
      <div className='min-w-[800px]'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 text-center'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 text-center'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 text-center'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 text-center'>Failed</h5>
        </div>
        {employeeList.length === 0 ? (
          <p className='text-gray-400 text-center py-4'>No employees available</p>
        ) : 
        (
          employeeList.map((emp, index) => {
            return (
              <div key={index} className='bg-blue-400 flex justify-between rounded px-4 py-2 mb-2 text-white font-semibold'>
                  <h2 className='w-1/5'>{emp.firstName}</h2>
                  <h3 className='w-1/5 text-center'>{emp.taskCounts?.newTask || 0}</h3>
                  <h5 className='w-1/5 text-center'>{emp.taskCounts?.active || 0}</h5>
                  <h5 className='w-1/5 text-center'>{emp.taskCounts?.completed || 0}</h5>
                  <h5 className='w-1/5 text-center'>{emp.taskCounts?.failed || 0}</h5>
              </div>
            );
          })
        )}
      </div>
    </div>
  )
}

export default Alltasks