import React, { useContext } from 'react'
import UserIndex from '../../components/User/UserIndex'
import { UserContext } from '../../context'
import { Link } from 'react-router-dom'

const Home = () => {
    const users = useContext(UserContext)
    return (
        <div>
            {!users.loading && <Link to='/about-me'>
                About
            </Link>}
            <UserIndex />
        </div>
    )
}

export default Home
