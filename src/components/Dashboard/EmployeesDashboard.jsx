import React, { useContext } from 'react'
import Headers from '../others/Headers'
import Tasklist from '../others/Tasklist'
import Tasktodo from '../others/Tasktodo'
import { AuthContext } from '../../context/AuthContext'

function EmployeesDashboard({ onLogout, employeeData }) {
  const { employees } = useContext(AuthContext);
  
  // Get fresh employee data from context using email
  const currentEmployee = employees?.find(emp => emp.email === employeeData?.email) || employeeData;
  
  return (
    <div className='bg-[#1C1C1C] min-h-screen p-4 md:p-8 overflow-x-hidden '>
      <Headers name={currentEmployee?.firstName} onLogout={onLogout} />
      <Tasklist taskCounts={currentEmployee?.taskCounts} />
      <Tasktodo tasks={currentEmployee?.tasks} />
    </div>
  )
}

export default EmployeesDashboard
