import React, { useState, useEffect, Fragment } from 'react'
import logo from '../assets/TUPHANDA.png'
import { Link, useNavigate } from 'react-router-dom'

import { logoutUser, getProfile, getUser } from '../Actions/userActions'
import { Menu, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { getToken } from '../utils/helper'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Navbar = () => {
  const dispatch = useDispatch()
  const { user, loading, error } = useSelector(state => state.auth)
  const [learnOpen, setLearnOpen] = useState(false)
  const navigate = useNavigate()

  

  const logoutHandler = () => {
    setOpen(false);
    dispatch(logoutUser());
    toast.success('Logged out', {
      position: toast.POSITION.BOTTOM_RIGHT
    });


  }

  useEffect(() => {
    // if (getToken()) {
    //     dispatch(getProfile())
    // }else{
    //   dispatch(getUser())
    // }
    dispatch(getUser())
    console.log(user)
  }, [])

  let Links = [

    { name: "FIRE", link: "/modules/fires" },
    { name: "TYPHOON", link: "/modules/typhoons" },
    { name: "EARTHQUAKE", link: "/modules/earthquakes" },
    { name: "HOTLINES", link: "/hotlines" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=' w-full sticky top-0 left-0 z-20 border-b-2 border-warning' style={{boxShadow: '0px 3px 10px rgba(204,153,0,0.4)'}}>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <Link to="/" onClick={()=>setOpen(false)}>
          <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800'>

            <span className='text-3xl text-indigo-600'>
              <img src={logo} className="w-24 h-12 object-contain" alt="Tup handa logo" />
            </span>
            TUP Handa
          </div>
        </Link>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden z-20'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          <li className="md:ml-8 md:text-xl md:my-0 my-7">
          <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className=" text-gray-800 hover:text-gray-400 duration-500 font-Poppins font-medium">

                    LEARN
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute lg:right-0 z-10 mt-2 w-56  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    
                 
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/modules"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                          onClick={()=>setOpen(false)}
                        >
                          Modules
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/modules/videos"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                          onClick={()=>setOpen(false)}
                        >
                          Videos
                        </Link>
                      )}
                    </Menu.Item>
                    
                    
                   
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>

          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 md:text-xl md:my-0 my-7'>
                <Link to={link.link} onClick={()=>setOpen(false)} className='text-gray-800 hover:text-gray-400 duration-500 font-Poppins font-medium'>{link.name}</Link>
              </li>
            ))
          }

          {user ? (<div className="flex items-center flex-row-reverse justify-end lg:flex-row lg:justify-center lg:mt-0 md:mt-8">
           

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="lg:ml-8 inline-flex justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm rounded-full  hover:bg-gray-50">
                  <div className="flex flex-row-reverse lg:flex-row items-center">
                  <span className="py-2 px-2 md:block lg:hidden xl:block text-sm font-[Poppins] font-medium">Welcome, {user && `${user.firstName}`}</span>
                  <figure className='md:ml-0 lg:ml-8 xl:ml-0 md:block lg:block'>
                    <img
                      src={user.avatar && user.avatar[0].url}
                      className="w-[50px] h-[50px] rounded-full object-cover"
                      alt={user && user.firstName}
                    />
                  </figure>
                  </div>
                
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute lg:right-0 z-10 mt-2 w-56  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {user && user.role === 'admin' &&  <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/admin/dashboard"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                          onClick={()=>setOpen(false)}
                        >
                          Dashboard
                        </Link>
                      )}
                    </Menu.Item>}
                   
                   
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                          onClick={()=>setOpen(false)}
                        >
                          Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/me/exams"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                          onClick={()=>setOpen(false)}
                        >
                          My Exams
                        </Link>
                      )}
                    </Menu.Item>
                    <div>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/"
                            onClick={logoutHandler}
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                            
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>) : <Link to="/login" onClick={()=>setOpen(false)}><button className="btn btn-warning py-2 px-6 text-white rounded-lg md:ml-8 text-lg">Login</button></Link>}


        </ul>
      </div>
    </div>
  )
}

export default Navbar