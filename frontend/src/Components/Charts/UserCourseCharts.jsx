import React, { useEffect, useRef, useState } from 'react'
import { Pie } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux'
import { getUserPerCourse } from '../../Actions/userActions';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Loader from '../Loader';
ChartJS.register(ArcElement, Tooltip, Legend);



const UserCourseCharts = () => {
    const dispatch = useDispatch();
    const { data: userData, loading, error } = useSelector(state => state.userCourse)
    const options = {
        responsive: true,
        aspectRatio: 1,
        plugins: {
            legend: {
                position: 'bottom',
                align: 'center',
            },
            title: {
                display: true,
                text: 'Chart.js Pie Chart'
            }
        }
    };
    const [pieData, setPieData] = useState({ labels: [], datasets: [] })
    useEffect(() => {
        dispatch(getUserPerCourse());
    }, [dispatch, error])
    useEffect(() => {
        if (userData){
            setPieData({
                labels: userData.map(item => item._id || 'Unknown'),
                datasets: [
                    {
                        data: userData.map(item => item.totalUsers),
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,
                    },
                ],
            })
        }
       
    }, [userData])
    return (
        <div style={{ width: '800px', height: 'auto' }}>
            <h1 className='text-center mb-8 font-bold font-[Poppins] text-2xl'>Users per Courses</h1>
            {loading ? <Loader /> : <Pie data={pieData} options={options} className="shadow-xl" />}
        </div>
    )
}

export default UserCourseCharts