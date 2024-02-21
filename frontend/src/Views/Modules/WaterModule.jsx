import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import img1 from '../../assets/before-typhoon.jpg'
import img2 from '../../assets/during-typhoon.jpg'
import img3 from '../../assets/after-typhoon.webp'
import Footer1 from '../../Components/Footer1'
import ChecklistComponent from '../../Components/ChecklistComponent'
import Navbar from '../../Components/Navbar'
const WaterModule = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <Navbar />
            <div className="overflow-x-hidden overflow-y-hidden">

                {/* Typhoon/Hurricane */}
                <div className="relative min-h-screen p-10 flex flex-col justify-center items-align">
                    <div className="absolute inset-0 filter brightness-75 bg-hurricane bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    <div className="flex flex-wrap flex-col justify-center items-center gap-5">
                        <h1 className="font-black text-6xl text-white text-center drop-shadow-md" data-aos="zoom-in">Typhoon / Hurricane</h1>
                        <p className="container text-white text-center text-xl drop-shadow-sm" data-aos="zoom-in">A hurricane is a powerful and destructive tropical cyclone characterized by strong winds, heavy rain, and storm surges. It forms over warm ocean waters and gains strength as it moves across the water, fueled by the evaporation and condensation of water vapor. Hurricanes can cause widespread damage to coastal areas and inland regions, posing significant threats to life and property.</p>
                    </div>

                </div>

                {/* Before */}
                <div className="relative min-h-screen p-10">
                    <div className="absolute inset-0 filter brightness-50 bg-hurBefore bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    <h1 className="font-black text-6xl text-gray-100 drop-shadow-lg relative z-10 mb-10" data-aos="flip-left">Before</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-10 relative">
                        <div className="lg:row-span-4 row-span-6 col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <img src={img1} alt="Guidelines before a typhoon/flood by Philstar" />

                        </div>
                        <div className="lg:col-span-1 typhoon col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Stay Informed.</h1>
                            <p className="z-10 text-xl">Monitor weather forecasts and updates from reliable sources such as meteorological agencies or local authorities. Pay attention to typhoon warnings and advisories issued for your area.</p>
                        </div>

                        <div className="lg:col-span-1 typhoon col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Prepare an Emergency Kit.</h1>
                            <p className="z-10 text-xl mb-4">Assemble an emergency kit that includes essentials such as non-perishable food, water, medications, flashlight, batteries, first aid supplies, important documents, and any other items you may need in case of evacuation or loss of power.</p>

                            <a href="#checklist" className="z-10 underline">Don't know what to include in your kit? Visit our checklist.<i class="fa-solid fa-arrow-right ms-2"></i></a>
                        </div>
                        <div className="xl:row-span-1 lg:col-span-1 typhoon row-span-2 col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl">Secure your home.</h1>
                            <ul className="steps steps-vertical text-white text-xl relative z-10">
                                <li className="step step-primary">Reinforce Windows and Doors</li>
                                <li className="step step-primary">Anchor and Secure Outdoor Items</li>
                                <li className="step step-primary">Trim Trees and Shrubs</li>
                                <li className="step step-primary">Clear Gutters and Drains</li>
                                <li className="step step-primary">Secure Roof and Siding</li>
                            </ul>
                        </div>
                        <div className="lg:col-span-1 col-span-2 typhoon flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Stock up on supplies.</h1>
                            <p className="z-10 text-xl">Stock up on food, water, and other essentials to last several days in case of power outages or disruptions to transportation and services.</p>

                        </div>
                        <div className="lg:col-span-1 col-span-2 typhoon flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Have a communication plan.</h1>
                            <p className="z-10 text-xl"> Establish a communication plan with your family or household members in case you are separated during the typhoon. Designate a meeting point and keep emergency contact numbers handy.</p>

                        </div>
                        <div className="lg:col-span-1 typhoon col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Evacuation plan.</h1>
                            <p className="z-10 text-xl"> Know your evacuation routes and have a plan in place in case you need to evacuate. Follow instructions from local authorities regarding evacuation orders and shelter locations.</p>

                        </div>
                        <div className="xl:col-span-2 lg:col-span-3 typhoon col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Protect important documents.</h1>
                            <p className="z-10 text-xl">Keep important documents such as identification, insurance papers, and medical records in a waterproof and portable container. Consider making digital copies as well.</p>

                        </div>
                    </div>



                </div>
                {/* During */}
                <div className="relative min-h-screen p-10">
                    <div className="absolute inset-0 filter brightness-50 bg-hurDuring bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    <h1 className="font-black text-6xl text-end text-gray-100 drop-shadow-lg relative z-10 mb-10" data-aos="fade-left">During</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-10 relative">
                        <div className="lg:row-span-3 row-span-6 col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <img src={img2} alt="Guidelines during a typhoon/flood by Philstar" />

                        </div>
                        <div className="lg:col-span-1 typhoon col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="font-bold text-4xl mb-2 z-10">Stay indoors.</h1>
                            <p className="text-xl z-10"> Remain indoors throughout the duration of the storm. Stay away from windows, doors, and exterior walls, as these areas are vulnerable to strong winds and flying debris.</p>
                        </div>

                        <div className="lg:col-span-1 typhoon col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="font-bold text-4xl mb-2 z-10">Listen to updates.</h1>
                            <p className="text-xl mb-4 z-10"> Keep informed about the latest weather updates and follow instructions from local authorities. Listen to radio, TV, or check official websites for updates and alerts.</p>


                        </div>
                        <div className="lg:col-span-1 typhoon col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl">Stay away from windows.</h1>
                            <p className="z-10 text-xl">
                                Avoid standing near windows or glass doors, as they can shatter due to high winds or flying debris. Seek shelter in an interior room or a basement if possible.
                            </p>

                        </div>
                        <div className="lg:col-span-1 col-span-2 typhoon flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Avoid using electrical appliances.</h1>
                            <p className="z-10 text-xl">Unplug electrical appliances and avoid using them during the storm to reduce the risk of electrical fires or damage from power surges.</p>

                        </div>
                        <div className="lg:col-span-1 col-span-2 typhoon flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Be prepared for flooding.</h1>
                            <p className="z-10 text-xl">If you live in a flood-prone area, be prepared for potential flooding. Move to higher ground if necessary and avoid walking or driving through flooded areas.</p>

                        </div>

                        <div className="lg:col-span-1 typhoon col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Evacuate Calmly</h1>
                            <p className="z-10 text-xl">When asked by authorities to evacuate, please do so calmly. Bring all essential items, shut off the main electrical source, and secure your home before evacuating.</p>

                        </div>
                    </div>



                </div>

                {/* After */}
                <div className="relative min-h-screen p-10">
                    <div className="absolute inset-0 filter brightness-50 bg-hurAfter bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    <h1 className="font-black text-6xl text-gray-100 drop-shadow-lg relative z-10 mb-10" data-aos="fade-left">After</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-10 relative">
                        <div className="lg:row-span-3 row-span-6 col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <img src={img3} alt="Guidelines after a typhoon/flood by Philstar" />

                        </div>
                        <div className="lg:col-span-1 typhoon col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="font-bold text-4xl mb-2 z-10">Stay informed.</h1>
                            <p className="text-xl z-10">Continue to listen to updates from local authorities and follow any instructions or advisories they provide regarding post-typhoon conditions and safety precautions.</p>
                        </div>

                        <div className="lg:col-span-1 typhoon col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="font-bold text-4xl mb-2 z-10">Check for damage.</h1>
                            <p className="text-xl mb-4 z-10"> Assess your home and property for any damage caused by the typhoon. Inspect the roof, windows, doors, and walls for signs of damage or leaks. If you suspect structural damage, evacuate and seek professional assistance.</p>


                        </div>
                        <div className="lg:col-span-1 typhoon col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl">Beware of hazards.</h1>
                            <p className="z-10 text-xl">
                                Be cautious of potential hazards such as downed power lines, flooded areas, and unstable structures. Avoid walking or driving through floodwaters, as they may be contaminated or hiding hazards.
                            </p>

                        </div>
                        <div className="lg:col-span-1 col-span-2 typhoon flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Contact authorities if necessary.</h1>
                            <p className="z-10 text-xl"> If you encounter any emergency situations or hazards such as downed power lines, gas leaks, or flooding, contact the appropriate authorities immediately and follow their instructions.</p>

                        </div>
                        <div className="lg:col-span-1 col-span-2 typhoon flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Secure your property.</h1>
                            <p className="z-10 text-xl"> Make temporary repairs to prevent further damage, such as covering broken windows or tarping damaged roofs. Be cautious when using ladders or climbing on roofs, and seek assistance if needed.</p>

                        </div>
                        <div className="lg:col-span-1 typhoon col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Dispose of debris.</h1>
                            <p className="z-10 text-xl">Clean up debris and fallen branches from your property to prevent further hazards or damage. Follow local guidelines for disposing of debris and waste.</p>

                        </div>
                       
                    </div>



                </div>

                {/* Emergency checklist for Typhoon/Floods */}
                <ChecklistComponent />
            </div>
            <Footer1 />
        </>
    )
}

export default WaterModule