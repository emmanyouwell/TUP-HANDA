import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,

} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon, TrashIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
    },
];

const TABLE_HEAD = ["Actions", "User ID", "Name", "Email", "Phone number", "Address", "City", "Country","Department", "Course", "Role"];

import { useDispatch, useSelector } from 'react-redux'

import { toast } from 'react-toastify'
import { getAdminUsers, clearErrors, deleteUser } from '../Actions/userActions';
import { updateRole } from '../Actions/userActions';
import { DELETE_USER_RESET, CHANGE_ROLE_RESET } from '../Constants/userConstants';
import Loader from './Loader';
export function UserTable({ users, usersCount, resPerPage, currentPage, setCurrentPage, keyword, setKeyword, loading }) {

    const totalPage = Math.ceil(usersCount / resPerPage);
    const dispatch = useDispatch();
    const { error: deleteError, isDeleted, isUpdated } = useSelector(state => state.user)


    const navigate = useNavigate();
    const deleteHandler = (id) => {
        dispatch(deleteUser(id))
    }
    const handleUpdateRole = async (id) => {
        await dispatch(updateRole(id));

    };
    const nextPageHandler = () => {
        console.log(currentPage);
        if (currentPage < totalPage) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            dispatch(getAdminUsers(newPage))

        }

    }
    const prevPageHandler = () => {
        console.log(currentPage);

        if (currentPage > 1) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            dispatch(getAdminUsers(newPage))

        }

    }

    useEffect(() => {

        if (deleteError) {
            dispatch(clearErrors())
        }
        if (isDeleted) {
            navigate('/admin/users');
            dispatch(getAdminUsers(currentPage))
            toast.success('User deleted successfully', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            dispatch({ type: DELETE_USER_RESET })
        }
        if (isUpdated) {
            navigate('/admin/users');
            toast.success('Role updated successfully', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            dispatch(getAdminUsers(currentPage, keyword))
            dispatch({ type: CHANGE_ROLE_RESET })
        }
    }, [dispatch, navigate, deleteError, isDeleted, isUpdated])
    return (
        <Card className="h-[auto] w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Users list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all users
                        </Typography>
                    </div>
                   
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                   
                   
                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            onChange={(e) => setKeyword(e.target.value.trim())}
                            className="pr-10" // Add padding to prevent text from going under the icon
                        />
                    </div>

                   
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                    >
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length - 1 && (
                                            <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                        )}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? <tr className="w-full">
                            <td colSpan={9}>
                                <div className="p-10 flex justify-center items-center">
                                    <Loader />
                                </div>
                            </td>
                        </tr> : users.map(
                            ({  department, course, firstName, lastName, email, address, phoneNo, city, country, _id, role }, index) => {
                                const isLast = index === users.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={_id}>
                                        <td className={classes}>
                                            <div className="flex justify-between items-center">

                                                <Tooltip content="Edit Role" >
                                                    <IconButton variant="text" onClick={() => handleUpdateRole(_id)}>
                                                        <CheckBadgeIcon className="h-5 w-5" />
                                                    </IconButton>
                                                </Tooltip>

                                                <Tooltip content="Delete module">
                                                    <IconButton variant="text">
                                                        <TrashIcon className="h-5 w-5" onClick={() => deleteHandler(_id)} />
                                                    </IconButton>
                                                </Tooltip>

                                            </div>

                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {_id}
                                                </Typography>

                                            </div>
                                        </td>

                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {firstName} {lastName}
                                            </Typography>
                                        </td>

                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {email}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal max-w-[200px]"
                                            >
                                                {phoneNo}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal max-w-[200px]"
                                            >
                                                {address}
                                            </Typography>

                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal max-w-[200px]"
                                            >
                                                {city}
                                            </Typography>

                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal max-w-[200px]"
                                            >
                                                {country}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {department}
                                                </Typography>

                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {course}
                                                </Typography>

                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal max-w-[200px]"
                                            >
                                                {role}
                                            </Typography>
                                        </td>


                                    </tr>
                                );
                            },
                        )}

                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page  {currentPage} of {totalPage}
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm" onClick={prevPageHandler}>
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm" onClick={nextPageHandler}>
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}