import React, { useEffect, useRef, useState } from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import img from '../../../assets/default_avatar.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { createVideos, clearErrors } from "../../../Actions/videoActions";
import { NEW_VIDEO_RESET } from "../../../Constants/videoConstants";
import { getCategory, clearErrors as clearCategoryError } from "../../../Actions/categoryActions";
import {toast} from 'react-toastify'
import Loader from '../../../Components/Loader'
const CreateVideo = () => {
    
    const dispatch = useDispatch()
    const {success, error, loading} = useSelector(state => state.newVideo)
    const { categories, error: categoryError } = useSelector(state => state.categories)
    const getId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
    
        return (match && match[2].length === 11)
          ? match[2]
          : null;
    }
    const Formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            shortDesc: '',
            videoLink: '',
            category: ''
        },
        onSubmit: (values) => {
            const id = getId(values.videoLink)
            const embed = "https://www.youtube.com/embed/"+id
           
            const formData = new FormData();
            formData.set('title', values.title)
            formData.set('description', values.description)
            formData.set('shortDesc', values.shortDesc)
            formData.set('videoLink', embed),
            formData.set('category', values.category)
            // console.log(formData.get('title'))
            dispatch(createVideos(formData))
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Video title is required'),
            description: Yup.string().required('Video description is required'),
            shortDesc: Yup.string().required('Short description is required'),
            videoLink: Yup.string().required('Video link is required'),
            category: Yup.string().required('Category is required')
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
            navigate('/admin/videos');
            toast.success('Video created successfully', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            dispatch({ type: NEW_VIDEO_RESET })

        }
        if (categoryError) {
            toast.error(categoryError, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            dispatch(clearCategoryError())
        }
        dispatch(getCategory())


    }, [error,success,dispatch,navigate,categoryError])

    


    const main = useRef()
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        main.scrollTop = 0;


    }, [])

  return (
    <div className="overflow-x-hidden overflow-y-hidden w-full">
    {/* <Navbar /> */}
    <div className="relative min-h-screen p-10 flex flex-col justify-center items-center">
        <div className="absolute inset-0 filter opacity-30 brightness-75 bg-tuphanda bg-no-repeat bg-cover bg-center bg-fixed"></div>
        <div className="container mx-auto lg:p-10 lg:w-[50%] z-10">
            
            {loading ? <Loader/> : <>
            <h1 className="font-black text-4xl mb-5 text-center">Upload videos</h1>
            <form onSubmit={Formik.handleSubmit} encType="multipart/form-data" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="space-y-12">



                    {/* Form body */}
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Video Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                            <div className="col-span-full">
                                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                                Category
                                            </label>
                                            <div className="mt-2">
                                                <select
                                                    id="category"
                                                    name="category"
                                                    autoComplete="category-name"
                                                    onChange={Formik.handleChange}
                                                    value={Formik.values.category}
                                                    onBlur={Formik.handleBlur}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                >
                                                    <option value="a">Select category</option>
                                                    {categories.map((c) => (
                                                        <option key={c._id} value={c._id}>
                                                            {c.name}
                                                        </option>
                                                    ))}

                                                </select>

                                            </div>
                                            <div className="text-error italic">
                                                <small>
                                                    {Formik.errors.category && Formik.touched.category && Formik.errors.category}
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
                            {/* Video Link */}
                            <div className="col-span-full">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    YouTube Link
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="videoLink"
                                        id="last-name"
                                        placeholder="Enter video link"
                                        onChange={Formik.handleChange}
                                        value={Formik.values.videoLink}
                                        onBlur={Formik.handleBlur}
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <div className="text-error italic">
                                    <small>
                                        {Formik.errors.videoLink && Formik.touched.videoLink && Formik.errors.videoLink}
                                    </small>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link to="/admin/videos">
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
            </form></>}

        </div>


    </div>
</div>
  )
}

export default CreateVideo