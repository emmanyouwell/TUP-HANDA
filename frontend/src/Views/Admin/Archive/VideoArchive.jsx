import React, { useEffect, useState } from 'react'
import { VideoTable } from '../../../Components/VideoTable'
import { useDispatch, useSelector } from 'react-redux'
import { getArchivedVideos, clearErrors } from '../../../Actions/videoActions'
const VideoArchive = () => {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const {archivedVideos, archivedVideosCount, resPerPage, filteredArchivedVideosCount, loading, error} = useSelector(state => state.archiveVideo)
  useEffect(() => {
    if (error) {
      dispatch(clearErrors())
    }
    if (keyword === '') {
      dispatch(getArchivedVideos(currentPage))
    }
    else{
      setCurrentPage(1)
      dispatch(getArchivedVideos(1, keyword))
    }
    
  }, [dispatch, error, keyword, currentPage])

  let count = archivedVideosCount
  if (keyword){
      count = filteredArchivedVideosCount
  }
  return (
    <>
      <div className="container mx-auto mt-5 p-10 flex justify-center items-center">
        <VideoTable header="Video Archive List" loading={loading} videos={archivedVideos} videosCount={count} resPerPage={resPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} keyword={keyword} setKeyword={setKeyword} /> 
        
      </div>
    </>
  )
}

export default VideoArchive