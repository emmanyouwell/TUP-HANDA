import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DashboardCards } from '../../Components/DashboardCards'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminUsers } from '../../Actions/userActions'
import { getAdminModules } from '../../Actions/modulesActions'
import { getAdminVideos } from '../../Actions/videoActions'
import Loader from '../../Components/Loader'
import UserDepartmentCharts from '../../Components/Charts/UserDepartmentCharts'
import UserCourseCharts from '../../Components/Charts/UserCourseCharts'
import DownloadedModulesChart from '../../Components/Charts/DownloadedModulesCharts'
import DownloadedModules from '../../Components/ApexCharts/DownloadedModules'
import CardDataStats from '../../Components/template/CardDataStats'
import UsersPerDepartmentApex from '../../Components/ApexCharts/UsersPerDepartmentApex'
import UsersPerCourseApex from '../../Components/ApexCharts/UserPerCourseApex'
import VideoViewsApex from '../../Components/ApexCharts/VideoViewsApex'
const Dashboard = () => {
  const dispatch = useDispatch()
  const { usersCount, loading, error } = useSelector(state => state.allUsers);
  const { loading: moduleLoading, modulesCount, error: moduleError } = useSelector(state => state.modules);
  const { loading: videoLoading, videosCount, error: videoError } = useSelector(state => state.videos);
 


  useEffect(() => {
    dispatch(getAdminUsers());
    dispatch(getAdminModules());
    dispatch(getAdminVideos());
  }, [dispatch, error])
  return (
    <>

      <div className="mx-auto max-w-screen-2xl p-10 md:p-6 2xl:p-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">

          <div className='flex justify-center items-center'>

            <DashboardCards icon="fa-users" title="Users" data={usersCount && usersCount} bgColor="WHITE" link="/admin/users" />

          </div>
          <div className='flex justify-center items-center'>

            <DashboardCards icon="fa-book" title="Modules" data={modulesCount && modulesCount} textColor="#60d394" bgColor="WHITE" link="/admin/modules" />

          </div>
          <div className='flex justify-center items-center'>

            <DashboardCards icon="fa-video" title="Videos" data={videosCount && videosCount} textColor="#3fa7d6" bgColor="WHITE" link="/admin/videos" />

          </div>

        </div>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <UsersPerDepartmentApex />
          <UsersPerCourseApex />
          <div className="col-span-full ">
            <DownloadedModules />
          </div>
          <div className="col-span-full ">
            <VideoViewsApex />
          </div>
        </div>
      </div>



    </>
  )
}

export default Dashboard