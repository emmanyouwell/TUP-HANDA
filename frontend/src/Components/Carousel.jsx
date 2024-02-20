import React from 'react'
import Card from './Card.jsx'
import next from '../assets/next.png'

const Carousel = () => {
    return (
        <div className="carousel carousel-center rounded-box flex gap-4 p-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent ">
            <div className="carousel-item">
                <Card title="Fire Safety and Prevention" description="Learn essential techniques to prevent fires and ensure safety in case of emergencies." tag1="Safety" tag2="Prevention" img="https://th.bing.com/th/id/OIP.gomIe5EjdQGgihxtekgRRAHaB7?rs=1&pid=ImgDetMain"/>
            </div>
            <div className="carousel-item">
                <Card title="Flood Preparedness and Response" description="Equip yourself with knowledge on how to respond effectively to floods and minimize risks to life and property." tag1="Preparedness" tag2="Response" img="https://i.ytimg.com/vi/3azLj4nU4G0/maxresdefault.jpg"/>
            </div>
            <div className="carousel-item">
                <Card title="Typhoon Awareness and Preparedness" description="Understand the impacts of typhoons and learn how to prepare your community for these powerful storms." tag1="Awareness" tag2="Preparedness" img="https://i.ytimg.com/vi/QtF3g2NAsxM/hqdefault.jpg"/>
            </div>
            <div className="carousel-item">
                <Card title="Earthquake Readiness and Response" description="Learn about earthquake risks and how to stay safe during and after seismic events." tag1="Readiness" tag2="Response" img="https://www.teacherph.com/wp-content/uploads/2021/09/Disaster-Readiness-and-Risk-Reduction-Self-Learning-Module.jpg"/>
            </div>
            <div className="carousel-item">
                <Card title="Comprehensive Guide for Fire Emergencies" description="Discover step-by-step instructions to prepare for, respond to, and recover from fires effectively." tag1="Fire Safety" tag2="Emergency Response" img="https://th.bing.com/th/id/R.b219595675bed3f827ff2e283c93131d?rik=4O9G2pNAkoLvxg&riu=http%3a%2f%2fwww.conceptdraw.com%2fHow-To-Guide%2fpicture%2fBuilding-Fire-ang-emergency-plans-Fire-emergency-plan.png&ehk=z%2bfcpC6GW7OA7efmizXst9Pp3sMHwoqs3GTTPh7rTdo%3d&risl=&pid=ImgRaw&r=0"/>
            </div>
            <div className="carousel-item">
                <Card title="Typhoon Survival Guide: Before, During, and After" description="Arm yourself with essential knowledge and actions to take to ensure safety and resilience during typhoons." tag1="Typhoon Preparedness" tag2="Emergency Planning" img="https://sa.kapamilya.com/absnews/abscbnnews/media/2019/business/07/10/20190710-moneymax-typhoon-2.jpg"/>
            </div>
            <div className="carousel-item">
                <Card title="Earthquake Safety Tips for Every Situation" description="Learn practical tips to stay safe before, during, and after an earthquake, no matter where you are." tag1="Earthquake Safety" tag2="Preparedness Strategies" img="https://th.bing.com/th/id/OIP.nkZonrWB0q_zowF6lU6XJwHaD-?rs=1&pid=ImgDetMain"/>
            </div>
            <div className="carousel-item w-100 flex flex-col justify-center">
                <button className="btn btn-circle mx-auto">
                    <img src={next} alt="next button" className="w-5 object-cover" />
                </button>
                <p>Show more</p>
                
            </div>
        </div>
    )
}

export default Carousel