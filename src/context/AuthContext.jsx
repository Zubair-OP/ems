import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setlocalStorage } from '../utils/localStorage';

// Context create karo
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    // Initialize localStorage if empty
    const stored = getLocalStorage();
    if (!stored.employees || !stored.admin) {
      setlocalStorage();
    }
    const { employees, admin } = getLocalStorage();
    setuserData({ employees, admin });
  }, []);

  // Function to update employees and trigger re-render
  const updateEmployees = (newEmployees) => {
    setuserData(prev => ({ ...prev, employees: newEmployees }));
    localStorage.setItem('employees', JSON.stringify(newEmployees));
  };

  // Accept task - move from new to active
  const acceptTask = (employeeEmail, taskToAccept) => {
    const updatedEmployees = userData?.employees?.map(emp => {
      if (emp.email === employeeEmail) {
        const updatedTasks = emp.tasks.map(task => {
          if (task.taskTitle === taskToAccept.taskTitle && task.taskDate === taskToAccept.taskDate) {
            return { ...task, active: true, newTask: false };
          }
          return task;
        });
        
        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask - 1,
            active: emp.taskCounts.active + 1
          }
        };
      }
      return emp;
    });
    
    if (updatedEmployees) {
      updateEmployees(updatedEmployees);
    }
  };

  // Complete task - move from active to completed
  const completeTask = (employeeEmail, taskToComplete) => {
    const updatedEmployees = userData?.employees?.map(emp => {
      if (emp.email === employeeEmail) {
        const updatedTasks = emp.tasks.map(task => {
          if (task.taskTitle === taskToComplete.taskTitle && task.taskDate === taskToComplete.taskDate) {
            return { ...task, active: false, completed: true };
          }
          return task;
        });
        
        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            active: emp.taskCounts.active - 1,
            completed: emp.taskCounts.completed + 1
          }
        };
      }
      return emp;
    });
    
    if (updatedEmployees) {
      updateEmployees(updatedEmployees);
    }
  };

  // Fail task - move from active to failed
  const failTask = (employeeEmail, taskToFail) => {
    const updatedEmployees = userData?.employees?.map(emp => {
      if (emp.email === employeeEmail) {
        const updatedTasks = emp.tasks.map(task => {
          if (task.taskTitle === taskToFail.taskTitle && task.taskDate === taskToFail.taskDate) {
            return { ...task, active: false, failed: true };
          }
          return task;
        });
        
        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            active: emp.taskCounts.active - 1,
            failed: emp.taskCounts.failed + 1
          }
        };
      }
      return emp;
    });
    
    if (updatedEmployees) {
      updateEmployees(updatedEmployees);
    }
  };

  return (
    <AuthContext.Provider value={{ userData, employees: userData?.employees, admin: userData?.admin, updateEmployees, acceptTask, completeTask, failTask }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider