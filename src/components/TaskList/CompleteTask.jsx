import React from 'react'

function CompleteTask({ data }) {
    return (
        <div className='flex-shrink-0 w-[320px] h-[230px] rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-900/20 border border-emerald-400/20 p-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>

            <div className='flex justify-between items-center'>

                <span className='text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'>
                    {data.category}
                </span>

                <span className='text-[10px] sm:text-xs text-gray-300'>
                    {data.taskDate}
                </span>
            </div>

            <h2 className='mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-white leading-snug'>
                {data.taskTitle}
            </h2>

            <p className='mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3'>
                {data.taskDescription}
            </p>

            <div className='mt-5 sm:mt-6'>
                <button className='w-full px-3 sm:px-4 py-2 text-xs font-medium rounded-lg bg-green-500/20 text-green-300 border border-green-400/30 hover:bg-green-500/30 transition'>
                    Completed ✓
                </button>
            </div>
        </div>
    )
}

export default CompleteTask