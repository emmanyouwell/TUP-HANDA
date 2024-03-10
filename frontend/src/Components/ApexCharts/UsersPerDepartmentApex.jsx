import React,{ useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux'
import { getUserPerDepartment } from '../../Actions/userActions';


const UsersPerDepartmentApex = () => {
    const dispatch = useDispatch();
    const { data: userData, loading, error } = useSelector(state => state.userDepartment)
    const [totalUsers, setTotalUsers] = useState(0)
    const [state, setState] = useState({
        series: [],
        options: {
            chart: {
                fontFamily: 'Satoshi, sans-serif',
                type: 'donut',
            },
            colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
            labels: ['Desktop', 'Tablet', 'Mobile', 'Unknown'],
            legend: {
                show: false,
                position: 'bottom',
            },

            plotOptions: {
                pie: {
                    donut: {
                        size: '65%',
                        background: 'transparent',
                    },
                },
            },
            dataLabels: {
                enabled: false,
            },
            responsive: [
                {
                    breakpoint: 2600,
                    options: {
                        chart: {
                            width: 380,
                        },
                    },
                },
                {
                    breakpoint: 640,
                    options: {
                        chart: {
                            width: 200,
                        },
                    },
                },
            ],
        }
    });
    let hue = Math.random() * 360;
    const goldenRatioConjugate = 0.618033988749895;
    function getRandomHueColor() {
        hue += goldenRatioConjugate;
        hue = hue % 1;
        const h = Math.floor(hue*360)
        return `hsl(${h},60%,60%)`
    }
    const [colors, setColors] = useState([])
    const getTotalUsers = (user) => {
        let total = 0
        user.map(item=> total += item.totalUsers)
        return total
    }
    useEffect(() => {
        dispatch(getUserPerDepartment());
    }, [dispatch, error])

    useEffect(() => {
        if (userData){
            const color = userData.map(()=>getRandomHueColor())
            setColors(color)
            const options = {
                chart: {
                    fontFamily: 'Satoshi, sans-serif',
                    type: 'donut',
                },
                colors: color,
                labels: userData.map(item => item._id || 'Unknown'),
                legend: {
                    show: false,
                    position: 'bottom',
                },
    
                plotOptions: {
                    pie: {
                        donut: {
                            size: '65%',
                            background: 'transparent',
                        },
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                responsive: [
                    {
                        breakpoint: 2600,
                        options: {
                            chart: {
                                width: 380,
                            },
                        },
                    },
                    {
                        breakpoint: 640,
                        options: {
                            chart: {
                                width: 200,
                            },
                        },
                    },
                ],
            }
            setState({
                series: userData.map(item => item.totalUsers),
                options
            }
            )
            setTotalUsers(getTotalUsers(userData))
        }
        
    },[userData])

    const handleReset = () => {
        setState((prevState) => ({
            ...prevState,
            series: [65, 34, 12, 56],
        }));
    };
    handleReset;

    // ...rest of the component
    return (
        <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
            <div className="mb-3 justify-between gap-4 sm:flex">
                <div>
                    <h5 className="text-xl font-semibold text-black dark:text-white">
                        Users per Department
                    </h5>
                </div>
                
            </div>

            <div className="mb-2">
                <div id="chartThree" className="mx-auto flex justify-center">
                    <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type="donut"
                    />
                </div>
            </div>

            <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
                {userData && userData.map((item, index) => (<div key={index} className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full" style={{backgroundColor: `${colors[index]}`}}></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> {item._id} </span>
                            <span> {((item.totalUsers/totalUsers) * 100).toFixed(2)}% </span>
                        </p>
                    </div>
                </div>))}
            </div>
        </div>
    );
};

export default UsersPerDepartmentApex;