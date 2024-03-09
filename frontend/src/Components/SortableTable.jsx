import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,

} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon, ArchiveBoxIcon, ArrowPathIcon, BookOpenIcon} from "@heroicons/react/24/solid";
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


const TABLE_HEAD = ["Actions", "Module ID", "Image", "Title", "Short Description", "Description", "File"];
import { DELETE_MODULE_RESET, RESTORE_MODULE_RESET } from '../Constants/moduleConstants';
import { useDispatch, useSelector } from 'react-redux'
import { deleteModule, clearErrors, getAdminModules, getArchivedModules, restoreArchivedModules } from '../Actions/modulesActions';
import { getCategory, clearErrors as clearCategoryError } from '../Actions/categoryActions';
import { toast } from 'react-toastify'
import Loader from './Loader';

export function SortableTable({ header, modules, modulesCount, resPerPage, currentPage, setCurrentPage, keyword, loading, setKeyword, category, setCategory }) {
    const dispatch = useDispatch();
    const totalPage = Math.ceil(modulesCount / resPerPage);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [isShortDescExpanded, setIsShortDescExpanded] = useState(false);
    const [isTitleExpanded, setIsTitleExpanded] = useState(false);
    const [isFileExpanded, setIsFileExpanded] = useState(false);
    const { error: deleteError, isDeleted } = useSelector(state => state.module)
    const { categories, error: categoryError } = useSelector(state => state.categories)
    const {isRestored, error: restoreError} = useSelector(state => state.resModule)
    const navigate = useNavigate();
    const deleteHandler = (id) => {
        dispatch(deleteModule(id))
    }

    const restoreModule = (id) => {
        dispatch(restoreArchivedModules(id))
    }
    const nextPageHandler = () => {
        console.log(currentPage);
        if (currentPage < totalPage) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            dispatch(getAdminModules(newPage))

        }

    }
    const prevPageHandler = () => {
        console.log(currentPage);

        if (currentPage > 1) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            dispatch(getAdminModules(newPage))

        }

    }
    useEffect(() => {
        dispatch(getCategory())
        if (deleteError) {
            dispatch(clearErrors())
        }
        if (categoryError) {
            dispatch(clearCategoryError())
        }
        if (restoreError) {
            dispatch(clearErrors())
        }
        if (isRestored){
            navigate('/admin/modules/archive');
            dispatch(getArchivedModules(currentPage, keyword, category))
            toast.success('Module restored successfully', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            dispatch({ type: RESTORE_MODULE_RESET })
        }
        if (isDeleted) {
            navigate('/admin/modules');
            dispatch(getAdminModules(currentPage, keyword))
            toast.success('Module archived successfully', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            dispatch({ type: DELETE_MODULE_RESET })
        }
    }, [dispatch, navigate, deleteError, isDeleted, categoryError, category, isRestored, restoreError])
    return (
        <Card className="h-[auto] w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            {header}
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all modules
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    {header === "Module Archive List" ?  <Link to="/admin/modules">
                            <Button variant="outlined" size="sm">
                                Manage
                            </Button>
                        </Link>:
                        <Link to="/modules">
                            <Button variant="outlined" size="sm">
                                View all
                            </Button>
                        </Link>}
                        {header === "Module Archive List" ? '' :  <Link to="/admin/modules/new">
                            <Button className="flex items-center gap-3" size="sm">

                                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Modules

                            </Button>
                        </Link>}
                       
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="overflow-x-auto whitespace-nowrap">
                        <Tabs value={category} className="w-full md:w-max transition-none ">
                            <TabsHeader className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                                indicatorProps={{
                                    className:
                                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                                    
                                }}>
                                <Tab value="all" className="h-12 text-center" onClick={() => setCategory('')}>All</Tab>
                                {categories.map(({ _id, name }) => (
                                    <Tab key={_id} value={_id} className="h-12 text-center" onClick={() => { setCategory(_id) }}>
                                        &nbsp;&nbsp;{name}&nbsp;&nbsp;
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
                    </div>

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
                        </tr> : modules.length >= 1 ? modules.map(
                            ({ img, title, description, file, shortDesc, _id }, index) => {
                                const isLast = index === modules.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={_id} className='h-10 overflow-hidden'>
                                        <td className={classes}>
                                            <div className="flex justify-between items-center">
                                            {header === "Module Archive List" ?
                                                    <Tooltip content="Restore module">
                                                        <IconButton variant="text">
                                                            <ArrowPathIcon className="h-4 w-4" onClick={()=>restoreModule(_id)} />
                                                        </IconButton>
                                                    </Tooltip>
                                                : <><Link to={`/admin/modules/${_id}`}>
                                                    <Tooltip content="Edit module">
                                                        <IconButton variant="text">
                                                            <PencilIcon className="h-4 w-4" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Link>
                                                <Link to={`/admin/questions/${_id}`}>
                                                    <Tooltip content="Add exam">
                                                        <IconButton variant="text">
                                                            <BookOpenIcon className="h-4 w-4" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Link>
                                                <Tooltip content="Archive module">
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
                                               
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar src={img.url} alt={title} size="sm" />

                                            </div>
                                        </td>
                                        <td className={`${classes} ${isTitleExpanded ? '' : 'truncate'} `} onClick={() => setIsTitleExpanded(!isTitleExpanded)}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal max-w-[200px]"
                                            >
                                                {title}
                                            </Typography>
                                        </td>

                                        <td className={`${classes} ${isShortDescExpanded ? '' : 'truncate'} `} onClick={() => setIsShortDescExpanded(!isShortDescExpanded)}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal max-w-[200px]"
                                            >
                                                {shortDesc}
                                            </Typography>
                                        </td>
                                        <td className={`${classes} ${isDescriptionExpanded ? '' : 'truncate'} `} onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal max-w-[200px]"
                                            >
                                                {description}
                                            </Typography>
                                        </td>
                                        <td className={`${classes} ${isFileExpanded ? '' : 'truncate'} `} onClick={() => setIsFileExpanded(!isFileExpanded)}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal max-w-[200px]"
                                            >
                                                <a href={file.url}>{file.url}</a>
                                            </Typography>
                                        </td>

                                    </tr>
                                );
                            },
                        ) : <tr className="w-full">
                            <td colSpan={6}>
                                <div className="flex p-10 justify-center items-center">
                                    No modules found
                                </div>
                            </td></tr>}
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