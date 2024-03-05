import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, clearErrors } from "../../Actions/userActions";
import Navbar from "../../Components/Navbar";
import {Link} from 'react-router-dom'
import { getUser } from "../../utils/helper";
import Loader from "../../Components/Loader";
export function Profile() {
    
    const { user, error, loading } = useSelector(state => state.auth)

  return (
    <>
      {loading ? <div className="min-h-screen flex justify-center items-center container mx-auto">
      <Loader/>
      </div>  : <> 
      <section className="relative block h-[50vh] overflow-hidden">
      <div style={{ backgroundImage: `url(${user && user.coverAvatar && user.coverAvatar[0] && user.coverAvatar[0].url ? user.coverAvatar[0].url : 'https://res.cloudinary.com/dtrr0ihcb/image/upload/v1708771983/TUPHANDA_COVER_PHOTO/xbgzqfwjtkrjacbpcely.png'})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="bg-profile-background absolute top-0 h-full w-full scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/25 bg-cover bg-center" />
      </section>
      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">
                <div className="-mt-20 w-40">
                  <Avatar
                    src={user && user.avatar[0].url}
                    alt="Profile picture"
                    variant="circular"
                    className="w-36 h-36 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <Typography variant="h4" color="blue-gray">
                    {user && `${user.firstName} ${user.lastName}`}
                  </Typography>
                  <Typography variant="paragraph" color="gray" className="!mt-0 font-normal">{user && user.email}</Typography>
                </div>
              </div>

              <div className="mt-10 mb-10 flex lg:flex-col justify-between items-center lg:justify-end lg:mb-0 lg:px-4 flex-wrap lg:-mt-5">
                <Link to="/profile/update"><Button className="bg-gray-900 w-fit lg:ml-auto">Edit Profile</Button></Link>
                <div className="flex justify-start py-4 pt-8 lg:pt-4">
                  <div className="mr-4 p-3 text-center">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      2,000,000,000
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Friends
                    </Typography>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      10
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Photos
                    </Typography>
                  </div>
                  <div className="p-3 text-center lg:mr-4">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      89
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Comments
                    </Typography>
                  </div>
                </div>

              </div>
            </div>
            <div className="-mt-4 container space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  {user ? `${user.address}, ${user.city}, ${user.country} ${user.postalCode}` : "City, Country"}
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                {user ? user.course : "Course"}
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                {user ? `${user.department}` : "Department"}
                </Typography>
              </div>
            </div>
            
          </div>


        </div>
      </section>
      </> }
      
      

    </>
  );
}

export default Profile;
