import React from 'react'
import logo from '../assets/TUP2.png'
import { Link } from 'react-router-dom'
export default function Example() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

          </div>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link className="text-xl" to="/">
              <img src={logo} className="w-24 h-12 object-cover object-center" alt="logo" />
            </Link></li>
            <li>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Dropdown</div>
                <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div></li>
            <li>
              <details>
                <summary>Disasters</summary>
                <ul className="p-2 z-10">
                  <li><Link to="/modules/fires">Fire Outbreaks</Link></li>
                  <li><Link to="/modules/typhoons">Typhoons</Link></li>
                  <li><a>Floods</a></li>
                  <li><Link to="/modules/earthquakes">Earthquakes</Link></li>
                </ul>
              </details>
            </li>
            <li><a>Emergency plans</a></li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <Link className="text-xl" to="/">
            <img src={logo} className="w-24 h-12 object-cover object-center" alt="logo" />
          </Link>
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/modules">Modules</Link></li>
            <li>
              <details>
                <summary>Disasters</summary>
                <ul className="p-2 z-10">
                  <li><Link to="/modules/fires">Fire Outbreaks</Link></li>
                  <li><Link to="/modules/typhoons">Typhoons</Link></li>
                  <li><a>Floods</a></li>
                  <li><Link to="/modules/earthquakes">Earthquakes</Link></li>
                </ul>
              </details>
            </li>
            <li><a>Emergency plans</a></li>
          </ul>
        </div>

      </div>




      <div className="navbar-end gap-2">

        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
