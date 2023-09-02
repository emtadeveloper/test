import React, { useContext } from 'react'
import MUIDataTable from "mui-datatables";
import { UserContext } from '../../context'
import Loading from '../Loading/Loading';


const Users = () => {

    const users = useContext(UserContext)
    const columns = ["name", "username", "email", "website", "phone"];
    const options = {
        filterType: "checkbox",
    };

    const showUsers = (
        users.loading ?
            <Loading />
            :
            <MUIDataTable
                title={"User List"}
                data={users.users}
                columns={columns}
                options={options}
            />
            )

    return (
        <>
            {showUsers}
            
            
        </>
    )
}

export default Users
