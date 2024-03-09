import React from 'react'
import myImage from './assets/no-response.png'
import {Link} from 'react-router-dom'
const EmptyPage = () => {
  return (
    <div className='flex  justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen'>
    <div className='max-w-md w-full space-y-8'>
      <div className="flex flex-col items-center">
      
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          There's nothing here
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
            Sorry we couldn't find what you were looking for.
        </p>
        <img src={myImage} alt="MyImage"  /> {/* Add this line */}
        
      </div>
    </div>
  </div>
  )
}

export default EmptyPage