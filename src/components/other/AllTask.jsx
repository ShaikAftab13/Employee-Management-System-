import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

function AllTask() {

    const [userData] = useContext(AuthContext);
    console.log(userData);

    if (!userData || !userData.employees) {
        return <h1 className='text-white'>Loading...</h1>
    }

    return (

        <div className='w-full p-5'>

            <div className='overflow-x-auto rounded-2xl border border-zinc-700 shadow-2xl'>

                <table className='w-full text-left border-collapse'>

                    <thead className='bg-zinc-900 text-white'>

                        <tr>

                            <th className='px-6 py-4 border-b border-zinc-700'>
                                Employee Name
                            </th>

                            <th className='px-6 py-4 border-b border-zinc-700 text-center'>
                                New Task
                            </th>

                            <th className='px-6 py-4 border-b border-zinc-700 text-center'>
                                Active Task
                            </th>

                            <th className='px-6 py-4 border-b border-zinc-700 text-center'>
                                Completed Task
                            </th>

                            <th className='px-6 py-4 border-b border-zinc-700 text-center'>
                                Failed Task
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {userData.employees.map((employee) => (

                            <tr
                                key={employee.id}
                                className='bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 text-white'
                            >

                                <td className='px-6 py-4 border-b border-zinc-700 font-semibold text-emerald-400'>
                                    {employee.firstName}
                                </td>

                                <td className='px-6 py-4 border-b border-zinc-700 text-center'>
                                    {employee.taskStats.newTask}
                                </td>

                                <td className='px-6 py-4 border-b border-zinc-700 text-center'>
                                    {employee.taskStats.active}
                                </td>

                                <td className='px-6 py-4 border-b border-zinc-700 text-center'>
                                    {employee.taskStats.completed}
                                </td>

                                <td className='px-6 py-4 border-b border-zinc-700 text-center text-red-400'>
                                    {employee.taskStats.failed}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default AllTask