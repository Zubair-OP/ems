import React from 'react'
import Headers from '../others/Headers'
import Tasklist from '../others/Tasklist'
import Tasktodo from '../others/Tasktodo'

function EmployeesDashboard({ onLogout, employeeData }) {
  return (
    <div className='bg-[#1C1C1C] h-screen p-8 overflow-x-hidden '>
      <Headers name={employeeData?.firstName} onLogout={onLogout} />
      <Tasklist taskCounts={employeeData?.taskCounts} />
      <Tasktodo tasks={employeeData?.tasks} />
    </div>
  )
}

export default EmployeesDashboard
