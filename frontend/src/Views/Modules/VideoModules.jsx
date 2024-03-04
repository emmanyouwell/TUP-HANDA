import React, {useEffect} from 'react'
import VideoCard from '../../Components/VideoCard'
import {useDispatch, useSelector} from 'react-redux'
import { getVideos, clearErrors } from '../../Actions/videoActions'
import Loader from '../../Components/Loader'
const VideoModules = () => {
    const dispatch = useDispatch()
    const {videos, loading, error} = useSelector(state => state.videos)
    useEffect(()=>{
        if (error){
            dispatch(clearErrors)
        }
        dispatch(getVideos())
    },[dispatch, error])
    return (
        <>
            {/* <Navbar /> */}
            <div className="container mx-auto p-10 mt-10">
                {loading ? <div className="min-h-screen"><Loader /></div> : <>
                <h1 className="mb-20 font-bold text-3xl md:text-4xl lg:text-5xl font-[Poppins]">Watch our tutorials!</h1>
                <div className="grid justify-items-center items-center justify-center gap-10 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
                    {videos.map(video => (
                        <VideoCard key={video._id} link={video.videoLink} title={video.title} shortDesc={video.shortDesc} />
                    ))}
                </div>
                
                </>}
               

            </div>

        </>
    )
}

export default VideoModules