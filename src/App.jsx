import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import { Toaster, toast } from 'react-hot-toast'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [authData, setAuthData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

    if (loggedInUser) {
      setUser(loggedInUser.role)
      setLoggedInUserData(loggedInUser.data)
    }
  }, [])

  const handleLogin = (email, password) => {

    const adminUser = authData.admin.find(
      e => e.email === email && e.password === password
    )

    if (adminUser) {
      const userData = { ...adminUser, role: 'admin' }

      setUser('admin')
      setLoggedInUserData(userData)

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: 'admin', data: userData })
      )

      toast.success('Admin Login successful')
      return
    }

    const employeeUser = authData.employees.find(
      e => e.email === email && e.password === password
    )

    if (employeeUser) {
      const userData = { ...employeeUser, role: 'employee' }

      setUser('employee')
      setLoggedInUserData(userData)

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: 'employee', data: userData })
      )

      toast.success('Employee Login successful')
      return
    }

    toast.error("Invalid credentials")
  }

  return (
    <>
      <Toaster position='bottom-center' />

      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard setUser={setUser} data={loggedInUserData} />
      ) : (
        <EmployeeDashboard setUser={setUser} />
      )}
    </>
  )
}

export default App