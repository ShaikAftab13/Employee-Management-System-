import React, { useState } from 'react'

function Login({ handleLogin }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        setEmail('');
        setPassword('');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 relative overflow-hidden">

            <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8
                            transform transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-900/30
                            animate-fadeIn">

                <h2 className="text-2xl font-bold text-white text-center mb-6 tracking-wide">
                    Welcome Back
                </h2>

                <form className="space-y-5" onSubmit={submitHandler}>

                    <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter email"
                        className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400
                                    border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                                    transition-all duration-300 focus:scale-[1.02]"
                    />

                    <input
                        type="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400
                                    border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                                    transition-all duration-300 focus:scale-[1.02]"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95
                        text-white font-semibold transition-all duration-300 shadow-lg"
                    >
                        Login
                    </button>

                </form>

            </div>

            <style>
                {`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out;
                }
                `}
            </style>

        </div>
    )
}

export default Login