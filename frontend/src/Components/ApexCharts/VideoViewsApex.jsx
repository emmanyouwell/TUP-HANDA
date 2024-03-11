import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import { fetchVideoViews, clearErrors } from '../../Actions/videoActions';
import { useDispatch, useSelector } from 'react-redux';


const VideoViewsApex = () => {
    const dispatch = useDispatch();

    
    const {videoViews, loading, error} = useSelector(state => state.videoDetails);

    const [state, setState] = useState({
        series: [
            {
                name: 'Downloads',
                data: [],
            }

        ],
        options: {
            colors: ['#3C50E0', '#80CAEE'],
            chart: {
                fontFamily: 'Satoshi, sans-serif',
                type: 'bar',
                height: 335,
                stacked: true,
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },

            responsive: [
                {
                    breakpoint: 1536,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 0,
                                columnWidth: '25%',
                            },
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 0,
                    columnWidth: '25%',
                    borderRadiusApplication: 'end',
                    borderRadiusWhenStacked: 'last',
                },
            },
            dataLabels: {
                enabled: false,
            },

            xaxis: {
                categories: [],
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left',
                fontFamily: 'Satoshi',
                fontWeight: 500,
                fontSize: '14px',

                markers: {
                    radius: 99,
                },
            },
            fill: {
                opacity: 1,
            },
        },

    });

    useEffect(() => {
        if (error){
            dispatch(clearErrors());
        }
        dispatch(fetchVideoViews());
    }, [dispatch, error]);
    useEffect(() => {
        if (videoViews.videos && Array.isArray(videoViews.videos)) {
            
            const options = {
                colors: ['#eeba0b', '#80CAEE'],
                chart: {
                    fontFamily: 'Satoshi, sans-serif',
                    type: 'bar',
                    height: 335,
                    stacked: true,
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: true,
                    },
                },

                responsive: [
                    {
                        breakpoint: 1536,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 0,
                                    columnWidth: '25%',
                                },
                            },
                        },
                    },
                ],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 0,
                        columnWidth: '25%',
                        borderRadiusApplication: 'end',
                        borderRadiusWhenStacked: 'last',
                    },
                },
                dataLabels: {
                    enabled: false,
                },

                xaxis: {
                    categories: videoViews.videos.map(video => video.videoDetails.title),
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    fontFamily: 'Satoshi',
                    fontWeight: 500,
                    fontSize: '14px',

                    markers: {
                        radius: 99,
                    },
                },
                fill: {
                    opacity: 1,
                },
            };
            setState({
                series: [
                    {
                        name: 'Views',
                        data: videoViews.videos.map(video => video.views)
                    }
                ],
                options,
            })


        }
    }, [videoViews])


    const handleReset = () => {
        setState((prevState) => ({
            ...prevState,
        }));
    };
    handleReset;
    return (
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
            <div className="mb-4 justify-between gap-4 sm:flex">
                <div>
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Total Views {videoViews.totalViews && `(${videoViews.totalViews})`}
                    </h4>
                </div>
                
            </div>

            <div>
                <div id="chartTwo" className="-ml-5 -mb-9">
                    <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        height={350}
                    />
                </div>
            </div>
        </div>
    );
}
export default VideoViewsApex;