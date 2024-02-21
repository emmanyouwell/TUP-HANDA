import React from 'react'
import ChecklistCard from './ChecklistCard'
const ChecklistComponent = () => {
    return (
        <div className="p-10" id="checklist">
            <div className="text-center p-3 mb-3 xl:text-left">
                <h2 className="font-bold text-4xl mb-5" data-aos="fade-down">Emergency Kit checklist</h2>
                <p data-aos="fade-down" className="text-xl mb-5">Be prepared for any situation with our Emergency Kit Checklist. Whether you're facing a natural disaster, power outage, or unexpected emergency, this comprehensive list covers essential items to have on hand. From food and water supplies to first aid essentials and communication devices, ensure you and your loved ones are ready for anything. Don't wait until it's too late – start building your emergency kit today.</p>
            </div>
            <div className="grid justify-items-center items-center justify-center gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" data-aos="fade-up">
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
    )
}

export default ChecklistComponent