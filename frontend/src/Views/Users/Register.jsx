
import React, { useEffect, useRef, useState } from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { countries } from "countries-list";
import img from '../../assets/default_avatar.jpg'

// import { useGoogleLogin } from '@react-oauth/google';


import Navbar from "../../Components/Navbar";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const Register = () => {

    const countriesList = Object.values(countries)

    const [avatar, setAvatar] = useState([])
    const [avatarPreview, setAvatarPreview] = useState([img])
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const Formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            postalCode: '',
            country: '',
            phone: '',
            password: '',
            confirmPass: '',

        },
        onSubmit: values => {
            const formData = new FormData()
            formData.set('firstName', values.firstName);
            formData.set('lastName', values.lastName);
            formData.set('street', values.street);
            formData.set('city', values.city);
            formData.set('postalCode', values.postalCode);
            formData.set('country', values.country);
            formData.set('phone', values.phone);
            formData.set('email', values.email);
            formData.set('password', values.password);

            if (avatar.length > 0) {
                if (Array.isArray(avatar)) {
                    avatar.forEach(avatar => {
                        formData.append('avatar', avatar)
                    })
                } else {
                    formData.set('avatar', avatar);
                }
            }


            register(formData)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            street: Yup.string().required('Street is required'),
            city: Yup.string().required('City is required'),
            postalCode: Yup.string().required('Postal code is required'),
            country: Yup.string().required('Country is required'),
            phone: Yup.string().required('Phone number is required'),
            confirmPass: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match')

        })
    })
    //   const GoogleRegister = useGoogleLogin({
    //     onSuccess: async tokenResponse => {
    //       console.log(tokenResponse);
    //       // fetching userinfo can be done on the client or the server
    //       const userInfo = await axios
    //         .get('https://www.googleapis.com/oauth2/v3/userinfo', {
    //           headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
    //         })
    //         .then(res => res.data);

    //       console.log(userInfo);
    //       GRegister(userInfo)
    //     },

    //   });

    //   const GRegister = async (userData) => {
    //     try {
    //       const config = {
    //         headers: {
    //           'Content-Type': 'multipart/form-data'
    //         }
    //       }
    //       const { email, family_name, given_name, picture } = userData
    //       const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/register`, {
    //         name: `${given_name} ${family_name}`,
    //         email,
    //         password: `${family_name}`,
    //         avatar: picture
    //       }, config)
    //       console.log(data.user)
    //       setIsAuthenticated(true)
    //       setLoading(false)

    //       navigate('/')

    //     } catch (error) {
    //       setIsAuthenticated(false)
    //       setLoading(false)

    //       setError(error.response.data.message)
    //       console.log(error.response.data.message)
    //     }
    //   }

    let navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
        if (error) {
            console.log(error)
            setError()
        }

    }, [error, isAuthenticated,])

    const onChange = e => {

        const files = Array.from(e.target.files)
        setAvatar([])
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatar(oldArray => [...oldArray, reader.result])
                    setAvatarPreview([reader.result])
                }
            }
            reader.readAsDataURL(file)
        })

    }

    const register = async (userData) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/register`, {
                firstName: userData.get('firstName'),
                lastName: userData.get('lastName'),
                email: userData.get('email'),
                password: userData.get('password'),
                avatar: userData.getAll('avatar'),
                address: userData.get('street'),
                city: userData.get('city'),
                phoneNo: userData.get('phone'),
                postalCode: userData.get('postalCode'),
                country: userData.get('country')
            }, config)
            // console.log(process.env.REACT_APP_API);
            console.log(data.user)
            // console.log('nag register')
            setIsAuthenticated(true)
            setLoading(false)

            // navigate('/')

        } catch (error) {
            setIsAuthenticated(false)
            setLoading(false)
            if (error.response) {
                setError(error.response.data.message)
                console.log(error.response.data.message)
            } else {
                console.log(error)
            }
        }
    }
    const main = useRef()
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        main.scrollTop = 0;

    }, [])
    return (
        <div className="overflow-x-hidden overflow-y-hidden">
            <Navbar />
            <div className="relative min-h-screen p-10 flex flex-col justify-center items-center">
                <div className="absolute inset-0 filter opacity-30 brightness-75 bg-tuphanda bg-no-repeat bg-cover bg-center bg-fixed"></div>
                <div className="container mx-auto lg:p-10 lg:w-[50%] z-10">
                    <h1 className="font-black text-4xl mb-5 text-center">Register</h1>
                    <form onSubmit={Formik.handleSubmit} encType="multipart/form-data" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="space-y-12">



                            {/* Form body */}
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            First name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="firstName"
                                                onChange={Formik.handleChange}
                                                value={Formik.values.firstName}
                                                onBlur={Formik.handleBlur}
                                                id="firstName"
                                                placeholder="e.g. Juan"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        <div className="text-error italic">
                                            <small>
                                                {Formik.errors.firstName && Formik.touched.firstName && Formik.errors.firstName}
                                            </small>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Last name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="lastName"
                                                id="last-name"
                                                placeholder="e.g. Dela Cruz"
                                                onChange={Formik.handleChange}
                                                value={Formik.values.lastName}
                                                onBlur={Formik.handleBlur}
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        <div className="text-error italic">
                                            <small>
                                                {Formik.errors.lastName && Formik.touched.lastName && Formik.errors.lastName}
                                            </small>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="e.g. juandelacruz@gmail.com"
                                                onChange={Formik.handleChange}
                                                value={Formik.values.email}
                                                onBlur={Formik.handleBlur}
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <div className="text-error italic">
                                                <small>
                                                    {Formik.errors.email && Formik.touched.email && Formik.errors.email}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                            Phone Number
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phoneNo"
                                                placeholder="e.g. 09123456789"
                                                onChange={Formik.handleChange}
                                                value={Formik.values.phone}
                                                onBlur={Formik.handleBlur}
                                                autoComplete="address-level1"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <div className="text-error italic">
                                                <small>
                                                    {Formik.errors.phone && Formik.touched.phone && Formik.errors.phone}
                                                </small>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-span-full">
                                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                            Street address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="street"
                                                id="street-address"
                                                placeholder="e.g. 1234 Main St"
                                                onChange={Formik.handleChange}
                                                value={Formik.values.street}
                                                onBlur={Formik.handleBlur}
                                                autoComplete="street-address"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <div className="text-error italic">
                                                <small>
                                                    {Formik.errors.street && Formik.touched.street && Formik.errors.street}
                                                </small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2 sm:col-start-1">
                                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                            City
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                placeholder="e.g. Taguig City"
                                                onChange={Formik.handleChange}
                                                value={Formik.values.city}
                                                onBlur={Formik.handleBlur}
                                                autoComplete="address-level2"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <div className="text-error italic">
                                                <small>
                                                    {Formik.errors.city && Formik.touched.city && Formik.errors.city}
                                                </small>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="sm:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                            ZIP / Postal code
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="postalCode"
                                                id="postal-code"
                                                placeholder="e.g. 1630"
                                                onChange={Formik.handleChange}
                                                value={Formik.values.postalCode}
                                                onBlur={Formik.handleBlur}
                                                autoComplete="postal-code"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <div className="text-error italic">
                                                <small>
                                                    {Formik.errors.postalCode && Formik.touched.postalCode && Formik.errors.postalCode}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            Country
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                onChange={Formik.handleChange}
                                                value={Formik.values.country}
                                                onBlur={Formik.handleBlur}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                {countriesList.map(country => (
                                                    <option key={country.name} value={country.name}>
                                                        {country.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="text-error italic">
                                            <small>
                                                {Formik.errors.country && Formik.touched.country && Formik.errors.country}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                            Photo
                                        </label>
                                        <div className="mt-2 flex items-center gap-x-3">
                                            {/* <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                                            <figure className='mr-3'>
                                                <img
                                                    src={avatarPreview[0]}
                                                    className="w-[50px] h-[50px] rounded-full object-cover"
                                                    alt='Avatar Preview'
                                                />
                                            </figure>
                                            <button
                                                htmlFor="file-upload"
                                                type="button"
                                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                            >
                                                <label

                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    Change
                                                    <input type='file'
                                                        name='avatar'
                                                        id='customFile'
                                                        className="sr-only"
                                                        accept="images/*"
                                                        multiple
                                                        required
                                                        onChange={onChange} />
                                                </label>
                                            </button>


                                        </div>
                                    </div>


                                </div>
                            </div>


                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Create a Password</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Password should be at least 6 characters long.</p>
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="password"
                                                type="password"
                                                placeholder="*********"
                                                onChange={Formik.handleChange}
                                                value={Formik.values.password}
                                                onBlur={Formik.handleBlur}
                                                
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <div className="text-error italic">
                                                <small>
                                                    {Formik.errors.password && Formik.touched.password && Formik.errors.password}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Confirm Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="confirmPass"
                                                type="password"
                                                onChange={Formik.handleChange}
                                                value={Formik.values.confirmPass}
                                                onBlur={Formik.handleBlur}
                                                placeholder="*********"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <div className="text-error italic">
                                                <small>
                                                    {Formik.errors.confirmPass && Formik.touched.confirmPass && Formik.errors.confirmPass}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register
