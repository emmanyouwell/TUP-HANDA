import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { login, clearErrors } from '../../Actions/userActions.js'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import Loader from '../../Components/Loader.jsx'
import ServerErrorPage from '../../ServerErrorPage.jsx'



const Login = () => {
    const dispatch = useDispatch()

    const { error, loading, user, isAuthenticated, isVerified } = useSelector(state => state.auth)

    const [visible, setVisible] = useState(true)

    const icon = visible ? <i className="fa-solid fa-eye-slash hover:cursor-pointer" onClick={() => setVisible(!visible)}></i> : <i className="fa-solid fa-eye" onClick={() => setVisible(!visible)}></i>
    const inputType = visible ? "password" : "text"
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            dispatch(login(values.email, values.password, navigate))

        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
        })

    })

    let location = useLocation();
    const redirect = location.search ? new URLSearchParams(location.search).get('redirect') : ''



    useEffect(() => {
        if (isAuthenticated && redirect === 'email-activation') {
            navigate(`/${redirect}`)
        }
        else if (isAuthenticated && isVerified) {
            navigate('/')
        }
        if (error) {
        
            dispatch(clearErrors())
           
        }


    }, [error, isAuthenticated, dispatch, navigate, redirect])
   
    return (
        <>
            {error ? <ServerErrorPage /> :<div className="relative min-h-screen p-10 flex flex-col justify-center items-center ">
                <div className="absolute inset-0 filter opacity-30 bg-tuphanda bg-no-repeat bg-cover bg-center bg-fixed"></div>
                <div className="container lg:w-[50%] z-10 ">

                    <div className="w-full max-w-xl mx-auto">
                        {loading ? <Loader /> : <>
                            <h1 className="font-black text-4xl mb-5 text-center">Login</h1>

                            <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="border-b border-gray-900/10 md:p-12">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                            Email
                                        </label>
                                        <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="email" type="email" placeholder="e.g. juandelacruz@email.com" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                                        <div className="text-error italic">
                                            <small>
                                                {formik.errors.email && formik.touched.email && formik.errors.email}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-10" id="password" type={inputType} placeholder="*********" name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                                            <span className=" absolute top-1/2 transform -translate-y-1/2 right-3">
                                                {icon}
                                            </span>
                                        </div>

                                        <div className="text-error italic">
                                            <small>
                                                {formik.errors.password && formik.touched.password && formik.errors.password}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-5">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                            Log in
                                        </button>
                                        <Link to="/password/forgot" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 md:text-end">
                                            Forgot Password?
                                        </Link>
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
                        </>}


                    </div>
                </div>
            </div> }

            
        </>
    )
}

export default Login