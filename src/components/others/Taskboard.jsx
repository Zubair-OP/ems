import { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Taskboard() {
  const { employees, updateEmployees } = useContext(AuthContext)
  const [tasktitle, settasktitle] = useState('');
  const [date, setdate] = useState('');
  const [Category, setCategory] = useState('');
  const [Description, setDescription] = useState('');
  const [assign, setassign] = useState('');

  const handleformsubmit = (e) => {
    e.preventDefault();
    const employeeIndex = employees?.findIndex(emp => emp.firstName.toLowerCase() === assign.toLowerCase());

    if (employeeIndex === -1 || employeeIndex === undefined) {
      alert('Employee not found');
      return;
    }
    
    const taskToAdd = { 
      taskTitle: tasktitle, 
      taskDescription: Description, 
      taskDate: date, 
      category: Category, 
      active: false, 
      newTask: true, 
      failed: false, 
      completed: false 
    };

    // Create new array with updated employee (immutable update)
    const updatedEmployees = employees.map((emp, index) => {
      if (index === employeeIndex) {
        return {
          ...emp,
          taskCounts: { ...emp.taskCounts, newTask: emp.taskCounts.newTask + 1 },
          tasks: [...emp.tasks, taskToAdd]
        };
      }
      return emp;
    });
    
    // Update state and localStorage
    updateEmployees(updatedEmployees);
    
    settasktitle('');
    setdate('');
    setCategory('');
    setDescription('');
    setassign('');
  }


  return (
    <div>
        <form onSubmit={handleformsubmit} className='w-full bg-[#333] mt-2 flex flex-col md:flex-row items-start justify-between p-4 md:p-0' >
          <div className='left w-full md:w-1/2 p-4 rounded-md '>
            <div>
            <h3 className='text-sm mb-1 font-semibold'>Task Title</h3>
            <input required value={tasktitle} onChange={(e) => settasktitle(e.target.value)} className='border-2 border-gray-400 w-full outline-none rounded-sm p-2 text-sm' type="text" placeholder='Make a UI Design'/>
          </div>
          <div>
            <h3 className='text-sm mb-1 font-semibold'>Date</h3>
            <input required value={date} onChange={(e) => setdate(e.target.value)} className='border-2 border-gray-400 w-full outline-none rounded-sm p-2 text-sm' type="date"/>
          </div>
          <div>
            <h3 className='text-sm mb-1 font-semibold'>Assign to</h3>
            <input required value={assign} onChange={(e) => setassign(e.target.value)} className='border-2 border-gray-400 w-full outline-none rounded-sm p-2 text-sm' type="text" placeholder='Employee Name'/>
          </div>
          <div>
            <h3 className='text-sm mb-1 font-semibold'>Category</h3>
            <input required value={Category} onChange={(e) => setCategory(e.target.value)} className='border-2 border-gray-400 outline-none w-full rounded-sm p-2 text-sm' type="text" placeholder='Design, dev , etc...'/>
          </div>
          </div>

          <div className='right w-full md:w-1/2 p-4 md:p-5 rounded-md flex flex-col '>
            <div className=''>
               <h3 className='text-sm mb-1.5 font-semibold'>Description</h3>
               <textarea required value={Description} onChange={(e) => setDescription(e.target.value)} rows={9} className='w-full border-2 outline-none border-gray-400 rounded-sm p-2 text-sm'></textarea>
            </div>
            <div>
              <button className='rounded-sm p-2 mt-3 outline-none bg-emerald-600 w-full font-semibold hover:bg-emerald-700 transition-colors'>Create Task</button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default Taskboard