import Login from "./components/Auth/Login";
import EmployeesDashboard from "./components/Dashboard/EmployeesDashboard";
import "./App.css";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import AdminDashboard from "./components/Dashboard/AdminDashborad";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("LoggedInUser"));
    if (savedUser && userData) {
      setUser(savedUser.role);
      if (savedUser.role === "Employee") {
        const emp = userData.employees?.find(e => e.email === savedUser.email);
        setLoggedInUserData(emp);
      } else if (savedUser.role === "Admin") {
        const adm = userData.admin?.find(a => a.email === savedUser.email);
        setLoggedInUserData(adm);
      }
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    const foundAdmin = userData?.admin?.find(
      (adm) => adm.email === email && adm.password === password
    );
    if (foundAdmin) {
      setUser("Admin");
      setLoggedInUserData(foundAdmin);
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "Admin", email }));
      return;
    }

    const foundEmployee = userData?.employees?.find(
      (emp) => emp.email === email && emp.password === password
    );
    if (foundEmployee) {
      setUser("Employee");
      setLoggedInUserData(foundEmployee);
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "Employee", email }));
      return;
    }

    alert("Invalid Credentials");
  };

  const handleLogout = () => {
    localStorage.removeItem("LoggedInUser");
    setUser(null);
    setLoggedInUserData(null);
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "Admin" && (
        <AdminDashboard onLogout={handleLogout} adminData={loggedInUserData} employees={userData?.employees} />
      )}
      {user === "Employee" && (
        <EmployeesDashboard onLogout={handleLogout} employeeData={loggedInUserData} />
      )}
    </>
  );
}

export default App;
