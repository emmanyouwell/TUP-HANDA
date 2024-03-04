import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { DashboardCards } from '../../Components/DashboardCards'
import {useDispatch, useSelector} from 'react-redux'
import { getAdminUsers } from '../../Actions/userActions'
import { getAdminModules } from '../../Actions/modulesActions'
import { getAdminVideos } from '../../Actions/videoActions'
import Loader from '../../Components/Loader'
const Dashboard = () => {
  const dispatch = useDispatch()
  const {usersCount, loading, error} = useSelector(state => state.allUsers);
  const {loading: moduleLoading, modulesCount, error: moduleError}  = useSelector(state => state.modules);
  const {loading: videoLoading, videosCount, error: videoError} = useSelector(state => state.videos);
  useEffect(()=>{
      dispatch(getAdminUsers());
      dispatch(getAdminModules());
      dispatch(getAdminVideos());
  },[dispatch, error])
  return (
    <>

      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          <div className='flex justify-center items-center'>
            {loading ? <div className='flex justify-center items-center p-10'><Loader/></div> :
            <DashboardCards icon="fa-users" title="Users" data={usersCount && usersCount} textColor="white" bgColor="#f27059" link="/admin/users"/>}

          </div>
          <div className='flex justify-center items-center'>
          {moduleLoading ? <div className='flex justify-center items-center p-10'><Loader/></div> :
            <DashboardCards icon="fa-book" title="Modules" data={modulesCount && modulesCount} textColor="white" bgColor="#60d394" link="/admin/modules"/>}

          </div>
          <div className='flex justify-center items-center'>
          {videoLoading ? <div className='flex justify-center items-center p-10'><Loader/></div> :
            <DashboardCards icon="fa-book" title="Videos" data={videosCount && videosCount} textColor="white" bgColor="#3fa7d6" link="/admin/videos"/>}

          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard