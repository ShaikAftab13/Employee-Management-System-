import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

function AdminDashboard({ data,setUser }) {
    return (
        <div className='min-h-screen w-full bg-[#0B0F19] p-4 sm:p-6 lg:p-10 text-white'>

            <Header data = {data} setUser = {setUser}/>
            <CreateTask />
            <AllTask/>

        </div>
    )
}

export default AdminDashboard