import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Section1 from '../Components/Section1'
import Footer1 from '../Components/Footer1'
import Carousel from '../Components/Carousel'
import Testimonials from '../Components/Testimonials'
import Announcement from '../Components/Announcement'
import Accordion from '../Components/Accordion'
import Navbar from '../Components/Navbar'
import ChecklistComponent from '../Components/ChecklistComponent'
function Home() {
    
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <>
            <div className="flex flex-col min-h-screen bg-default">

                {/* <Announcement /> */}
                

                <Section1 />

                <section className="mx-auto p-10">
                    <ChecklistComponent/>
                </section>

                <section className="container mx-auto p-10">
                    <Testimonials />
                </section>

                <section className="container mx-auto p-10">
                    <article className="prose mb-5">
                        <h1>Frequently Asked Questions </h1>

                    </article>
                    <Accordion />
                </section>


            </div>

        </>
    )
}

export default Home
