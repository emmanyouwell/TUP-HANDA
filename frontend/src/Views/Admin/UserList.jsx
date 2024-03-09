import React, {useEffect, useState} from 'react'
import { allUsers, getAdminUsers, clearErrors } from '../../Actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { UserTable } from '../../Components/UserTable'
import Loader from '../../Components/Loader'
const UserList = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [keyword, setKeyword] = useState('')
    const { users, usersCount, resPerPage, filteredUsersCount, loading, error } = useSelector(state => state.allUsers)
    useEffect(()=>{
        if (error){
            dispatch(clearErrors())
        }
        if (keyword === ''){
            dispatch(getAdminUsers(currentPage))
        }
        else{
            setCurrentPage(1)
            dispatch(getAdminUsers(currentPage, keyword))
        }
        

    },[dispatch, error, keyword,currentPage])
   
    let count = usersCount
    if (keyword){
        count = filteredUsersCount
    }
    return (
        <>
            <div className="sm:container p-10 sm:mx-auto mt-5 flex justify-center items-center">
                
                <UserTable keyword={keyword} setKeyword={setKeyword} users={users} usersCount={count} resPerPage={resPerPage} filteredUsersCount={filteredUsersCount} currentPage={currentPage} setCurrentPage={setCurrentPage} loading={loading}/>
                
            </div>

        </>
    )
}

export default UserList