import React from 'react'

const VideoList = () => {
  return (
    <>
    <div className="container mx-auto mt-5">
    <SortableTable videos={videos}/>
    </div>
    
</>
  )
}

export default VideoList