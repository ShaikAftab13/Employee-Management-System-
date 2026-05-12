import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

function CreateTask() {

    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    const submitHandler = (e) => {

        e.preventDefault();

        const newTask = {
            id: Date.now(),
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        }

        const updatedEmployees = userData.employees.map((employee) => {

            if (assignTo === employee.firstName) {

                return {

                    ...employee,

                    tasks: [...employee.tasks, newTask],

                    taskStats: {
                        ...employee.taskStats,
                        newTask: (employee.taskStats.newTask || 0) + 1
                    },

                    taskNumber: employee.taskNumber + 1
                }
            }

            return employee
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

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
    }

    const deleteTask = (employeeName, taskIndex) => {

        const updatedEmployees = userData.employees.map((employee) => {

            if (employee.firstName === employeeName) {

                const taskToDelete = employee.tasks[taskIndex]

                const updatedTasks = employee.tasks.filter(
                    (_, index) => index !== taskIndex
                )

                return {

                    ...employee,

                    tasks: updatedTasks,

                    taskNumber:
                        employee.taskNumber > 0
                            ? employee.taskNumber - 1
                            : 0,

                    taskStats: {

                        ...employee.taskStats,

                        newTask:
                            taskToDelete.newTask && employee.taskStats.newTask > 0
                                ? employee.taskStats.newTask - 1
                                : employee.taskStats.newTask,

                        active:
                            taskToDelete.active && employee.taskStats.active > 0
                                ? employee.taskStats.active - 1
                                : employee.taskStats.active,

                        completed:
                            taskToDelete.completed && employee.taskStats.completed > 0
                                ? employee.taskStats.completed - 1
                                : employee.taskStats.completed,

                        failed:
                            taskToDelete.failed && employee.taskStats.failed > 0
                                ? employee.taskStats.failed - 1
                                : employee.taskStats.failed
                    }
                }
            }

            return employee
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

        <div className='mt-10 w-full bg-[#111827] border border-white/10 rounded-3xl p-5 sm:p-8 shadow-2xl'>

            <form onSubmit={submitHandler} className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                <div>

                    <h3 className='text-sm font-medium text-gray-300 mb-2'>
                        Task Title
                    </h3>

                    <input
                        type="text"
                        value={taskTitle}
                        onChange={e => setTaskTitle(e.target.value)}
                        placeholder='Make a UI Design'
                        className='w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-sm sm:text-base'
                    />

                    <h3 className='text-sm font-medium text-gray-300 mb-2 mt-6'>
                        Date
                    </h3>

                    <input
                        type="date"
                        value={taskDate}
                        onChange={e => setTaskDate(e.target.value)}
                        className='w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-sm sm:text-base'
                    />

                    <h3 className='text-sm font-medium text-gray-300 mb-2 mt-6'>
                        Assign to
                    </h3>

                    <input
                        type="text"
                        value={assignTo}
                        onChange={e => setAssignTo(e.target.value)}
                        placeholder='Employee Name'
                        className='w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-sm sm:text-base'
                    />

                    <h3 className='text-sm font-medium text-gray-300 mb-2 mt-6'>
                        Category
                    </h3>

                    <input
                        type="text"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        placeholder='Design, Dev..etc'
                        className='w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-sm sm:text-base'
                    />

                </div>

                <div className='flex flex-col'>

                    <h3 className='text-sm font-medium text-gray-300 mb-2'>
                        Description
                    </h3>

                    <textarea
                        rows="10"
                        value={taskDescription}
                        onChange={e => setTaskDescription(e.target.value)}
                        placeholder='Enter task description...'
                        className='w-full h-full min-h-[250px] bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-500 text-sm sm:text-base'
                    ></textarea>

                    <button className='mt-6 w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] transition-all duration-300 py-3 rounded-xl font-semibold text-sm sm:text-base cursor-pointer'>
                        Create Task
                    </button>

                </div>

            </form>

            <div className='mt-10 border-t border-white/10 pt-8'>

                <h2 className='text-2xl font-bold mb-6 text-white'>
                    Created Tasks
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>

                    {userData.employees.map((employee) => (

                        employee.tasks.map((task, index) => (

                            <div
                                key={index}
                                className='relative overflow-hidden bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300'
                            >

                                <div className='flex items-start justify-between gap-3'>

                                    <div>

                                        <h2 className='text-xl font-bold text-white'>
                                            {task.taskTitle}
                                        </h2>

                                        <p className='text-sm text-gray-400 mt-1'>
                                            {task.category}
                                        </p>

                                    </div>

                                    <span className={`text-xs px-3 py-1 rounded-full ${task.completed
                                        ? 'bg-green-500/20 text-green-400'
                                        : task.failed
                                            ? 'bg-red-500/20 text-red-400'
                                            : 'bg-blue-500/20 text-blue-400'
                                        }`}>
                                        {
                                            task.completed
                                                ? 'Completed'
                                                : task.failed
                                                    ? 'Failed'
                                                    : 'Active'
                                        }
                                    </span>

                                </div>

                                <p className='text-gray-300 text-sm mt-4 leading-relaxed'>
                                    {task.taskDescription}
                                </p>

                                <div className='mt-5 space-y-2'>

                                    <div className='flex items-center justify-between text-sm'>

                                        <span className='text-gray-400'>
                                            Assigned To
                                        </span>

                                        <span className='text-white font-medium'>
                                            {employee.firstName}
                                        </span>

                                    </div>

                                    <div className='flex items-center justify-between text-sm'>

                                        <span className='text-gray-400'>
                                            Due Date
                                        </span>

                                        <span className='text-white font-medium'>
                                            {task.taskDate}
                                        </span>

                                    </div>

                                </div>

                                <button
                                    onClick={() => deleteTask(employee.firstName, index)}
                                    className='mt-6 w-full bg-red-600 hover:bg-red-700 transition-all duration-300 py-2.5 rounded-xl font-medium'
                                >
                                    Delete Task
                                </button>

                            </div>
                        ))
                    ))}

                </div>

            </div>

        </div>
    )
}

export default CreateTask