import React, { useState } from 'react'

import {
    Collapse,
    Typography,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Chip
} from "@material-tailwind/react";
const VideoCard = ({ title, description, link, category, shortDesc }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        // <>
        //     <div className="relative flex w-full  flex-col justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-full">
        //         <iframe src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 "></iframe>
        //         {/* <video className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 " controls>
        //     <source src={link} type="video/mp4" />
        //     Your browser does not support the video tag.
        // </video> */}

        //         <div className="p-6 w-[80vw] md:w-full">
        //             <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        //                 {title ? title : 'Module Title'}
        //             </h5>
        //             <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased ">
        //                 {shortDesc ? shortDesc : 'Short description here'}
        //             </p>


        //         </div>
        //         <div>
        //             <div className="p-5 flex flex-col gap-3">
        //                 <button onClick={handleOpen} className=" select-none rounded-lg bg-info py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Read more</button>

        //             </div>
        //             <Collapse open={open}>
        //                     <Card className="mt-4 mx-auto w-full">
        //                         <CardBody>
        //                             <Typography>
        //                                {description}
        //                             </Typography>
        //                         </CardBody>
        //                     </Card>
        //                 </Collapse>
        //         </div>

        //     </div>
        //     {/* <Dialog open={open} handler={handleOpen}>
        //         <DialogHeader>{title && title}</DialogHeader>
        //         <DialogBody className="h-[42rem] overflow-scroll">
        //             <Card
        //                 className="h-[auto] w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90 mb-8"
        //                 onClick={handleOpen}
        //             >

        //             </Card>

        //             <Typography className="font-normal">
        //                 {description && description}
        //             </Typography>
        //         </DialogBody>
        //         <DialogFooter className="space-x-2">

        //             <Button variant="gradient" color="amber" onClick={handleOpen}>
        //                 Close
        //             </Button>
        //         </DialogFooter>
        //     </Dialog> */}



        // </>
        <>

            <Card variant="gradient" color="white" className="w-96 mt-10 h-full flex flex-col justify-between">
                <CardHeader shadow={false} floated={false} className="h-96 transition duration-500 ease-in-out transform hover:scale-105 hover:cursor-pointer" onClick={handleOpen}>
                    <iframe src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" className="relative mx-4  h-full overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 "></iframe>
                    {/* <video className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 " controls>
             <source src={link} type="video/mp4" />
             Your browser does not support the video tag.
         </video> */}

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