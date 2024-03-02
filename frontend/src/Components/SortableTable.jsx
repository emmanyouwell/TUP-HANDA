import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
   
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
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

const TABLE_HEAD = ["Actions","Module ID", "Image","Title", "Short Description", "Description", "File"];
import { DELETE_MODULE_RESET } from '../Constants/moduleConstants';
import {useDispatch, useSelector} from 'react-redux'
import { deleteModule, clearErrors,getModules  } from '../Actions/modulesActions';
import {toast} from 'react-toastify'

export function SortableTable({modules}) {
    const dispatch = useDispatch();
    const {error: deleteError, isDeleted} = useSelector(state => state.module)
    const navigate = useNavigate();
    const deleteHandler = (id) => {
        dispatch(deleteModule(id))
    }
    useEffect(()=>{
       
        if (deleteError) {
            dispatch(clearErrors())
        }
        if (isDeleted) {
            navigate('/admin/modules');
            dispatch(getModules())
            toast.success('Module deleted successfully', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            dispatch({ type: DELETE_MODULE_RESET })
        }
    },[dispatch, navigate, deleteError, isDeleted])
    return (
        <Card className="h-[auto] w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Modules list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all modules
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button variant="outlined" size="sm">
                            view all
                        </Button>
                        <Link to="/admin/modules/new">
                        <Button className="flex items-center gap-3" size="sm">
                            
                            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Modules
                           
                        </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <Tabs value="all" className="w-full md:w-max">
                        <TabsHeader>
                            {TABS.map(({ label, value }) => (
                                <Tab key={value} value={value}>
                                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
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
                        {modules.map(
                            ({ img, title, description, file, shortDesc, _id }, index) => {
                                const isLast = index === modules.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={_id}>
                                        <td className={classes}>
                                            <div className="flex justify-between items-center">
                                            <Link to={`/admin/modules/${_id}`}>
                                            <Tooltip content="Edit module">
                                                <IconButton variant="text">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                            </Link>
                                            <Tooltip content="Delete module">
                                                <IconButton variant="text">
                                                    <TrashIcon className="h-4 w-4" onClick={()=>deleteHandler(_id)}/>
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
                                            <div className="flex items-center gap-3">
                                                <Avatar src={img.url} alt={title} size="sm" />
                                                
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {title}
                                            </Typography>
                                        </td>
                                        {/* <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={online ? "online" : "offline"}
                                                    color={online ? "green" : "blue-gray"}
                                                />
                                            </div>
                                        </td> */}
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {shortDesc}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal max-w-[200px]"
                                            >
                                                {description}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                <a href={file.url}>{file.url}</a>
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
                    Page 1 of {modules.length}
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}