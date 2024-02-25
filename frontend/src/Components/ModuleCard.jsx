import React, { useState } from 'react'
// import {PDFDownloadLink, Document, Page} from '@react-pdf/renderer'
import { Link } from 'react-router-dom';
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
const ModuleCard = ({ title, description, img, link, tags }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const onButtonClick = () => {

        // using Java Script method to get PDF file
        fetch(link).then((response) => {
            response.blob().then((blob) => {

                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = title + ".pdf";
                alink.click();
            });
        });
    };
    return (
        <>
            <div className="relative flex md:w-80 flex-col justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-full">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600" style={{ backgroundImage: `url('${img ? img : ''}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title ? title : 'Module Title'}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased ">
                    This module teaches essential skills like CPR, wound care, and fracture management for immediate medical emergencies.
                    </p>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased ">
                        {tags && tags.length > 0?  tags.map(t=><Chip color="green" value={t} className="max-w-max my-3"/>): 'tags'}
                    </p>

                </div>
                <div>
                <div className="p-5 flex flex-col gap-3">
                    <button onClick={handleOpen} className=" select-none rounded-lg bg-info py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Read more</button>
                    <button onClick={onButtonClick} data-ripple-light="true" type="button" className=" select-none rounded-lg bg-warning py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Download PDF
                    </button>



                </div>
                </div>

            </div>
            
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>{title && title}</DialogHeader>
                <DialogBody className="h-[42rem] overflow-scroll">
                    <Card
                        className="h-[auto] w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90 mb-8"
                        onClick={handleOpen}
                    >
                        <img
                            alt="nature"
                            className="h-full w-full object-cover object-center"
                            src={img && img}
                        />
                    </Card>

                    <Typography className="font-normal">
                        {description && description}
                    </Typography>
                </DialogBody>
                <DialogFooter className="space-x-2">
                    <Button variant="text" color="blue-gray" onClick={handleOpen}>
                        cancel
                    </Button>
                    <Button variant="gradient" color="amber" onClick={handleOpen}>
                        confirm
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default ModuleCard