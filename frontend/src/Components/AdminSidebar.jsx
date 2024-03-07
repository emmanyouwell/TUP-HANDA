import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ArchiveBoxIcon,
  PowerIcon,
  AdjustmentsHorizontalIcon,

} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import logo from '../assets/TUPHANDA.png'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../Actions/userActions'
import { useMediaQuery } from 'react-responsive'


export function AdminSidebar() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' })
  const [open, setOpen] = React.useState(0);
  const dispatch = useDispatch()
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => setOpenDrawer(true);
  const closeDrawer = () => setOpenDrawer(false);

  const logoutHandler = () => {
    dispatch(logoutUser())
  }
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {isDesktopOrLaptop ?
        <Card className="h-screen w-full sticky top-0 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <Link to="/">
              <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800'>

                <span className='text-3xl text-indigo-600'>
                  <img src={logo} className="w-24 h-12 object-contain" alt="Tup handa logo" />
                </span>
                TUP Handa
              </div>
            </Link>
          </div>
          <List>
            <Link to="/admin/dashboard">
              <ListItem>
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Dashboard
                </Typography>
              </ListItem>
            </Link>
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                  <ListItemPrefix>
                    <AdjustmentsHorizontalIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Manage
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <Link to="/admin/modules">
                    <ListItem>

                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Modules

                    </ListItem>
                  </Link>
                  <Link to="/admin/videos">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Videos
                    </ListItem>
                  </Link>
                  <Link to="/admin/category">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Category
                    </ListItem>
                  </Link>
                  <Link to="/admin/users">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Users
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                  <ListItemPrefix>
                    <ArchiveBoxIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Archive
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <Link to="/admin/modules/archive">
                    <ListItem>

                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Modules

                    </ListItem>
                  </Link>
                  <Link to="/admin/videos/archive">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Videos
                    </ListItem>
                  </Link>
                  <Link to="/admin/category/archive">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Category
                    </ListItem>
                  </Link>
                  <Link to="/admin/users">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Users
                    </ListItem>
                  </Link>

                </List>
              </AccordionBody>
            </Accordion>
            <hr className="my-2 border-blue-gray-50" />

            <Link to="/" onClick={logoutHandler}>
              <ListItem>
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
              </ListItem>
            </Link>
          </List>
        </Card> : <>

          <div onClick={toggleDrawer} className='text-3xl w-[auto] top-0 left-0 p-10 cursor-pointer lg:hidden z-20'>
            <ion-icon name={openDrawer ? 'close' : 'menu'}></ion-icon>
          </div>
          <Drawer open={openDrawer} onClose={closeDrawer} className="p-4 ">
            <Card className="h-screen w-full top-0 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
              <div className="mb-2 p-4">
                <Link to="/">
                  <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800'>

                    <span className='text-3xl text-indigo-600'>
                      <img src={logo} className="w-24 h-12 object-contain" alt="Tup handa logo" />
                    </span>
                    TUP Handa
                  </div>
                </Link>
              </div>
              <List>
                <Link to="/admin/dashboard">
                  <ListItem>
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-auto font-normal">
                      Dashboard
                    </Typography>
                  </ListItem>
                </Link>
                <Accordion
                  open={open === 2}
                  icon={
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                    />
                  }
                >
                  <ListItem className="p-0" selected={open === 2}>
                    <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                      <ListItemPrefix>
                        <AdjustmentsHorizontalIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="mr-auto font-normal">
                        Manage
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0">
                      <Link to="/admin/modules">
                        <ListItem>

                          <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                          </ListItemPrefix>
                          Modules

                        </ListItem>
                      </Link>
                      <Link to="/admin/videos">
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                          </ListItemPrefix>
                          Videos
                        </ListItem>
                      </Link>
                      <Link to="/admin/category">
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                          </ListItemPrefix>
                          Category
                        </ListItem>
                      </Link>
                      <Link to="/admin/users">
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                          </ListItemPrefix>
                          Users
                        </ListItem>
                      </Link>
                    </List>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 3}
                  icon={
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                    />
                  }
                >
                  <ListItem className="p-0" selected={open === 3}>
                    <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                      <ListItemPrefix>
                        <ArchiveBoxIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="mr-auto font-normal">
                        Archive
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0">
                      <Link to="/admin/modules">
                        <ListItem>

                          <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                          </ListItemPrefix>
                          Modules

                        </ListItem>
                      </Link>
                      <Link to="/admin/videos">
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                          </ListItemPrefix>
                          Videos
                        </ListItem>
                      </Link>
                      <Link to="/admin/category/archive">
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                          </ListItemPrefix>
                          Category
                        </ListItem>
                      </Link>
                      <Link to="/admin/users">
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                          </ListItemPrefix>
                          Users
                        </ListItem>
                      </Link>

                    </List>
                  </AccordionBody>
                </Accordion>
                <hr className="my-2 border-blue-gray-50" />

                <Link to="/" onClick={logoutHandler}>
                  <ListItem>
                    <ListItemPrefix>
                      <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                  </ListItem>
                </Link>
              </List>
            </Card>
          </Drawer></>}

    </>

  );
}