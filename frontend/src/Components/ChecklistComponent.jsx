import React, { useState, useEffect } from 'react'
import ChecklistCard from './ChecklistCard'
import { getItems, clearErrors } from '../Actions/checklistActions'
import { useDispatch, useSelector } from 'react-redux'
const ChecklistComponent = () => {

    const dispatch = useDispatch()
    const { items, error } = useSelector(state => state.checklist)
    useEffect(() => {
        if (error) {
            dispatch(clearErrors())
        }

        dispatch(getItems())
        

    }, [dispatch])
    return (
        <div className="p-10" id="checklist">
            
            <div className="text-center p-3 mb-3 xl:text-left">
                <h2 className="font-bold text-4xl mb-5" data-aos="fade-down">Emergency Kit Checklist</h2>
                <p data-aos="fade-down" className="text-xl mb-5">Be prepared for any situation with our Emergency Kit Checklist. Whether you're facing a natural disaster, power outage, or unexpected emergency, this comprehensive list covers essential items to have on hand. From food and water supplies to first aid essentials and communication devices, ensure you and your loved ones are ready for anything. Don't wait until it's too late – start building your emergency kit today.</p>
            </div>
            <div className="grid justify-items-center items-center justify-center gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" data-aos="fade-up">
                {items.map(item=>(< ChecklistCard key={item.name} img={item.images.url} title={item.name}  description={item.description} percent={item.recommendation} color="secondary" />))}
               

            </div>

        </div>
    )
}

export default ChecklistComponent