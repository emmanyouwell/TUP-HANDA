import React, { useEffect, useRef, useState } from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import img from '../../../assets/default_avatar.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, createModules } from '../../../Actions/modulesActions'
import { NEW_MODULE_RESET } from "../../../Constants/moduleConstants";
import Navbar from "../../../Components/Navbar";

import { toast } from 'react-toastify'
import Loader from "../../../Components/Loader";

const CreateModule = () => {

    const dispatch = useDispatch()
    const { success, error, loading } = useSelector(state => state.newModule)
    const [imagePreview, setImagePreview] = useState(img)
    const [image, setImage] = useState('')
    const [filename, setFilename] = useState('')
    const [file, setFile] = useState(null)

    const onFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFile(file)
            setFilename(file.name)

        }
        else {
            setFile(null)
            setFilename('')
        }

    }

    const Formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            shortDesc: ''

        },
        onSubmit: (values) => {
            const formData = new FormData()
            formData.set('title', values.title)
            formData.set('description', values.description)
            formData.append('image', image)
            formData.append('pdf', file)
            formData.set('shortDesc', values.shortDesc)

            console.log('submitted')
            //create module action
            dispatch(createModules(formData))
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Module title is required'),
            description: Yup.string().required('Module description is required'),
            shortDesc: Yup.string().required('Short Description is required')

        })
    })


    let navigate = useNavigate()
    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            dispatch(clearErrors())
        }

        if (success) {
            navigate('/admin/modules');
            toast.success('Module created successfully', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            dispatch({ type: NEW_MODULE_RESET })

        }


    }, [error, success, dispatch, navigate])

    const onChange = e => {

        const files = Array.from(e.target.files)
        setImage([])
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImage(oldArray => [...oldArray, reader.result])
                    setImagePreview([reader.result])
                }
            }
            reader.readAsDataURL(file)
        })

    }


    const main = useRef()
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        main.scrollTop = 0;


    }, [])

    return (
        <>

            <div className="overflow-x-hidden overflow-y-hidden w-full">

                <div className="relative min-h-screen p-10 flex flex-col justify-center items-center">
                    <div className="absolute inset-0 filter opacity-30 brightness-75 bg-tuphanda bg-no-repeat bg-cover bg-center bg-fixed"></div>
                    <div className="container mx-auto lg:p-10 lg:w-[50%] z-10">
                        {loading ? <Loader /> : (<>
                            <h1 className="font-black text-4xl mb-5 text-center">Create new module</h1>
                            <form onSubmit={Formik.handleSubmit} encType="multipart/form-data" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="space-y-12">




                                    <div className="border-b border-gray-900/10 pb-12">
                                        <h2 className="text-base font-semibold leading-7 text-gray-900">Module Information</h2>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            {/* Image */}
                                            <div className="col-span-full">
                                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Image
                                                </label>
                                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">

                                                    <div className="text-center">
                                                        <figure className='mx-auto  text-gray-300'>
                                                            <img
                                                                src={imagePreview}
                                                                className="w-full h-[200px] object-cover"
                                                                alt='Image'
                                                            />
                                                        </figure>
                                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                            <label
                                                                htmlFor="file-upload"
                                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                            >
                                                                <span>Upload a file</span>
                                                                <input type='file'
                                                                    name='image'
                                                                    id='file-upload'
                                                                    className="sr-only"
                                                                    accept="images/*"
                                                                    required
                                                                    onChange={onChange} />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                                    </div>


                                                </div>
                                            </div>


                                            {/* Module Title */}
                                            <div className="sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Title
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        onChange={Formik.handleChange}
                                                        value={Formik.values.title}
                                                        onBlur={Formik.handleBlur}
                                                        id="firstName"
                                                        placeholder="Enter title"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                                <div className="text-error italic">
                                                    <small>
                                                        {Formik.errors.title && Formik.touched.title && Formik.errors.title}
                                                    </small>
                                                </div>
                                            </div>
                                            {/* Short Description */}
                                            <div className="sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Short Description
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="shortDesc"
                                                        id="last-name"
                                                        placeholder="Enter short description"
                                                        onChange={Formik.handleChange}
                                                        value={Formik.values.shortDesc}
                                                        onBlur={Formik.handleBlur}
                                                        autoComplete="family-name"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                                <div className="text-error italic">
                                                    <small>
                                                        {Formik.errors.shortDesc && Formik.touched.shortDesc && Formik.errors.shortDesc}
                                                    </small>
                                                </div>
                                            </div>
                                            {/* Description */}
                                            <div className="col-span-full">
                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Description
                                                </label>
                                                <div className="mt-2">
                                                    <textarea id="message" rows="4" name="description" value={Formik.values.description} onChange={Formik.handleChange} onBlur={Formik.handleBlur} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter description here"></textarea>
                                                    <div className="text-error italic">
                                                        <small>
                                                            {Formik.errors.description && Formik.touched.description && Formik.errors.description}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-full">
                                                <div className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                    <label
                                                        htmlFor="pdf-upload"
                                                        className="relative cursor-pointer rounded-md  font-semibold text-indigo-600 p-3"
                                                    >
                                                        <span className="btn">Upload a file</span>
                                                        <input type='file'
                                                            name='pdf'
                                                            id='pdf-upload'
                                                            className="sr-only "
                                                            accept="application/pdf"
                                                            onChange={onFileChange}
                                                            required />
                                                        {filename && <span className="pl-5">{filename}</span>}
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center justify-end gap-x-6">
                                        <Link to="/profile">
                                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                                Cancel
                                            </button>
                                        </Link>
                                        <button
                                            type="submit"
                                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </>)
                        }
                    </div>


                </div>
            </div>


        </>
    )
}

export default CreateModule