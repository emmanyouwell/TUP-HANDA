import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { resetPassword, clearErrors } from '../../Actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Navbar from '../../Components/Navbar';
const ResetPassword = () => {
    let { token } = useParams();
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const { error, success } = useSelector(state => state.forgotPassword)
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        onSubmit: (values) => {
            const formData = new FormData();
            formData.set('password', values.password);
            formData.set('confirmPassword', values.confirmPassword);
            dispatch(resetPassword(token, formData))
            
        },
        validationSchema: Yup.object({
            password: Yup.string().required('Password is required').min(6, 'Password must be atleast 6 characters long'),
            confirmPassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'), null], 'Passwords must match')
        })
    })
    useEffect(() => {
        if (error) {
            dispatch(clearErrors())
        }
        if (success){
            navigate('/login')
        }
        
    }, [error, success])
    return (
        <>
            {/* <Navbar /> */}

            <div className="relative min-h-screen p-10 flex flex-col justify-center items-center ">
                <div className="absolute inset-0 filter opacity-30 bg-tuphanda bg-no-repeat bg-cover bg-center bg-fixed"></div>
                <div className="container lg:w-[50%] z-10 ">

                    <div className="w-full max-w-xl mx-auto">
                        <h1 className="font-black text-4xl mb-5 text-center">Reset Password</h1>

                        <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="border-b border-gray-900/10 md:p-12">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        New password
                                    </label>
                                    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="oldPass" type="password" placeholder="*********" name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                                    <div className="text-error italic">
                                        <small>
                                            {formik.errors.password && formik.touched.password && formik.errors.password}
                                        </small>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Confirm Password
                                    </label>
                                    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="newPass" type="password" placeholder="*********" name="confirmPassword" onChange={formik.handleChange} value={formik.values.confirmPassword} onBlur={formik.handleBlur} />
                                    <div className="text-error italic">
                                        <small>
                                            {formik.errors.confirmPassword && formik.touched.confirmPassword && formik.errors.confirmPassword}
                                        </small>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-5">
                                    <button className="col-span-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Reset Password
                                    </button>
                                   
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-center gap-x-6">
                                <p className="inline-block align-baseline font-bold text-sm text-blue-500">
                                    Don't have an account? <span className="underline"><Link to="/register" className="hover:text-blue-800">Register here</Link></span>
                                </p>
                            </div>

                        </form>
                        <p className="text-center text-gray-500 text-xs">
                            &copy;2024 TUP Handa. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword