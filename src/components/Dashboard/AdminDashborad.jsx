import React from 'react'
import Headers from '../others/Headers'
import Taskboard from '../others/Taskboard'
import Alltasks from '../others/Alltasks'

function AdminDashborad({ onLogout, employees }) {
  return (
    <div className='w-full min-h-screen p-4 bg-[#111]'>
      <Headers name="Admin" onLogout={onLogout} />
      <Taskboard employees={employees} />
      <Alltasks employees={employees} />
    </div>
  )
}

export default AdminDashborad