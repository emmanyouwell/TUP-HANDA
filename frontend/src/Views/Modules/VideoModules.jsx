import React, { useEffect, useState } from 'react'
import VideoCard from '../../Components/VideoCard'
import {
    Input,
    Tabs,
    Tab,
    TabsHeader,
    IconButton, Typography

} from '@material-tailwind/react'
import EmptyPage from '../../EmptyPage'
import { useDispatch, useSelector } from 'react-redux'
import { getVideos, clearErrors } from '../../Actions/videoActions'
import { getCategory, clearErrors as clearCategoryError } from '../../Actions/categoryActions'
import { MagnifyingGlassIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/20/solid'
import Loader from '../../Components/Loader'
const VideoModules = () => {
    const dispatch = useDispatch()
    const { videos, videosCount, resPerPage, filteredVideosCount, loading, error } = useSelector(state => state.videos)
    const [active, setActive] = useState(1);
    const { categories, error: categoryError } = useSelector(state => state.categories)
    const [category, setCategory] = useState('all')
    const [keyword, setKeyword] = useState('')
    const [input, setInput] = useState('')
    const performSearch = () => {
        setCategory('all')
        setKeyword(input)
        setActive(1)
    }
    useEffect(() => {
        if (error) {
            dispatch(clearErrors)
        }
        if (categoryError) {
            dispatch(clearCategoryError())
        }
        dispatch(getCategory())
        dispatch(getVideos(active, keyword, category))
    }, [dispatch, error, categoryError, keyword, category, active])
    let count = (videosCount > 0 ? videosCount : resPerPage)
    if (keyword) {
        if (filteredVideosCount > 0) {
            count = filteredVideosCount
        }
        else {
            count = resPerPage
        }
    }
    if (category) {
        if (filteredVideosCount > 0) {
            count = filteredVideosCount
        }
        else {
            count = resPerPage
        }

    }
    const totalPage = Math.ceil(count / resPerPage);
    const next = () => {
        if (active === totalPage) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };
    return (
        <>
            {/* <Navbar /> */}
            <div className="container mx-auto p-10 mt-10">
                <>
                    <h1 className="mb-5 font-bold text-3xl md:text-4xl lg:text-3xl font-[Poppins]">Watch our tutorials!</h1>
                    <p className='mb-5 leading-3 italic'>Open it on youtube to save it offline!</p>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="overflow-x-auto whitespace-nowrap w-full">
                            <Tabs value={category} className="w-max">
                                <TabsHeader className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                                    indicatorProps={{
                                        className:
                                            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",

                                    }}>
                                    <Tab value="all" className="h-12 text-center z-10" onClick={() => { setCategory('all'); setKeyword(''); setInput(''); setActive(1) }}>All</Tab>
                                    {categories.map(({ _id, name }) => (
                                        <Tab key={_id} value={_id} className="h-12 text-center z-10" onClick={() => { setCategory(_id); setInput(''); setKeyword(''); setActive(1) }}>
                                            &nbsp;&nbsp;{name}&nbsp;&nbsp;
                                        </Tab>
                                    ))}
                                </TabsHeader>
                            </Tabs>
                        </div>

                        <div className="w-full md:w-72 flex">
                            <Input
                                label="Search"
                                icon={<MagnifyingGlassIcon className="h-5 w-5 hover:cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-700" onClick={performSearch} />}
                                onChange={(e) => setInput(e.target.value.trim())}
                                value={input}
                            />

                        </div>
                    </div>
                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-8 mt-10">
                        <IconButton
                            size="sm"
                            variant="outlined"
                            onClick={prev}
                            disabled={active === 1}
                        >
                            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                        </IconButton>
                        <Typography color="gray" className="font-normal">
                            Page <strong className="text-gray-900">{active}</strong> of{" "}
                            <strong className="text-gray-900">{totalPage?totalPage : ''}</strong>
                        </Typography>
                        <IconButton
                            size="sm"
                            variant="outlined"
                            onClick={next}
                            disabled={active === 10}
                        >
                            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                        </IconButton>
                    </div>
                    {loading ? <div className="min-h-screen mt-20"><Loader /></div> :
                        videos && videos.length > 0 ?
                            <div className="grid justify-items-center justify-center gap-10 md:grid-cols-2 lg:grid-cols-6 mb-20">
                                {videos.map(video => (<div key={video._id} className="col-span-full lg:col-span-3 2xl:col-span-2 ">
                                    <VideoCard id={video._id} description={video.description} link={video.videoLink} title={video.title} shortDesc={video.shortDesc} category={video.category ? video.category : 'none'} /></div>
                                ))}
                            </div> : <EmptyPage />}
                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-8">
                        <IconButton
                            size="sm"
                            variant="outlined"
                            onClick={prev}
                            disabled={active === 1}
                        >
                            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                        </IconButton>
                        <Typography color="gray" className="font-normal">
                            Page <strong className="text-gray-900">{active}</strong> of{" "}
                            <strong className="text-gray-900">{totalPage?totalPage:''}</strong>
                        </Typography>
                        <IconButton
                            size="sm"
                            variant="outlined"
                            onClick={next}
                            disabled={active === 10}
                        >
                            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                        </IconButton>
                    </div>
                </>


            </div>

        </>
    )
}

export default VideoModules