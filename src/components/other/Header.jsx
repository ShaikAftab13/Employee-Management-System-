import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

function Header({ data,setUser }) {

    const handleLogOut = () => {
        localStorage.removeItem('loggedInUser')
        // window.location.reload();
        setUser(null);
    }

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">

                <div className="w-full px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between">

                    <h1 className="text-white text-base sm:text-xl md:text-2xl font-semibold leading-tight">
                        Hi,
                        <span className="block text-blue-400 font-bold">
                            {data?.firstName}
                        </span>
                    </h1>

                    <div className="flex items-center gap-3">

                        <div className="hidden sm:flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-white text-xs">Online</span>
                        </div>

                        <button onClick={handleLogOut} className="bg-red-500 hover:bg-red-600 active:scale-95 text-white text-sm px-5 py-2 rounded-xl font-medium transition-all duration-200 cursor-pointer shadow-lg">
                            Log Out
                        </button>

                    </div>

                </div>

            </header>

            <div className="h-10"></div>
        </>
    )
}

export default Header