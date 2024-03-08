import React, { useEffect } from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux'
import { getUserCourse } from '../Actions/userActions';
import { Link } from 'react-router-dom';
export function DownloadedModulesList() {
    const { modules } = useSelector(state => state.myModules)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserCourse())
    }, [])

    return (
        <div className="lg:w-[32rem] w-full">
            <Timeline>
                {modules && modules.downloadedModules && modules.downloadedModules.length > 0 ? modules.downloadedModules.map((item, index) => <TimelineItem key={item._id}>
                    {index + 1 == modules.downloadedModules.length ? '' : <TimelineConnector />}
                    <TimelineHeader>
                        <TimelineIcon className="p-0">
                            <Avatar size="sm" src={item.img.url} alt="user 1" withBorder />
                        </TimelineIcon>
                        <Typography variant="h5" color="blue-gray">
                            <Link to="/modules">
                                {item.title}
                            </Link>
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <Typography color="gray" className="font-normal text-gray-600">
                            {item.shortDesc}
                        </Typography>
                    </TimelineBody>
                </TimelineItem>) : <p>No downloaded modules yet</p>}


            </Timeline>
        </div>
    );
}