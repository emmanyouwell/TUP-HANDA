
import React, { useEffect, useRef, useState } from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { countries } from "countries-list";
import img from '../../assets/default_avatar.jpg'
import { updateProfile, clearErrors, getProfile } from '../../Actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

import { UPDATE_PROFILE_RESET } from "../../Constants/userConstants";
import { getUser } from "../../utils/helper";
import Navbar from "../../Components/Navbar";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const UpdateProfile = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { isUpdated, error } = useSelector(state => state.user)
    const countriesList = Object.values(countries)
    const [course, setCourse] = useState([])
    const [avatar, setAvatar] = useState([])
    const [cover, setCover] = useState([])
    const [coverPreview, setCoverPreview] = useState([img])
    const [department, setDepartment] = useState([])
    const [avatarPreview, setAvatarPreview] = useState([img])
    const [loading, setLoading] = useState(true)
    const [selectedDepartment, setSelectedDepartment] = useState('')
    const getCourse = async (deptId) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/courses?department=${deptId}`)
            setCourse(Object.values(data.courses))
        } catch (error) {
            console.log(error)
        }

    }

    const getDepartment = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/departments`)
            console.log(data)
            setDepartment(Object.values(data.depts))

        } catch (error) {
            console.log(error)
        }
    }



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
            // password: '',
            // confirmPass: '',
            department: '',
            course: ''

        },
        onSubmit: (values) => {
            const formData = new FormData()
            formData.set('firstName', values.firstName);
            formData.set('lastName', values.lastName);
            formData.set('address', values.street);
            formData.set('city', values.city);
            formData.set('postalCode', values.postalCode);
            formData.set('country', values.country);
            formData.set('phoneNo', values.phone);
            formData.set('email', values.email);
            // formData.set('password', values.password);
            
            formData.set('department', selectedDepartment);
            formData.set('course', values.course);
            if (avatar.length > 0) {
                if (Array.isArray(avatar)) {
                    avatar.forEach(avatar => {
                        formData.append('avatar', avatar)
                    })
                } else {
                    formData.set('avatar', avatar);
                }
            }
            if (cover.length > 0) {
                if (Array.isArray(cover)) {
                    cover.forEach(cover => {
                        formData.append('coverAvatar', cover)
                    })
                } else {
                    formData.set('coverAvatar', cover);
                }
            }

            dispatch(updateProfile(formData))
            
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            // password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            street: Yup.string().required('Street is required'),
            city: Yup.string().required('City is required'),
            postalCode: Yup.string().required('Postal code is required'),
            country: Yup.string().required('Country is required'),
            phone: Yup.string().required('Phone number is required'),
            // confirmPass: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
            department: Yup.string().required('Department is required'),
            course: Yup.string().required('Course is required')

        })
    })


    let navigate = useNavigate()
    useEffect(() => {
        if (error) {
            dispatch(clearErrors())
        }
        if (user) {
            Formik.values.firstName = user.firstName;
            Formik.values.email = user.email;


            Formik.values.lastName = user.lastName;
            Formik.values.street = user.address;
            Formik.values.city = user.city;
            Formik.values.postalCode = user.postalCode;
            Formik.values.country = user.country;
            Formik.values.phone = user.phoneNo;


            Formik.values.department = user.department;
            Formik.values.course = user.course;
            setAvatarPreview(user.avatar[0].url)
            console.log(user.coverAvatar)
            if (user.coverAvatar.length > 0) {
                setCoverPreview(user.coverAvatar[0].url)
            }


        }

        if (isUpdated) {
            // alert.success('User updated successfully')
            dispatch(getProfile());
            navigate('/profile', { replace: true })
            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }


    }, [error, isUpdated, dispatch, user])

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
    const onCoverChange = e => {

        const files = Array.from(e.target.files)
        setCover([])
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setCover(oldArray => [...oldArray, reader.result])
                    setCoverPreview([reader.result])
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
        getDepartment()
        
    }, [])
    useEffect(()=>{
        if (user && user.department){
            setSelectedDepartment(user.department)
        }
        if (department) {
            
            setLoading(false)
            getCourse(department.find(dept => dept.name === user.department)?._id || 'none')
            }
    },[department])
  
    return (
        <div className="overflow-x-hidden overflow-y-hidden">
            <Navbar />
            <div className="relative min-h-screen p-10 flex flex-col justify-center items-center">
                <div className="absolute inset-0 filter opacity-30 brightness-75 bg-tuphanda bg-no-repeat bg-cover bg-center bg-fixed"></div>
                <div className="container mx-auto lg:p-10 lg:w-[50%] z-10">
                    <h1 className="font-black text-4xl mb-5 text-center">Edit profile</h1>
                    <form onSubmit={Formik.handleSubmit} encType="multipart/form-data" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="space-y-12">

                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Department and Course Information</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    Please select your corresponding department and enrolled course.
                                </p>
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">
                                            Department
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="department"
                                                name="department"
                                                autoComplete="department-name"
                                                onChange={(e) => {
                                                    const option = department.find(dept => dept._id === e.target.value)
                                                    
                                                    if (option) {
                                                        setSelectedDepartment(option.name)
                                                        getCourse(e.target.value)
                                                    }

                                                    Formik.handleChange(e)
                                                    

                                                }}
                                                value={department.find(dept=>dept.name === Formik.values.department)?._id ||Formik.values.department}
                                                onBlur={Formik.handleBlur}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option value="a">Select a Department</option>
                                                {department.map((c) => (
                                                    <option key={c._id} value={c._id}>
                                                        {c.name}
                                                    </option>
                                                ))}

                                            </select>
                                            
                                        </div>
                                        <div className="text-error italic">
                                            <small>
                                                {Formik.errors.department && Formik.touched.department && Formik.errors.department}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">
                                            Course
                                        </label>
                                        <div className="mt-2">

                                            <select
                                                id="course"
                                                name="course"
                                                autoComplete="course-name"
                                                onChange={Formik.handleChange}
                                                value={course.find(c=>c.name === Formik.values.course)?.name||''}
                                                onBlur={Formik.handleBlur}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option value="">Select a course</option>
                                                {course.map((c) => (
                                                    <option key={c._id} value={c.name}>
                                                        {c.code} - {c.name}
                                                    </option>
                                                ))}

                                            </select>
                                        </div>
                                        <div className="text-error italic">
                                            <small>
                                                {Formik.errors.course && Formik.touched.course && Formik.errors.course}
                                            </small>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Form body */}
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

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
                                                {/* {course.map((c) => (
                                                    <option key={c._id} value={c.name}>
                                                    {c.code} - {c.name}
                                                </option>
                                                ))} */}
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
                                                    src={avatarPreview}
                                                    className="w-[200px] h-[200px] rounded-full object-cover"
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
                                                        onChange={onChange} />
                                                </label>
                                            </button>


                                        </div>
                                        <div className="col-span-full">
                                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                                Cover photo
                                            </label>
                                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">

                                                <div className="text-center">
                                                    <figure className='mx-auto  text-gray-300'>
                                                        <img
                                                            src={coverPreview}
                                                            className="w-full h-[200px] object-cover"
                                                            alt='Avatar Preview'
                                                        />
                                                    </figure>
                                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        >
                                                            <span>Upload a file</span>
                                                            <input type='file'
                                                                name='cover'
                                                                id='file-upload'
                                                                className="sr-only"
                                                                accept="images/*"
                                                                multiple
                                                                onChange={onCoverChange} />
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                                </div>


                                            </div>
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
                                                id="password"
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
                                                id="confirmPass"
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
                    </form>
                </div>
            </div>

        </div>
    )
}

export default UpdateProfile
