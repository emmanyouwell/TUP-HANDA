import React from 'react'
import myImage from './assets/not-found-pick.png'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
const NotFoundPage = () => {
  const navigate = useNavigate()
  const notify = (e) => {
    navigate('/');
    toast.success(`${e.target.innerText} has been removed from the group`)
  }
  return (
    <div className='flex  justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen'>
      <div className='min-w-md w-full space-y-8'>
        <div className="flex flex-col items-center">

          <h2 className='mt-6 text-center text-4xl font-extrabold text-gray-900'>
            Page Not Found
          </h2>
          <p className='mt-2 text-center text-lg text-red-800'>
            This is unacceptable. Please pick a member to remove from the group.
          </p>
          <div className="grid grid-cols-4 -mt-20 mb-10">
            <div className="col-span-full flex justify-center items-center">
              <img src={myImage} alt="Page not found" className='w-[60%]' />
            </div>
            <div className='flex justify-center items-center col-span-full'>
              <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-5" onClick={notify}>
                Eili
              </button>
              <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-5" onClick={notify}>
                Maye
              </button>
              <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-5" onClick={notify}>
                Emman
              </button>
              <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-5" onClick={notify}>
                Reden
              </button>
            </div>
           
          </div>

          <Link to="/" className="underline text-yellow-800">In a forgiving mood? Return home.</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage