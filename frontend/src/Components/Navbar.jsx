import React, { useState, useEffect } from 'react'
import logo from '../assets/TUPHANDA.png'
import { Link, useNavigate } from 'react-router-dom'
import { logout, getUser, getToken } from '../utils/helper'
import { toast } from 'react-toastify'
const Navbar = () => {

  const [user, setUser] = useState({})
  const navigate = useNavigate()
  const logoutUser = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_API}/api/v1/logout`)
      setUser({})
      logout(() => navigate('/'))
      window.location.reload()

    } catch (error) {
      toast.error(error.response.data.message)
    }

  }
  const logoutHandler = () => {
    logoutUser();
    toast.success('log out', {
      position: toast.POSITION.BOTTOM_RIGHT
    });

  }
  const getProfile = async () => {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      }
    }
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/me`, config)
      setUser(data.user)



      console.log('helo')


    } catch (error) {
      console.log(error)
    }

  }


  useEffect(() => {

    if (getToken()) {
      getProfile()
    } else {
      setUser(getUser())
    }

    console.log(user)

  }, [])


  let Links = [
    { name: "MODULES", link: "/modules" },
    { name: "FIRE", link: "/modules/fires" },
    { name: "TYPHOON", link: "/modules/typhoons" },
    { name: "EARTHQUAKE", link: "/modules/earthquakes" },
    { name: "HOTLINES", link: "/hotlines" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full sticky top-0 left-0 z-20'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <Link to="/">
          <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800'>

            <span className='text-3xl text-indigo-600'>
              <img src={logo} className="w-24 h-12 object-contain" alt="Tup handa logo" />
            </span>
            TUP Handa
          </div>
        </Link>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden z-20'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500 font-Poppins font-medium'>{link.name}</Link>
              </li>
            ))
          }

          {user ? 'may user pre': <Link to="/login"><button className="btn btn-warning py-2 px-6 rounded-lg md:ml-8 text-lg">Login</button></Link>}
          

        </ul>
      </div>
    </div>
  )
}

export default Navbar