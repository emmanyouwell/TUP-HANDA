import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword, clearErrors } from '../../Actions/userActions'

import Navbar from "../../Components/Navbar";
const ForgotPassword = () => {
  const dispatch = useDispatch()
  const { error, loading, message } = useSelector(state => state.forgotPassword)
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.set('email', values.email)
      dispatch(forgotPassword(formData))
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Invalid email address')
    })
  })
  useEffect(() => {
    if (error) {
       console.log(error);
        dispatch(clearErrors());
    }
    if (message) {
        console.log(message)
    }
}, [dispatch, error, message])

  return (
    <>
            <Navbar />

            <div className="relative min-h-screen p-10 flex flex-col justify-center items-center ">
                <div className="absolute inset-0 filter opacity-30 bg-tuphanda bg-no-repeat bg-cover bg-center bg-fixed"></div>
                <div className="container lg:w-[50%] z-10 ">

                    <div className="w-full max-w-xl mx-auto">
                        <h1 className="font-black text-4xl mb-5 text-center">Forgot Password</h1>

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
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-5">
                                    <button className="col-span-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Send confirmation email
                                    </button>
                                    
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-center gap-x-6">
                                <p className="inline-block align-baseline font-bold text-sm text-blue-500">
                                    Remembered it? <span className="underline"><Link to="/login" className="hover:text-blue-800">Login here.</Link></span>
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

export default ForgotPassword