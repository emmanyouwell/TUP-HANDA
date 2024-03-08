import React, { useEffect, useState} from "react";

import {
    Collapse,
    Typography,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Chip
} from "@material-tailwind/react";


import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addToWatchHistory, clearErrors } from '../Actions/userActions';
import { ADD_TO_WATCH_HISTORY_RESET } from '../Constants/userConstants';
import YouTube from "react-youtube";
const VideoCard = ({ id, title, description, link, category, shortDesc }) => {
    const [open, setOpen] = useState(false);
    const [showVideo, setShowVideo] = useState(false)
    const handleOpen = () => setOpen(!open);
    const dispatch = useDispatch()
    const { isAdded, error } = useSelector(state => state.user)
    const addToWatchHistoryHandler = (e) => {
        console.log(id)
        if (!isAdded) {
            dispatch(addToWatchHistory(id))
        }

    }
    useEffect(() => {

        if (error) {
            dispatch(clearErrors())
        }
        if (isAdded) {
            dispatch({ type: ADD_TO_WATCH_HISTORY_RESET })
        }
    }, [dispatch, error, isAdded])
   

    return (

        <>

            <Card variant="gradient" color="white" className="w-96 mt-10 h-full flex flex-col justify-between">
                <CardHeader shadow={false} floated={false} className="h-96 transition duration-500 ease-in-out transform hover:scale-105 hover:cursor-pointer">

                    {/* <video className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 " controls>
                        <source src={link} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                    {/* <iframe src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" className="relative mx-4  h-full overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"></iframe> */}
                   
                  <YouTube
                    videoId={link.split('/embed/')[1]}
                    className="h-96"
                    iframeClassName="relative w-full h-full overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
                    onPlay={addToWatchHistoryHandler}
                    
                  
                  />
                    




                </CardHeader>

                <CardBody className="flex-grow">

                    <div className="mb-10 flex flex-col">
                        <Typography color="blue-gray" className="font-medium">
                            {title}
                        </Typography>
                        <div className="flex">
                            <Chip color="light-green" variant="gradient" className="mt-4 rounded-full" value={category.name ? category.name : category} />
                        </div>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                    >
                        {shortDesc}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 gap-5">
                    <Collapse open={open}>
                        <Card className="mt-4 mx-auto w-full">
                            <CardBody>
                                <Typography>
                                    {description}
                                </Typography>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <div className="p-5 flex flex-col gap-3">
                        <button onClick={handleOpen} className=" select-none rounded-lg bg-info py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Read more</button>

                    </div>



                </CardFooter>
            </Card >


        </>

    )
}

export default VideoCard