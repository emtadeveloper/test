import React, { useEffect, useState } from 'react'
import { getUsers } from '../utilities/api/axiosApiHandler';
const UserContext = React.createContext();




const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUsers().then((res) => {
            setUsers(res.data);
            setLoading(false)
        });
    }, []);


    return (
        <UserContext.Provider value={{ users, loading }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
