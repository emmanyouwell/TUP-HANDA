import React, { useEffect, useState } from 'react'
import { VideoTable } from '../../../Components/VideoTable'
import { useDispatch, useSelector } from 'react-redux'
import { getArchivedVideos, clearErrors } from '../../../Actions/videoActions'
const VideoArchive = () => {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [category, setCategory] = useState('all')
  const {archivedVideos, archivedVideosCount, resPerPage, filteredArchivedVideosCount, loading, error} = useSelector(state => state.archiveVideo)
  useEffect(() => {
    if (error) {
      dispatch(clearErrors())
    }
    if (keyword === '') {
      dispatch(getArchivedVideos(currentPage, keyword, category))
    }
    else{
      setCurrentPage(1)
      dispatch(getArchivedVideos(1, keyword, category))
    }
    
  }, [dispatch, error, keyword, currentPage, category])
  let count = (archivedVideosCount > 0 ? archivedVideosCount : resPerPage)
  if (keyword) {
    if (filteredArchivedVideosCount > 0) {
      count = filteredArchivedVideosCount
    }
    else {
      count = resPerPage
    }
  }
  if (category) {
    if (filteredArchivedVideosCount > 0) {
      count = filteredArchivedVideosCount
    }
    else {
      count = resPerPage
    }

  }
  return (
    <>
      <div className="container mx-auto mt-5 p-10 flex justify-center items-center">
        <VideoTable header="Video Archive List" loading={loading} videos={archivedVideos} videosCount={count} resPerPage={resPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} keyword={keyword} setKeyword={setKeyword} category={category} setCategory={setCategory}/> 
        
      </div>
    </>
  )
}

export default VideoArchive