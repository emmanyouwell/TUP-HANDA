import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getAllDownloadedModules } from '../../Actions/modulesActions';
import { useDispatch, useSelector } from 'react-redux';


const DownloadedModules = () => {
    const dispatch = useDispatch();

    const allDownloadedModules = useSelector(state => state.allDownloadedModules);
    const { loading, error, downloadedModules } = allDownloadedModules;

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
        dispatch(getAllDownloadedModules());
    }, [dispatch]);
    useEffect(() => {
        if (downloadedModules && Array.isArray(downloadedModules)) {
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
                    categories: downloadedModules.map(module => module.moduleName),
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
                        name: 'Downloads',
                        data: downloadedModules.map(module => module.downloadCount)
                    }
                ],
                options,
            })


        }
    }, [downloadedModules])


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
                        Downloaded Modules
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
export default DownloadedModules;