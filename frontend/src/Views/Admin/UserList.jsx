import React, {useEffect, useState} from 'react'
import { allUsers, getAdminUsers, clearErrors } from '../../Actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { UserTable } from '../../Components/UserTable'
const UserList = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [keyword, setKeyword] = useState('')
    const { users, usersCount, resPerPage, filteredUsersCount, loading, error } = useSelector(state => state.allUsers)
    useEffect(()=>{
        if (error){
            dispatch(clearErrors())
        }
        dispatch(getAdminUsers(currentPage, keyword))

    },[dispatch, error, keyword])
    useEffect(()=>{
        console.log(users)
        console.log(usersCount)
        console.log(resPerPage)
        console.log(filteredUsersCount)

    },[users, usersCount, resPerPage, filteredUsersCount])
    let count = usersCount
    if (keyword){
        count = filteredUsersCount
    }
    return (
        <>
            <div className="container mx-auto mt-5">
                <UserTable keyword={keyword} setKeyword={setKeyword} users={users} usersCount={count} resPerPage={resPerPage} filteredUsersCount={filteredUsersCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>

        </>
    )
}

export default UserList