import React from 'react'
import {Link} from 'react-router-dom'
const Dashboard = () => {
  return (
    <>
      
        <div className="container mx-auto">
            <h1 className="text-3xl text-center mt-5">Admin Dashboard</h1>
            <ul className="list-disc text-center list-inside text-3xl mt-5">
                <li><Link to="/admin/modules">Modules</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Dashboard