import React from 'react'
import Headers from '../../Components/Header'
import Carousel from '../../Components/Carousel'
import Hero from '../../Components/Hero'
import ModuleBanner from '../../Components/ModuleBanner'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const Modules = () => {
  return (
    <div>
      {/* <Headers /> */}
      {/* <ModuleBanner /> */}
      {/* <div className="container mx-auto p-10">
        <article className="prose flex justify-between">
          <h1>Explore our modules</h1>
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-full md:w-auto" />
          </div>
        </article>
        <Carousel />
      </div> */}
      <Parallax pages={4}>
        <ParallaxLayer className="bg-no-repeat bg-center min-h-screen" offset={0} speed={1.5} factor={2} style={{backgroundImage: 'url("https://th.bing.com/th/id/R.9e85edef9d76532a3684e28cc1e02dff?rik=BGVbMo6CGVP62g&riu=http%3a%2f%2fwww.newforestobservatory.com%2fwordpress%2fwp-content%2fgallery%2fquasarsandother%2fmoon_nfo.jpg&ehk=cYgJnVYy8vkw3Hp1MQSswYGi8ZKUlJPSIonDiG0WE4k%3d&risl=&pid=ImgRaw&r=0")', backgroundSize: 'cover'}} />

        <ParallaxLayer className="bg-center bg-no-repeat min-h-screen" factor={4} style={{backgroundImage: 'url("https://mymodernmet.com/wp/wp-content/uploads/2019/02/night-landscape-photography-6.jpeg")', backgroundSize: 'cover'}} offset={2} speed={2}/>

        <ParallaxLayer offset={0.2} speed={0.5}>
          <h1 className="text-white">hello world</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={0.5}>
          <h2>I'm home</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Modules