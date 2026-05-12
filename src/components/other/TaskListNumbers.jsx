import React from 'react'

function TaskListNumbers({ data }) {
    return (
        <div className='w-full mt-8 p-4 sm:p-6 lg:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>

            <div className='bg-gradient-to-br from-blue-500/10 to-blue-900/20 border border-blue-400/20 rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer'>
                <h2 className='text-5xl font-extrabold text-blue-300'>
                    {data.taskStats.newTask}
                </h2>
                <h3 className='text-xl font-semibold mt-3 text-blue-100'>
                    New Tasks
                </h3>
            </div>

            <div className='bg-gradient-to-br from-emerald-500/10 to-emerald-900/20 border border-emerald-400/20 rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer'>
                <h2 className='text-5xl font-extrabold text-emerald-300'>
                    {data.taskStats.completed}
                </h2>
                <h3 className='text-xl font-semibold mt-3 text-emerald-100'>
                    Completed
                </h3>
            </div>

            <div className='bg-gradient-to-br from-indigo-500/10 to-indigo-900/20 border border-indigo-400/20 rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer'>

                <h2 className='text-5xl font-extrabold text-indigo-300'>
                    {data.taskStats.active}
                </h2>

                <h3 className='text-xl font-semibold mt-3 text-indigo-100'>
                    Accepted
                </h3>
            </div>

            <div className='bg-gradient-to-br from-red-500/10 to-red-900/20 border border-red-400/20 rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-red-500/10 transition-all duration-300 cursor-pointer'>
                <h2 className='text-5xl font-extrabold text-red-300'>
                    {data.taskStats.failed}
                </h2>
                <h3 className='text-xl font-semibold mt-3 text-red-100'>
                    Failed
                </h3>
            </div>

        </div>
    )
}

export default TaskListNumbers