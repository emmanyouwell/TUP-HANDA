import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,

} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon, ArrowPathIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";
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



const TABLE_HEAD = ["Actions", "Category ID", "Name", "Slug"];
import { DELETE_CATEGORY_RESET, RESTORE_CATEGORY_RESET } from '../Constants/categoryConstants'
import { useDispatch, useSelector } from 'react-redux'
import { archiveCategory, clearErrors, getAdminCategory, restoreArchivedCategory, getArchivedCategories } from '../Actions/categoryActions';
import { toast } from 'react-toastify'
import Loader from './Loader';



export function CategoryTable({ header, category, categoryCount, resPerPage, currentPage, setCurrentPage, keyword, loading, setKeyword }) {
    const dispatch = useDispatch();
    const totalPage = Math.ceil(categoryCount / resPerPage);
    const { error: deleteError, isDeleted } = useSelector(state => state.category)
    const { isRestored, error: restoreError } = useSelector(state => state.resCategory)
    const navigate = useNavigate();
    const deleteHandler = (id) => {
        dispatch(archiveCategory(id))
    }

    const restoreCategory = (id) => {
        dispatch(restoreArchivedCategory(id))
    }

    const nextPageHandler = () => {
        console.log(currentPage);
        if (currentPage < totalPage) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            dispatch(getAdminCategory(newPage))

        }

    }
    const prevPageHandler = () => {
        console.log(currentPage);

        if (currentPage > 1) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            dispatch(getAdminCategory(newPage))

        }

    }
    useEffect(() => {

        if (deleteError) {
            dispatch(clearErrors())
        }
        if (restoreError) {
            dispatch(clearErrors())
        }
        if (isDeleted) {
            navigate('/admin/category');
            dispatch(getAdminCategory(currentPage, keyword))
            toast.success('Category archived successfully', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            dispatch({ type: DELETE_CATEGORY_RESET })
        }
        if (isRestored) {
            navigate('/admin/category/archive');
            dispatch(getArchivedCategories(currentPage, keyword))
            toast.success('Category restored successfully', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            dispatch({ type: RESTORE_CATEGORY_RESET })
        }
    }, [dispatch, navigate, deleteError, isDeleted, isRestored, restoreError])
    return (
        <Card className="h-[auto] w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            {header}
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all categories
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        {header === "Category Archive List" ? <Link to="/admin/category"> <Button variant="outlined" size="sm">
                            Manage
                        </Button></Link> : ''}

                        {header === "Category Archive List" ? '' : <Link to="/admin/category/new">
                            <Button className="flex items-center gap-3" size="sm">

                                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Category

                            </Button>
                        </Link>}
                        
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                   
                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            onChange={(e) => setKeyword(e.target.value.trim())}
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
                            <td colSpan={6}>
                                <div className="flex p-10 justify-center items-center">
                                    <Loader />
                                </div>
                            </td>
                        </tr> : category.map(
                            ({ _id, name, slug }, index) => {
                                const isLast = index === category.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={_id} className='h-10 overflow-hidden'>
                                        <td className={`${classes} w-20`}>
                                            <div className="flex justify-between items-center ">
                                                {header === "Category Archive List" ?
                                                    <Tooltip content="Restore category">
                                                        <IconButton variant="text">
                                                            <ArrowPathIcon className="h-4 w-4" onClick={() => restoreCategory(_id)} />
                                                        </IconButton>
                                                    </Tooltip>
                                                    : <><Link to={`/admin/category/${_id}`}>
                                                        <Tooltip content="Edit category">
                                                            <IconButton variant="text">
                                                                <PencilIcon className="h-4 w-4" />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </Link>
                                                        <Tooltip content="Archive category">
                                                            <IconButton variant="text">
                                                                <ArchiveBoxIcon className="h-4 w-4" onClick={() => deleteHandler(_id)} />
                                                            </IconButton>
                                                        </Tooltip></>}


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
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal opacity-70"
                                                >
                                                    {/* {org} */}
                                                </Typography>
                                            </div>
                                        </td>

                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {name}
                                            </Typography>
                                        </td>

                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {slug}
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
                    Page {currentPage} of {totalPage}
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