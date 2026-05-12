import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AcceptTask({ data, employee }) {

    const [userData, setUserData] = useContext(AuthContext);

    const completeTask = () => {

        const updatedEmployees = userData.employees.map((emp) => {

            if (emp.firstName === employee.firstName) {

                const updatedTasks = emp.tasks.map((task) => {
                    if (task.id === data.id) {
                        return {
                            ...task,
                            active: false,
                            newTask: false,
                            completed: true,
                            failed: false
                        };
                    }
                    return task;
                });

                return {
                    ...emp,
                    tasks: updatedTasks,

                    taskStats: {
                        ...emp.taskStats,
                        active: Math.max(0, (emp.taskStats.active || 0) - 1),
                        completed: (emp.taskStats.completed || 0) + 1
                    }
                };
            }

            return emp;
        });

        setUserData({ ...userData, employees: updatedEmployees });

        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    };

    const failTask = () => {

        const updatedEmployees = userData.employees.map((emp) => {

            if (emp.firstName === employee.firstName) {

                const updatedTasks = emp.tasks.map((task) => {

                    if (task === data) {
                        return {
                            ...task,
                            active: false,
                            newTask: false,
                            completed: false,
                            failed: true
                        }
                    }

                    return task
                })

                return {
                    ...emp,

                    tasks: updatedTasks,

                    taskStats: {
                        ...emp.taskStats,
                        active: emp.taskStats.active > 0 ? emp.taskStats.active - 1 : 0,
                        failed: emp.taskStats.failed + 1
                    }
                }
            }

            return emp
        })

        const updatedData = {
            ...userData,
            employees: updatedEmployees
        }

        setUserData(updatedData)

        localStorage.setItem(
            "employees",
            JSON.stringify(updatedEmployees)
        )
    }

    return (
        <div className='w-[85vw] sm:w-[340px] min-h-[220px] rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#111827] border border-white/10 p-4 sm:p-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>

            <div className='flex flex-wrap items-start sm:items-center justify-between gap-2'>

                <span className='text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20'>
                    {data.category}
                </span>

                <span className='text-xs text-gray-400 whitespace-nowrap'>
                    {data.taskDate}
                </span>

            </div>

            <h2 className='mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-white leading-snug break-words'>
                {data.taskTitle}
            </h2>

            <p className='mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed break-words'>
                {data.taskDescription}
            </p>

            <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 mt-5'>

                <button
                    onClick={completeTask}
                    className='w-full sm:w-auto px-3 py-2 text-xs font-medium rounded-lg bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 transition'
                >
                    Mark Completed
                </button>

                <button
                    onClick={failTask}
                    className='w-full sm:w-auto px-3 py-2 text-xs font-medium rounded-lg bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 transition'
                >
                    Mark Failed
                </button>

            </div>
        </div>
    )
}

export default AcceptTask