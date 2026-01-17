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

  return (
    <AuthContext.Provider value={{ userData, employees: userData?.employees, admin: userData?.admin, updateEmployees }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
