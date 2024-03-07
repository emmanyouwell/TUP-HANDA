import React, { useEffect, useRef, useState } from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import img from '../../../assets/default_avatar.jpg'
import { useDispatch, useSelector } from 'react-redux'

import { createCategory, clearErrors } from "../../../Actions/categoryActions";

import { NEW_CATEGORY_RESET } from "../../../Constants/categoryConstants";

import { toast } from 'react-toastify'
import Loader from "../../../Components/Loader";

const CreateCategory = () => {

    const dispatch = useDispatch()
    const { success, error, loading } = useSelector(state => state.newCategory)
   

    

    const Formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: (values) => {
            const formData = new FormData()
            formData.set('name', values.name)
           

            
            //create module action
            dispatch(createCategory(formData))
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Category name is required'),
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
            navigate('/admin/category');
            toast.success('Category created successfully', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            dispatch({ type: NEW_CATEGORY_RESET })
        }
    }, [error, success, dispatch, navigate])

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
                            <h1 className="font-black text-4xl mb-5 text-center">Create new category</h1>
                            <form onSubmit={Formik.handleSubmit} encType="multipart/form-data" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="space-y-12">




                                    <div className="border-b border-gray-900/10 pb-12">
                                        <h2 className="text-base font-semibold leading-7 text-gray-900">Category Information</h2>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            {/* Category name */}
                                            <div className="sm:col-span-full">
                                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Category Name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        onChange={Formik.handleChange}
                                                        value={Formik.values.name}
                                                        onBlur={Formik.handleBlur}
                                                        
                                                        placeholder="Enter title"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                                <div className="text-error italic">
                                                    <small>
                                                        {Formik.errors.name && Formik.touched.name && Formik.errors.name}
                                                    </small>
                                                </div>
                                            </div>

                                        </div>
                                    </div>  

                                    <div className="mt-6 flex items-center justify-end gap-x-6">
                                        <Link to="/admin/category">
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

export default CreateCategory