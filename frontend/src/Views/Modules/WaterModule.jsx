import React, { useEffect } from 'react'
import Header from '../../Components/Header'
import ChecklistCard from '../../Components/ChecklistCard'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img1 from '../../assets/before-typhoon.jpg'
import img2 from '../../assets/during-typhoon.jpg'
import img3 from '../../assets/after-typhoon.webp'
const WaterModule = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <Header />
            <div className="overflow-x-hidden overflow-y-hidden">

                <div className="min-h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center bg-hurricane bg-fixed">
                    <div className="flex flex-wrap flex-col justify-center items-center gap-5">
                        <h1 className="font-black text-6xl text-white drop-shadow-md" data-aos="zoom-in">Typhoon/Hurricane</h1>
                        <p className="container text-white text-center text-xl drop-shadow-sm" data-aos="zoom-in">A hurricane is a powerful and destructive tropical cyclone characterized by strong winds, heavy rain, and storm surges. It forms over warm ocean waters and gains strength as it moves across the water, fueled by the evaporation and condensation of water vapor. Hurricanes can cause widespread damage to coastal areas and inland regions, posing significant threats to life and property.</p>
                    </div>

                </div>

                <div className="relative min-h-screen p-10">
                    <div className="absolute inset-0 filter brightness-50 bg-hurBefore bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    <h1 className="font-black text-6xl text-gray-100 drop-shadow-lg relative z-10 mb-10" data-aos="fade-right">Before</h1>
                    <div className="grid grid-auto-flow:column grid-cols-4 gap-4 z-10 relative">
                        <div className="box col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Stay Informed.</h1>
                            <p className="z-10 text-xl">Monitor weather forecasts and updates from reliable sources such as meteorological agencies or local authorities. Pay attention to typhoon warnings and advisories issued for your area.</p>
                        </div>
                        <div className="row-span-6 col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-left">
                            <img src={img1} alt="Guidelines before a typhoon/flood by Philstar" />

                        </div>
                        <div className="box col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Prepare an Emergency Kit.</h1>
                            <p className="z-10 text-xl mb-4">Assemble an emergency kit that includes essentials such as non-perishable food, water, medications, flashlight, batteries, first aid supplies, important documents, and any other items you may need in case of evacuation or loss of power.</p>

                            <a href="#checklist" className="z-10 text-end">Don't know what to include in your kit? Visit our checklist.<i class="fa-solid fa-arrow-right ms-2"></i></a>
                        </div>
                        <div className="box row-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-right">
                            <h1 className="z-10 font-bold text-4xl">Secure your home.</h1>
                            <ul className="steps steps-vertical text-white text-xl relative z-10" data-aos="fade-right">
                                <li className="step step-primary">Reinforce Windows and Doors</li>
                                <li className="step step-primary">Anchor and Secure Outdoor Items</li>
                                <li className="step step-primary">Trim Trees and Shrubs</li>
                                <li className="step step-primary">Clear Gutters and Drains</li>
                                <li className="step step-primary">Secure Roof and Siding</li>
                            </ul>
                        </div>
                        <div className="box flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Stock up on supplies.</h1>
                            <p className="z-10 text-xl">Stock up on food, water, and other essentials to last several days in case of power outages or disruptions to transportation and services.</p>

                        </div>
                        <div className="box flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Have a communication plan.</h1>
                            <p className="z-10 text-xl"> Establish a communication plan with your family or household members in case you are separated during the typhoon. Designate a meeting point and keep emergency contact numbers handy.</p>

                        </div>
                        <div className="box col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-up">
                            <h1 className="z-10 font-bold text-4xl mb-2">Evacuation plan.</h1>
                            <p className="z-10 text-xl"> Know your evacuation routes and have a plan in place in case you need to evacuate. Follow instructions from local authorities regarding evacuation orders and shelter locations.</p>

                        </div>
                        <div className="box col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-up">
                            <h1 className="z-10 font-bold text-4xl mb-2">Protect important documents.</h1>
                            <p className="z-10 text-xl">Keep important documents such as identification, insurance papers, and medical records in a waterproof and portable container. Consider making digital copies as well.</p>

                        </div>
                    </div>



                </div>

                <div className="relative min-h-screen p-10">
                    <div className="absolute inset-0 filter brightness-50 bg-hurDuring bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    <h1 className="font-black text-6xl text-end text-gray-100 drop-shadow-lg relative z-10 mb-10" data-aos="fade-left">During</h1>
                    <div className="grid grid-auto-flow:column grid-cols-4 gap-4 z-10 relative">
                        <div className="row-span-6 col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-right">
                            <img src={img2} alt="Guidelines before a typhoon/flood by Philstar" />

                        </div>
                        <div className="box col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-left">
                            <h1 className="font-bold text-4xl mb-2 z-10">Stay indoors.</h1>
                            <p className="text-xl z-10"> Remain indoors throughout the duration of the storm. Stay away from windows, doors, and exterior walls, as these areas are vulnerable to strong winds and flying debris.</p>
                        </div>

                        <div className="box col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-left">
                            <h1 className="font-bold text-4xl mb-2 z-10">Listen to updates.</h1>
                            <p className="text-xl mb-4 z-10"> Keep informed about the latest weather updates and follow instructions from local authorities. Listen to radio, TV, or check official websites for updates and alerts.</p>

                            
                        </div>
                        <div className="box col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-right">
                            <h1 className="z-10 font-bold text-4xl">Stay away from windows.</h1>
                            <p className="z-10 text-xl">
                            Avoid standing near windows or glass doors, as they can shatter due to high winds or flying debris. Seek shelter in an interior room or a basement if possible.
                            </p>
                            
                        </div>
                        <div className="box flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Avoid using electrical appliances.</h1>
                            <p className="z-10 text-xl">Unplug electrical appliances and avoid using them during the storm to reduce the risk of electrical fires or damage from power surges.</p>

                        </div>
                        <div className="box flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Be prepared for flooding.</h1>
                            <p className="z-10 text-xl">If you live in a flood-prone area, be prepared for potential flooding. Move to higher ground if necessary and avoid walking or driving through flooded areas.</p>

                        </div>
                        <div className="box col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-up">
                            <h1 className="z-10 font-bold text-4xl mb-2">Evacuation plan</h1>
                            <p className="z-10 text-xl"> Know your evacuation routes and have a plan in place in case you need to evacuate. Follow instructions from local authorities regarding evacuation orders and shelter locations.</p>

                        </div>
                        <div className="box col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="fade-up">
                            <h1 className="z-10 font-bold text-4xl mb-2">Protect important documents</h1>
                            <p className="z-10 text-xl">Keep important documents such as identification, insurance papers, and medical records in a waterproof and portable container. Consider making digital copies as well.</p>

                        </div>
                    </div>



                </div>
                <div className="flex justify-center items-center min-h-screen bg-pic3 bg-cover bg-center bg-no-repeat bg-fixed">
                    <h1 className="font-black text-6xl text-white" data-aos="fade-right">Shark</h1>
                </div>
                <div className="p-10" id="checklist">
                    <div className="p-3 mb-3">
                        <h2 className="font-bold text-4xl mb-3" data-aos="fade-down">Emergency kit checklist</h2>
                        <p data-aos="fade-down">Prepare for the storm with our Typhoon/Hurricane Emergency Kit Checklist. In the face of these powerful natural disasters, it's crucial to have the right supplies ready. Our checklist includes items such as non-perishable food, ample water, battery-powered radios, flashlights, first aid kits, and important documents stored in waterproof containers. Don't be caught off guard – use our checklist to ensure you have everything you need to weather the storm safely.</p>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4" data-aos="fade-up">
                        <ChecklistCard img="https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Drinkable Water" isChk={true} description="Have at least one gallon per person per day for at least three days, both for drinking and sanitation." percent={100} color="secondary" />

                        <ChecklistCard img="https://images.pexels.com/photos/4792282/pexels-photo-4792282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Important Documents" isChk={true} description="Store copies of vital documents like identification, insurance policies, and medical records in a waterproof container." percent={100} color="secondary" />

                        <ChecklistCard img="https://images.pexels.com/photos/6368899/pexels-photo-6368899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Battery-powered or Hand-crank Radio" isChk={true} description="A NOAA Weather Radio is ideal for receiving emergency updates." percent={95.8} color="secondary" />

                        <ChecklistCard img="https://images.pexels.com/photos/6994944/pexels-photo-6994944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Non-perishable Food" isChk={true} description="Stock up on enough food for each person for at least three days. Choose items like canned goods, energy bars, and dry goods." percent={94.4} color="secondary" />

                        <ChecklistCard img="https://images.pexels.com/photos/985117/pexels-photo-985117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Flashlight" isChk={true} description="Include extra batteries or opt for a hand-crank flashlight." percent={92} color="secondary" />

                        <ChecklistCard img="https://images.pexels.com/photos/20140026/pexels-photo-20140026/free-photo-of-medicine-bottles-and-pills.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Prescription Medicine" isChk={true} description="Prepare a well-stocked kit with essential medical supplies." percent={92} color="secondary" />

                        <ChecklistCard img="https://images.pexels.com/photos/6003041/pexels-photo-6003041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Manual Can Opener" isChk={true} description="If you're relying on canned food, make sure you have a manual can opener." percent={82} color="secondary" />

                        <ChecklistCard img="https://images.pexels.com/photos/3962433/pexels-photo-3962433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Toilet Paper" isChk={true} description="Keep at least one roll of toilet paper per person in the family." percent={73} color="secondary" />

                    </div>

                </div>
            </div>
        </>
    )
}

export default WaterModule