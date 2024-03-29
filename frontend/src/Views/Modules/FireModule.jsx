import React, { useEffect } from 'react'


import AOS from 'aos'
import 'aos/dist/aos.css'
import img1 from '../../assets/before-fire.png'
import img2 from '../../assets/during-fire.jpg'
import img3 from '../../assets/during-fire-3.webp'
import img4 from '../../assets/after-fire.jpg'
import ChecklistComponent from '../../Components/ChecklistComponent'
const FireModule = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            {/* <Navbar/> */}
            <div className="overflow-x-hidden overflow-y-hidden">
                {/* Fire */}
                <div className="relative min-h-screen p-10 flex flex-col justify-center items-center">
                    <div className="absolute inset-0 filter brightness-50 bg-fire bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    
                    <div className="flex flex-wrap flex-col justify-center items-center gap-5">
                        <h1 className="font-black text-6xl text-white drop-shadow-md" data-aos="zoom-in">Fire Outbreaks</h1>
                        <p className="container text-white text-center text-xl drop-shadow-sm" data-aos="zoom-in">
                            A fire outbreak refers to the sudden and uncontrolled spreading of flames, often resulting in damage to property, loss of life, and environmental harm. It can occur due to various factors such as ignition of flammable materials, electrical faults, or natural causes like lightning strikes. Fire outbreaks pose significant risks to safety and can require prompt action from firefighters and emergency responders to contain and extinguish the flames.</p>
                    </div>
                    

                </div>

                {/* Before */}
                <div className="relative min-h-screen p-10">
                    <div className="absolute inset-0 filter brightness-50 bg-fireBefore bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    <h1 className="font-black text-6xl text-gray-100 drop-shadow-lg relative z-10 mb-10" data-aos="fade-right">Before</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-10 relative">
                        <div className="lg:row-span-2 row-span-3 col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <img src={img1} alt="Tips for preventing fires" loading="lazy"/>

                        </div>
                        <div className="lg:col-span-1 fire col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Develop an evacuation plan.</h1>
                            <p className="z-10 text-xl">Create a detailed plan outlining escape routes from different areas of your home or building. Practice this plan regularly with all occupants.</p>
                        </div>

                        <div className="lg:col-span-1 fire col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Install smoke alarms.</h1>
                            <p className="z-10 text-xl mb-4">Ensure that smoke alarms are installed in every room and on every floor of your home or building. Test them monthly to ensure they're working correctly.</p>

                            {/* <a href="#checklist" className="z-10 text-end">Don't know what to include in your kit? Visit our checklist.<i class="fa-solid fa-arrow-right ms-2"></i></a> */}
                        </div>
                        <div className="lg:col-span-1 col-span-2 fire flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl">Keep fire extinguishers.</h1>
                            {/* <ul className="steps steps-vertical text-white text-xl relative z-10" data-aos="fade-right">
                                <li className="step step-primary">Reinforce Windows and Doors</li>
                                <li className="step step-primary">Anchor and Secure Outdoor Items</li>
                                <li className="step step-primary">Trim Trees and Shrubs</li>
                                <li className="step step-primary">Clear Gutters and Drains</li>
                                <li className="step step-primary">Secure Roof and Siding</li>
                            </ul> */}
                            <p className="z-10 text-xl">Place fire extinguishers in accessible locations throughout your home or building, especially in areas prone to fire hazards like the kitchen or workshop.</p>
                        </div>
                        <div className="lg:col-span-1 col-span-2 fire flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Clear fire exits.</h1>
                            <p className="z-10 text-xl">Keep exits clear of obstructions to ensure easy evacuation in case of a fire. Windows should open easily, and doors should not be blocked.</p>

                        </div>
                        <div className="lg:col-span-1 fire col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Educate occupants.</h1>
                            <p className="z-10 text-xl">Teach everyone in your household or building about fire safety, including how to respond in the event of a fire and how to use fire extinguishers properly.</p>

                        </div>
                        <div className="lg:col-span-1  fire col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Store flammable materials safely.</h1>
                            <p className="z-10 text-xl">Keep flammable materials like gasoline, paint, and cleaning products stored in well-ventilated areas away from heat sources.</p>

                        </div>
                        <div className="lg:col-span-1 fire col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Designate a meeting point.</h1>
                            <p className="z-10 text-xl">Choose a safe location outside the home or building where everyone can gather after evacuating. This helps account for all occupants and prevents unnecessary risks.</p>

                        </div>
                        <div className="lg:col-span-1 fire col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-left">
                            <h1 className="z-10 font-bold text-4xl mb-2">Stay informed.</h1>
                            <p className="z-10 text-xl">Stay informed about local fire hazards, weather conditions, and emergency procedures. Follow advice from authorities during fire outbreaks.</p>

                        </div>
                    </div>



                </div>
                {/* During */}
                <div className="relative min-h-screen p-10">
                    <div className="absolute inset-0 filter brightness-50 bg-fireDuring bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    <h1 className="font-black text-6xl text-end text-gray-100 drop-shadow-lg relative z-10 mb-10" data-aos="fade-left">During</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-10 relative">
                        <div className="md:col-span-1 lg:row-span-1 xl:row-span-1 2xl:row-span-3 col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <img src={img2} className="h-auto w-100" alt="Guidelines during a typhoon/flood by Philstar" loading="lazy"/>

                        </div>
                        <div className="md:col-span-1 lg:row-span-1 xl:row-span-1 2xl:row-span-3  col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <img src={img3} className="" alt="Guidelines during a typhoon/flood by Philstar" loading="lazy"/>

                        </div>
                        <div className="lg:col-span-1 fire col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="font-bold text-4xl mb-2 z-10">Stay calm.</h1>
                            <p className="text-xl z-10"> Keep a clear head and try not to panic. Remaining calm will help you make rational decisions and act more effectively.</p>
                        </div>

                        <div className="lg:col-span-1 fire col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="font-bold text-4xl mb-2 z-10">Evacuate immediately.</h1>
                            <p className="text-xl mb-4 z-10">Leave the building as quickly and safely as possible. Use the nearest exit, but if it's blocked by smoke or flames, use an alternate route. Crawl low under smoke to minimize inhalation of toxic fumes.</p>


                        </div>
                        <div className="lg:col-span-1 fire col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl">Cover your nose and mouth.</h1>
                            <p className="z-10 text-xl">
                                If smoke is present, cover your nose and mouth with a cloth or clothing to reduce inhalation of smoke and toxic gases.
                            </p>

                        </div>
                        <div className="lg:col-span-1 col-span-2 fire flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Stay low.</h1>
                            <p className="z-10 text-xl">Smoke rises, so stay as low to the ground as possible while evacuating to minimize smoke inhalation.</p>

                        </div>
                        <div className="lg:col-span-1 col-span-2 fire flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Alert others.</h1>
                            <p className="z-10 text-xl">If you're in a building with others, alert them to the fire by shouting or activating the fire alarm if available. Warn others as you evacuate.</p>

                        </div>
                        <div className="lg:col-span-1 fire col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Feel doors before opening.</h1>
                            <p className="z-10 text-xl">Before opening any doors, feel the doorknob and the door itself with the back of your hand. If it's hot, do not open it as there may be fire on the other side. Use another escape route if possible.</p>

                        </div>

                    </div>



                </div>

                {/* After */}
                <div className="relative min-h-screen p-10">
                    <div className="absolute inset-0 filter brightness-50 bg-fireAfter bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    <h1 className="font-black text-6xl text-gray-100 drop-shadow-lg relative z-10 mb-10" data-aos="fade-left">After</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-10 relative">
                        <div className="lg:row-span-3 row-span-6 col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <img src={img4} alt="Guidelines after a typhoon/flood by Philstar" loading="lazy"/>

                        </div>
                        <div className="lg:col-span-1 fire col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="font-bold text-4xl mb-2 z-10">Wait for clearance.</h1>
                            <p className="text-xl z-10">Do not re-enter the building until authorities have declared it safe to do so. Fires can weaken structures and create hazards such as hot spots, smoke, and toxic gases.</p>
                        </div>

                        <div className="lg:col-span-1 fire col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="font-bold text-4xl mb-2 z-10">Document the damage.</h1>
                            <p className="text-xl mb-4 z-10">Take photographs or videos of the damage to your property for insurance purposes. Make a detailed inventory of items that have been damaged or destroyed in the fire.</p>


                        </div>
                        <div className="lg:col-span-1 fire col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl">Secure the property.</h1>
                            <p className="z-10 text-xl">
                            If possible, secure your property to prevent further damage or theft. Board up windows, doors, or other openings if necessary.
                            </p>

                        </div>
                        <div className="lg:col-span-1 col-span-2 fire flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Assess utilities.</h1>
                            <p className="z-10 text-xl">Check with utility companies to ensure that gas, electricity, and water services are safe to use. Do not attempt to turn on utilities yourself if you suspect damage.</p>

                        </div>
                        <div className="lg:col-span-1 col-span-2 fire flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Dispose of damaged items.</h1>
                            <p className="z-10 text-xl"> Dispose of any items that cannot be salvaged due to fire damage. Be cautious when handling damaged materials, as they may pose health risks.</p>

                        </div>
                        <div className="lg:col-span-1 fire col-span-2 flex flex-col justify-center items-align h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 p-4 text-white" data-aos="flip-right">
                            <h1 className="z-10 font-bold text-4xl mb-2">Prevent future fires.</h1>
                            <p className="z-10 text-xl">Take steps to prevent future fires by addressing any fire hazards, installing smoke alarms, and reviewing fire safety procedures with household members or occupants.</p>

                        </div>
                       
                    </div>



                </div>

                {/* Emergency checklist for Typhoon/Floods */}
                <ChecklistComponent />
            </div>
        </>
    )
}

export default FireModule