import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ChecklistComponent from '../../Components/ChecklistComponent'
import Header from '../../Components/Header'
import img1 from '../../assets/before-earthquake.jpg'
import img2 from '../../assets/during-earthquake.webp'
import img3 from '../../assets/after-earthquake.jpg'
import Navbar from '../../Components/Navbar'
const EarthModule = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            {/* <Header /> */}
            {/* <Navbar /> */}
            <div className="overflow-x-hidden overflow-y-hidden">
                {/* Fire */}
                <div className="relative min-h-screen p-10 flex flex-col justify-center items-center">
                    <div className="absolute inset-0 filter brightness-50 bg-earthquake bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    <div className="flex flex-wrap flex-col justify-center items-center gap-5">
                        <h1 className="font-black text-6xl text-white drop-shadow-md" data-aos="zoom-in">Earthquakes</h1>
                        <p className="container text-white text-center text-xl drop-shadow-sm" data-aos="zoom-in">
                        Earthquakes are natural phenomena that occur when there's a sudden release of energy in the Earth's crust, creating seismic waves. This release of energy is typically caused by the movement of tectonic plates, which are large sections of the Earth's lithosphere that float on the semi-fluid asthenosphere beneath them. Earthquakes vary in magnitude, from minor tremors that are hardly felt to major quakes that can cause extensive damage and loss of life. They can also trigger secondary hazards such as tsunamis, landslides, and aftershocks, further compounding the impact on affected areas.</p>
                    </div>

                </div>

                {/* Before */}
                <div className="relative min-h-screen p-10">
                    <div className="absolute inset-0 filter brightness-50 bg-earthBefore bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    <h1 className="font-black text-6xl text-gray-100 drop-shadow-lg relative z-10 mb-10" data-aos="fade-right">Before</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-10 relative">
                        <div className="lg:row-span-2 row-span-3 col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <img src={img1} alt="Tips for preventing fires" />

                        </div>
                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Create an Emergency Plan.</h1>
                            <p className="z-10 text-xl"> Develop a family emergency plan that includes evacuation routes, meeting points, and communication strategies. Ensure everyone in your household knows what to do in case of an earthquake.</p>
                        </div>

                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Prepare an Emergency Kit.</h1>
                            <p className="z-10 text-xl mb-4">Assemble a disaster supply kit with essential items such as water, non-perishable food, a first aid kit, flashlights, batteries, a portable radio, blankets, and any necessary medications. Keep this kit in an easily accessible location.</p>

                            <a href="#checklist" className="z-10 underline">Don't know what to include in your kit? Visit our checklist.<i class="fa-solid fa-arrow-right ms-2"></i></a>
                        </div>
                        <div className="lg:col-span-1 col-span-2 earth flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl">Secure Your Home.</h1>
                            {/* <ul className="steps steps-vertical text-white text-xl relative z-10" data-aos="fade-right">
                                <li className="step step-primary">Secure Heavy Furniture and Appliances</li>
                                <li className="step step-primary">Install Earthquake-resistant Features</li>
                                <li className="step step-primary">Secure Hazardous Materials</li>
                                <li className="step step-primary">Inspect and Reinforce Structural Weak Points</li>
                                <li className="step step-primary">Create an Emergency Plan</li>
                            </ul> */}
                            <p className="z-10 text-xl"> Identify and mitigate potential hazards in your home, such as securing heavy furniture and appliances to prevent them from falling during an earthquake. Install latches on cabinets to prevent contents from spilling out.</p>
                        </div>
                        <div className="lg:col-span-1 col-span-2 earth flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Practice Safety Drills.</h1>
                            <p className="z-10 text-xl">Conduct earthquake drills regularly with your family or household members. Practice "Drop, Cover, and Hold On" techniques to protect yourself during an earthquake.</p>

                        </div>
                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Know Safe Spaces.</h1>
                            <p className="z-10 text-xl"> Identify safe spots in each room of your home, such as sturdy tables or desks, where you can take cover during an earthquake. Avoid areas near windows, mirrors, or heavy objects that could shatter or fall.</p>

                        </div>
                        <div className="lg:col-span-1  earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Learn About Local Hazards.</h1>
                            <p className="z-10 text-xl">Be aware of the earthquake risks in your area, including potential secondary hazards like tsunamis, landslides, or liquefaction. Understand evacuation routes and emergency procedures specific to your location.</p>

                        </div>
                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Stay Informed.</h1>
                            <p className="z-10 text-xl"> Stay informed about earthquake alerts and updates through local authorities, emergency services, or mobile apps. Familiarize yourself with the procedures for receiving alerts and warnings in your area.</p>

                        </div>
                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Know Emergency Hotlines and Contacts.</h1>
                            <p className="z-10 text-xl">Keep a list of emergency contact numbers readily available, including local police, fire department, ambulance services, and other relevant emergency agencies.</p>

                        </div>
                    </div>



                </div>
                {/* During */}
                <div className="relative min-h-screen p-10">
                    <div className="absolute inset-0 filter brightness-50 bg-earthDuring bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    <h1 className="font-black text-6xl text-end text-gray-100 drop-shadow-lg relative z-10 mb-10" data-aos="fade-left">During</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-10 relative">
                        <div className="md:col-span-2 lg:row-span-1 xl:row-span-2 xl:col-span-2 col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <img src={img2} className="h-auto w-100" alt="Guidelines during a typhoon/flood by Philstar" />

                        </div>
                        {/* <div className="md:col-span-1 lg:row-span-1 xl:row-span-1 2xl:row-span-3  col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <img src={img3} className="" alt="Guidelines during a typhoon/flood by Philstar" />

                        </div> */}
                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="font-bold text-4xl mb-2 z-10">Drop, Cover, and Hold On.</h1>
                            <p className="text-xl z-10">Drop down to your hands and knees to prevent being knocked over. Take cover under a sturdy piece of furniture, such as a table or desk, and hold on to it to shield yourself from falling debris. If there's no shelter nearby, cover your head and neck with your arms and seek protection against interior walls away from windows or heavy objects.</p>
                        </div>

                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="font-bold text-4xl mb-2 z-10">Stay Indoors.</h1>
                            <p className="text-xl mb-4 z-10"> If you're indoors when the shaking begins, stay inside until the shaking stops and it's safe to exit. Avoid doorways, elevators, and stairs during the earthquake, as they may be unsafe. Move away from glass windows, exterior walls, and tall furniture that could topple over.</p>


                        </div>
                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl">If Outdoors, Move to an Open Area.</h1>
                            <p className="z-10 text-xl">
                            If you're outside, move to an open area away from buildings, trees, streetlights, and utility wires. Drop to the ground to avoid being thrown off balance and protect yourself from falling objects.
                            </p>

                        </div>
                        <div className="lg:col-span-1 col-span-2 earth flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">If Driving, Pull Over Safely.</h1>
                            <p className="z-10 text-xl">If you're driving, pull over to a safe location away from overpasses, bridges, buildings, and power lines. Stay inside your vehicle until the shaking stops. Avoid stopping under trees, light posts, or signs that could fall on your car.</p>

                        </div>
                        <div className="lg:col-span-1 col-span-2 earth flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Assist Others if Safe to Do So.</h1>
                            <p className="z-10 text-xl"> If it's safe, assist those who may need help, such as children, elderly individuals, or people with disabilities, but avoid putting yourself in danger.</p>

                        </div>
                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Be Prepared for Aftershocks.</h1>
                            <p className="z-10 text-xl">Be aware that aftershocks may occur after the initial earthquake. Stay alert and be prepared to take cover again if necessary.</p>

                        </div>
                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Listen for Alerts and Instructions.</h1>
                            <p className="z-10 text-xl">Pay attention to emergency alerts and instructions from local authorities through radio, television, or mobile devices. Follow evacuation orders or other directives issued by emergency services.</p>
                        </div>
                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Check for Injuries and Damage.</h1>
                            <p className="z-10 text-xl"> After the shaking stops, check yourself and others for injuries. Assess your surroundings for any damage to buildings, utilities, or infrastructure. If you're trapped, use your phone or a nearby object to signal for help by tapping on hard surfaces or making noise.</p>

                        </div>
                    </div>



                </div>

                {/* After */}
                <div className="relative min-h-screen p-10">
                    <div className="absolute inset-0 filter brightness-50 bg-earthAfter bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    <h1 className="font-black text-6xl text-gray-100 drop-shadow-lg relative z-10 mb-10" data-aos="fade-left">After</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-10 relative">
                        <div className="lg:row-span-3 row-span-6 col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <img src={img3} alt="Guidelines after a typhoon/flood by Philstar" />

                        </div>
                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="font-bold text-4xl mb-2 z-10">Check for Injuries.</h1>
                            <p className="text-xl z-10">Assess yourself and others for any injuries and provide first aid if necessary. Attend to any medical emergencies promptly.</p>
                        </div>

                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="font-bold text-4xl mb-2 z-10">Be Mindful of Aftershocks.</h1>
                            <p className="text-xl mb-4 z-10">Be aware that aftershocks may follow the main earthquake. Stay alert for shaking and take cover if necessary. Aftershocks can cause additional damage to weakened structures.</p>


                        </div>
                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl">Inspect Your Surroundings.</h1>
                            <p className="z-10 text-xl">
                            Check your immediate surroundings for hazards such as damaged buildings, gas leaks, electrical hazards, or spilled chemicals. If you suspect a gas leak, evacuate the area immediately and report it to authorities.
                            </p>

                        </div>
                        <div className="lg:col-span-1 col-span-2 earth flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Evacuate if Necessary.</h1>
                            <p className="z-10 text-xl">If your home or building is severely damaged and deemed unsafe, evacuate to a safer location. Follow evacuation routes and instructions provided by local authorities. Use stairs instead of elevators in case of power outages.</p>

                        </div>
                        <div className="lg:col-span-1 col-span-2 earth flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Listen to Emergency Broadcasts.</h1>
                            <p className="z-10 text-xl">Stay tuned to local news updates and emergency broadcasts for information on the situation, including evacuation orders, shelter locations, and other instructions from authorities.</p>

                        </div>
                        <div className="lg:col-span-1 earth col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Avoid Damaged Areas.</h1>
                            <p className="z-10 text-xl">Stay away from damaged buildings, bridges, and other infrastructure that may pose a risk of collapse. Keep clear of downed power lines and broken glass.</p>

                        </div>

                    </div>



                </div>

                {/* Emergency checklist for Typhoon/Floods */}
                <ChecklistComponent />
            </div>
        </>
    )
}

export default EarthModule