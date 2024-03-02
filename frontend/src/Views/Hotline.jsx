import React, {useEffect} from 'react'
import AOS from 'aos'

const Hotline = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
    <div className="relative min-h-screen flex flex-col justify-center items-center ">
       <div className="absolute inset-0 filter opacity-30 brightness-75 bg-tuphanda bg-no-repeat bg-cover bg-center bg-fixed"></div>
    <div className="container z-10 mx-auto flex flex-col gap-10 justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold font-[Poppins]" data-aos="zoom-in">Remember these hotlines</h1>
      <img src="https://res.cloudinary.com/dtrr0ihcb/image/upload/v1709261992/TUPHANDA_ASSETS/423472477_915822370199912_5170316225090476437_n_gtxb0r.png" data-aos="zoom-in" className="drop-shadow-lg"alt="hotline" />
    </div>
    </div>
    
    </>
  )
}

export default Hotline