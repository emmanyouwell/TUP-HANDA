import React from 'react'
import Navbar from '../../Components/Navbar'
import ModuleCard from '../../Components/ModuleCard'

const Modules = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto  p-10 mt-10">
        <h1 className="mb-20 font-black text-4xl md:text-5xl lg:text-6xl font-[Poppins]">Modules</h1>
        <div className="grid justify-items-center items-center justify-center gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <ModuleCard img="https://res.cloudinary.com/dtrr0ihcb/image/upload/v1708855501/TUPHANDA_ASSETS/b86dafb9-d1d3-444d-8f30-5a863ffad955.png" link="https://res.cloudinary.com/dtrr0ihcb/image/upload/v1708872556/TUPHANDA_MODULES/Basic_First_Aid_Manual_English_uuiwn0.pdf" title="First aid basics" description="
A First Aid basic module typically covers essential skills and knowledge needed to provide immediate assistance in medical emergencies. It includes instruction on assessing the scene safety, checking the victim's responsiveness, and performing CPR if necessary. Additionally, it covers techniques for controlling bleeding, treating burns, managing fractures, and administering basic first aid for common injuries such as cuts, bruises, and sprains. The module emphasizes the importance of quick response, proper technique, and effective communication until professional medical help arrives." tags={['First aid', 'Emergency Response']} shortDesc="This module teaches essential skills like CPR, wound care, and fracture management for immediate medical emergencies." />
          <ModuleCard />
          <ModuleCard />
          <ModuleCard />
          <ModuleCard />
          <ModuleCard />
          <ModuleCard />
          <ModuleCard />

        </div>



      </div>

    </>

  )
}

export default Modules