import React from 'react'
import myImage from './assets/server-error.png'
import {Link} from 'react-router-dom'
const ServerErrorPage = () => {
  return (
    <div className='flex  justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen'>
    <div className='max-w-md w-full space-y-8'>
      <div className="flex flex-col items-center">
      
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Server Error
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
            Something went wrong on our end. Please try again later.
        </p>
        <img src={myImage} alt="MyImage"  /> {/* Add this line */}
        <Link to="/" className="underline text-yellow-800">Return home.</Link>
      </div>
    </div>
  </div>
  )
}

export default ServerErrorPage