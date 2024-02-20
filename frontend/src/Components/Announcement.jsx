import React from 'react'

const Announcement = () => {
    return (
        <div className="bg-yellow-600 px-4 py-3 text-white">
            <p className="text-center text-sm font-medium">
                New material is now out! 
                <a href="#" className="inline-block underline">Check out this new course!</a>
            </p>
        </div>
    )
}

export default Announcement