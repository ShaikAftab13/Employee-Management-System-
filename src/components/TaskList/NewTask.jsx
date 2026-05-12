import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function NewTask({ data, employee }) {

    const [userData, setUserData] = useContext(AuthContext);
    const acceptTask = () => {

        const updatedEmployees = userData.employees.map((emp) => {

            if (emp.firstName === employee.firstName) {

                const updatedTasks = emp.tasks.map((task) => {

                    if (task.id === data.id) {
                        return {
                            ...task,
                            active: true,
                            newTask: false,
                            completed: false,
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

                        // never below 0
                        newTask: Math.max(0, (emp.taskStats.newTask || 0) - 1),

                        active: (emp.taskStats.active || 0) + 1
                    }
                };
            }

            return emp;
        });

        const updatedData = {
            ...userData,
            employees: updatedEmployees
        };

        setUserData(updatedData);

        localStorage.setItem(
            "employees",
            JSON.stringify(updatedEmployees)
        );
    };

    return (
        <div className='flex-shrink-0 w-[85vw] sm:w-[320px] rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-900/20 border border-blue-400/20 p-4 sm:p-5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'>

            <div className='flex justify-between items-start gap-2 flex-wrap'>

                <span className='text-[10px] sm:text-[11px] uppercase tracking-widest px-2 sm:px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30'>
                    {data.category}
                </span>

                <span className='text-xs text-gray-300 whitespace-nowrap'>
                    {data.taskDate}
                </span>
            </div>

            <h2 className='mt-4 text-lg sm:text-xl font-semibold text-white leading-snug break-words'>
                {data.taskTitle}
            </h2>

            <p className='mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed break-words'>
                {data.taskDescription}
            </p>

            <div className='mt-5'>
                <button
                    onClick={acceptTask}
                    className='w-full sm:w-auto px-4 py-2 text-xs font-medium rounded-lg bg-blue-500/20 text-blue-300 border border-blue-400/30 hover:bg-blue-500/30 transition'
                >
                    Accept Task
                </button>
            </div>

        </div>
    )
}

export default NewTask