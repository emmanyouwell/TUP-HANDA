import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import YouTube from 'react-youtube'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { getWatchHistory, clearErrors } from '../Actions/userActions';
import EmptyPage from '../EmptyPage';
import Loader from './Loader';
const WatchHistoryList = () => {
    const dispatch = useDispatch()
    const { watchHistory, loading, error } = useSelector(state => state.userDetails)
    useEffect(() => {
        if (error) {
            dispatch(clearErrors())
        }
        dispatch(getWatchHistory())
    }, [dispatch, error])
    useEffect(()=>{
        if (watchHistory){
            console.log(watchHistory)
        }
    },[watchHistory])
    return (
        <>
            {loading ? <div className="min-h-screen mt-20"><Loader /></div> : watchHistory && watchHistory.length > 0 ? watchHistory.map((items,index) => (
                <Card key={items._id} variant="gradient" color="white" style={{marginTop: `${index === 0 ? '0':'2.5rem'}`}} className="w-full h-full mt-10 flex flex-col justify-between">
                    
                    <CardHeader shadow={false} floated={false} className="">
                        <Typography color="gray" variant="h3">{items.video.title}</Typography>
                    </CardHeader>
                    <CardBody className="transition duration-500 ease-in-out transform hover:scale-105 hover:cursor-pointer">
                        <YouTube
                            videoId={items.video.videoLink.split('/embed/')[1]}
                            className="sm:h-56 bg-yellow-50"
                            iframeClassName=" w-full h-full overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
                        />
                    </CardBody>
                    <CardFooter className="flex justify-between">
                        <Typography color="gray" variant="lead">Viewed on: {new Date(items.watchedAt).toLocaleString()}</Typography>
                    </CardFooter>
                </Card>)) :<p>No videos watched yet</p>
            }
        </>
    )
}

export default WatchHistoryList