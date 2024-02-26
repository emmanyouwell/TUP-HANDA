import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Card,
    Chip
} from "@material-tailwind/react";
const VideoCard = ({ title, description, tags, link, shortDesc }) => {
    return (
        <>
            <div className="relative flex w-full  flex-col justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-full">
                <iframe src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 "></iframe>
                {/* <video className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 " controls>
            <source src="https://www.youtube.com/watch?v=Nbp93_Tz50A" type="video/mp4" />
            Your browser does not support the video tag.
        </video> */}

                <div className="p-6 w-[80vw] md:w-full">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title ? title : 'Module Title'}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased ">
                        {shortDesc ? shortDesc : 'Short description here'}
                    </p>
                    <p className="flex gap-3 items-center font-sans text-base font-light leading-relaxed text-inherit antialiased ">
                        {tags && tags.length > 0 ? tags.map(t => <Chip color="green" value={t} className="max-w-max my-3" />) : <Chip color="green" value='tags' className="max-w-max my-3" />}
                    </p>

                </div>
                <div>
                    {/* <div className="p-5 flex flex-col gap-3">
                    <button onClick={handleOpen} className=" select-none rounded-lg bg-info py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Read more</button>
                    <button onClick={onButtonClick} data-ripple-light="true" type="button" className=" select-none rounded-lg bg-warning py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Download PDF
                    </button>



                </div> */}
                </div>

            </div>

        </>

    )
}

export default VideoCard