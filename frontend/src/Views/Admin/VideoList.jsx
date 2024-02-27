import React, {useEffect} from 'react'
import { getVideos, clearErrors } from '../../Actions/videoActions'
import { useDispatch, useSelector } from 'react-redux'
import { VideoTable } from '../../Components/VideoTable'
const VideoList = () => {
    const dispatch = useDispatch()
    const { videos, loading, error } = useSelector(state => state.videos)
    useEffect(()=>{
        if (error){
            dispatch(clearErrors())
        }
        dispatch(getVideos())
    },[dispatch, error])
    return (
        <>
            <div className="container mx-auto mt-5">
                <VideoTable videos={videos} />
            </div>

        </>
    )
}

export default VideoList