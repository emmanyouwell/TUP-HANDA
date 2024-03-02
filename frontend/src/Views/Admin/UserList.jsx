import React, {useEffect, useState} from 'react'
import { allUsers, getAdminUsers, clearErrors } from '../../Actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { UserTable } from '../../Components/UserTable'
const UserList = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const { users, usersCount, resPerPage, filteredUsersCount, loading, error } = useSelector(state => state.allUsers)
    useEffect(()=>{
        if (error){
            dispatch(clearErrors())
        }
        dispatch(getAdminUsers(1))

    },[dispatch, error])
    useEffect(()=>{
        console.log(users)
        console.log(usersCount)
        console.log(resPerPage)
        console.log(filteredUsersCount)

    },[users, usersCount, resPerPage, filteredUsersCount])
    return (
        <>
            <div className="container mx-auto mt-5">
                <UserTable users={users} usersCount={usersCount} resPerPage={resPerPage} filteredUsersCount={filteredUsersCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>

        </>
    )
}

export default UserList