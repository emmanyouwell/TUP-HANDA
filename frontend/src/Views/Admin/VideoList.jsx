import React, {useEffect, useState} from 'react'
import { getVideos, clearErrors, getAdminVideos } from '../../Actions/videoActions'
import { useDispatch, useSelector } from 'react-redux'
import { VideoTable } from '../../Components/VideoTable'
const VideoList = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [keyword, setKeyword] = useState('')
    const { videos, videosCount, resPerPage, filteredVideosCount, loading, error } = useSelector(state => state.videos)
    useEffect(()=>{
        if (error){
            dispatch(clearErrors())
        }
        if (keyword === ''){
            dispatch(getAdminVideos(currentPage))
        }
        else{
            setCurrentPage(1)
            dispatch(getAdminVideos(currentPage, keyword))
        }
        

    },[dispatch, error, keyword,currentPage])
   
    let count = videosCount
    if (keyword){
        count = filteredVideosCount
    }
    return (
        <>
            <div className="container p-10 mx-auto mt-5 flex min-h-screen justify-center items-center">
                <VideoTable videos={videos} videosCount={count} resPerPage={resPerPage} loading={loading} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>

        </>
    )
}

export default VideoList