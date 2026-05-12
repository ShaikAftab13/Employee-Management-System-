    import React, { useContext } from 'react'
    import Header from '../other/Header'
    import TaskListNumbers from '../other/TaskListNumbers'
    import TaskList from '../TaskList/TaskList'
    import { AuthContext } from '../../context/AuthProvider'

    function EmployeeDashboard({ setUser }) {

        const [userData, setUserData] = useContext(AuthContext)

        if (!userData) {
            return <h1 className='text-white p-10'>Loading...</h1>
        }

        const loggedInUser = JSON.parse(
            localStorage.getItem("loggedInUser")
        )

        const employeeData = userData.employees.find(
            (e) => e.id === loggedInUser.data.id
        )

        if (!employeeData) {
            return <h1 className='text-white p-10'>Employee Not Found</h1>
        }

        return (
            <div>

                <Header
                    data={employeeData}
                    setUser={setUser}
                />

                <TaskListNumbers data={employeeData} />

                <TaskList data={employeeData} userData={userData} setUserData={setUserData} />

            </div>
        )
    }

    export default EmployeeDashboard