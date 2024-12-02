import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext(); 

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const {employees, admin} = getLocalStorage();
        setUserData({admin,employees});
    }, []); 
    // console.log(userData);
    

  return (
    <div>
        <AuthContext.Provider value={{userData, setUserData}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider