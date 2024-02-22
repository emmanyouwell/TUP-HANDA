import React, {useState, useEffect} from 'react'
import Navbar from '../../Components/Navbar'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate, Link, useLocation } from 'react-router-dom'

import axios from 'axios'
import { toast } from 'react-toastify'
import { authenticate, getUser } from '../../utils/helper.js'
const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            login(values.email, values.password)
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
        })

    })
    const navigate = useNavigate()
    let location = useLocation();
    const redirect = location.search ? new URLSearchParams(location.search).get('redirect') : ''
    const login = async (email, password) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            console.log(process.env.REACT_APP_API)
            const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/login`, { email, password }, config)
            console.log(data)
            authenticate(data, () => navigate("/"))

        } catch (error) {
            toast.error("invalid user or password", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }


    useEffect(() => {

        if (getUser() && redirect === 'information') {
            navigate(`/${redirect}`)
        }
    }, [])
    return (
        <>
            <Navbar />

            <div className="relative min-h-screen p-10 flex flex-col justify-center items-center ">
                <div className="absolute inset-0 filter opacity-30 bg-tuphanda bg-no-repeat bg-cover bg-center bg-fixed"></div>
                <div className="w-[50%] z-10 ">

                    <div className="w-full max-w-xl mx-auto">
                        <h1 className="font-black text-4xl mb-5 text-center">Login</h1>

                        <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="border-b border-gray-900/10 p-12">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Email
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                                    <div className="text-error italic">
                                        <small>
                                            {formik.errors.email && formik.touched.email && formik.errors.email}
                                        </small>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                        Password
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*********" name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                                    <div className="text-error italic">
                                        <small>
                                            {formik.errors.password && formik.touched.password && formik.errors.password}
                                        </small>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Log in
                                    </button>
                                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-center gap-x-6">
                                <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                    Don't have an account? <span className="underline"><Link to="/register">Register here</Link></span>
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

export default Login