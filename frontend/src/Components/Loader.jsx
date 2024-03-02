import React from 'react'
import loader from '../assets/loader.gif'
const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={loader} alt="loader" className="w-12 h-12" />
            <p className="animate-fastpulse font-bold">Loading...</p>
        </div>

    )
}

export default Loader