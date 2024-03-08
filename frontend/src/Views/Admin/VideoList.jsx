import React, {useEffect, useState} from 'react'
import { getVideos, clearErrors, getAdminVideos } from '../../Actions/videoActions'
import { useDispatch, useSelector } from 'react-redux'
import { VideoTable } from '../../Components/VideoTable'
const VideoList = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [keyword, setKeyword] = useState('')
    const [category, setCategory] = useState('')
    const { videos, videosCount, resPerPage, filteredVideosCount, loading, error } = useSelector(state => state.videos)
    useEffect(()=>{
        if (error){
            dispatch(clearErrors())
        }
        if (keyword === ''){
            dispatch(getAdminVideos(currentPage,keyword, category))
        }
        else{
            setCurrentPage(1)
            dispatch(getAdminVideos(currentPage, keyword, category))
        }
        

    },[dispatch, error, keyword,currentPage, category])
   
    let count = (videosCount > 0 ? videosCount : resPerPage)
    if (keyword) {
      if (filteredVideosCount > 0) {
        count = filteredVideosCount
      }
      else {
        count = resPerPage
      }
    }
    if (category) {
      if (filteredVideosCount > 0) {
        count = filteredVideosCount
      }
      else {
        count = resPerPage
      }
  
    }
    return (
        <>
            <div className="container p-10 mx-auto mt-5 flex min-h-screen justify-center items-center">
                <VideoTable header="Video List" videos={videos} videosCount={count} resPerPage={resPerPage} loading={loading} currentPage={currentPage} setCurrentPage={setCurrentPage} keyword={keyword} setKeyword={setKeyword} category={category} setCategory={setCategory}/>
            </div>

        </>
    )
}

export default VideoList