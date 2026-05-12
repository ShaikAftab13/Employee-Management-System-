import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()

function AuthProvider({ children }) {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setLocalStorage();
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
    }, [])

    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider