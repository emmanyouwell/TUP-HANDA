import { useState } from 'react'
import Header from '../Components/Header'
import Section1 from '../Components/Section1'
import Footer1 from '../Components/Footer1'
import Carousel from '../Components/Carousel'
import Testimonials from '../Components/Testimonials'
import Announcement from '../Components/Announcement'
import Accordion from '../Components/Accordion'
function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="flex flex-col min-h-screen bg-default">
                <Header />

                <Announcement />
                

                <Section1 />

                <section className="container mx-auto p-10">
                    <article className="prose prose-headings:underline flex justify-between">
                        <h1>Finish your modules</h1>
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-full md:w-auto" />
                        </div>
                    </article>

                    <Carousel />
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

                <Footer1 />

            </div>

        </>
    )
}

export default Home
