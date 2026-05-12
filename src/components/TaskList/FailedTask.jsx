import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function FailedTask({ data, employeeId }) {

    return (
        <div className='flex-shrink-0 w-full sm:w-[320px] h-auto sm:h-[230px] rounded-2xl bg-gradient-to-br from-red-500/10 to-red-900/20 border border-red-400/20 p-4 sm:p-5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'>

            <div className='flex justify-between items-center'>

                <span className='text-[10px] sm:text-[11px] uppercase tracking-widest px-2 sm:px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-400/30'>
                    {data?.category}
                </span>

                <span className='text-[10px] sm:text-xs text-gray-300'>
                    {data?.taskDate}
                </span>
            </div>

            <h2 className='mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-white leading-snug'>
                {data?.taskTitle}
            </h2>

            <p className='mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3'>
                {data?.taskDescription}
            </p>

            <div className='mt-5 sm:mt-6'>
                <button
                    className='w-full px-3 sm:px-4 py-2 text-xs font-medium rounded-lg bg-red-500/20 text-red-300 border border-red-400/30 hover:bg-red-500/30 transition'
                >
                    Failed ✕
                </button>
            </div>

        </div>
    );
}

export default FailedTask;