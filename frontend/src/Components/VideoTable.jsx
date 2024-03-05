import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
   
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
    },
];

const TABLE_HEAD = ["Actions","Video ID", "Title", "Short Description", "Description", "Video Link"];

import {useDispatch, useSelector} from 'react-redux'
import Loader from './Loader'
import {toast} from 'react-toastify'
import { getVideos, clearErrors, deleteVideo, getAdminVideos } from '../Actions/videoActions';

import { DELETE_VIDEO_RESET } from '../Constants/videoConstants';
export function VideoTable({ videos, videosCount, resPerPage, currentPage, setCurrentPage, keyword, setKeyword, loading }) {
    const dispatch = useDispatch();
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
    const totalPage = Math.ceil(videosCount / resPerPage);
    const {error: deleteError, isDeleted} = useSelector(state => state.video)
    const navigate = useNavigate();
    const deleteHandler = (id) => {
        dispatch(deleteVideo(id))
    }
    const nextPageHandler = () => {
        console.log(currentPage);
        if (currentPage < totalPage) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            dispatch(getAdminUsers(newPage))

        }

    }
    const prevPageHandler = () => {
        console.log(currentPage);

        if (currentPage > 1) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            dispatch(getAdminUsers(newPage))

        }

    }
    useEffect(()=>{
       
        if (deleteError) {
            dispatch(clearErrors())
        }
        if (isDeleted) {
            navigate('/admin/videos');
            dispatch(getAdminVideos(currentPage, keyword))
            toast.success('Video deleted successfully', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            dispatch({ type: DELETE_VIDEO_RESET })
        }
    },[dispatch, navigate, deleteError, isDeleted])
    return (
        <Card className="h-[auto] w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Videos list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all videos
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Link to="/modules/videos">
                        <Button variant="outlined" size="sm">
                            view all
                        </Button>
                        </Link>
                        <Link to="/admin/videos/new">
                        <Button className="flex items-center gap-3" size="sm">
                            
                            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Video
                           
                        </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <Tabs value="all" className="w-full md:w-max">
                        <TabsHeader>
                            {TABS.map(({ label, value }) => (
                                <Tab key={value} value={value}>
                                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            onChange={(e) => setKeyword(e.target.value.trim())}
                        />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                    >
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length - 1 && (
                                            <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                        )}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {loading ?<tr className="w-full">
                            <td colSpan={6}>
                                <div className="p-10 flex justify-center items-center">
                                    <Loader />
                                </div>
                            </td>
                        </tr>: videos.map(
                            ({ title, description, videoLink, shortDesc, _id }, index) => {
                                const isLast = index === videos.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={_id} className="h-10 overflow-hidden">
                                        <td className={classes}>
                                            <div className="flex justify-between items-center">
                                            <Link to={`/admin/videos/${_id}`}>
                                            <Tooltip content="Edit video">
                                                <IconButton variant="text">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                            </Link>
                                            <Tooltip content="Delete module">
                                                <IconButton variant="text">
                                                    <TrashIcon className="h-4 w-4" onClick={()=>deleteHandler(_id)}/>
                                                </IconButton>
                                            </Tooltip>
                                           
                                            </div>
                                            
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {_id}
                                                </Typography>
                                                
                                            </div>
                                        </td>
                                       
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {title}
                                            </Typography>
                                        </td>
                                        
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {shortDesc}
                                            </Typography>
                                        </td>
                                        <td className={`${classes} ${isDescriptionExpanded ? '' : 'truncate'}`} onClick={()=>setIsDescriptionExpanded(!isDescriptionExpanded)}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal max-w-[200px]"
                                            >
                                                {description}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                <a href={videoLink}>{videoLink}</a>
                                            </Typography>
                                        </td>
                                        
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {currentPage} of {totalPage}
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm" onClick={prevPageHandler}>
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm" onClick={nextPageHandler}>
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}