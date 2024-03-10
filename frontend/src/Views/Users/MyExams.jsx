import React, { useEffect } from 'react'

import { Card, CardBody } from '@material-tailwind/react'
import { getProfile, clearErrors } from '../../Actions/userActions'
import ExamsList from '../../Components/ExamsList'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../Components/Loader'
const MyExams = () => {
    const { loading, user, error } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        if (error) {
            dispatch(clearErrors())
        }
        dispatch(getProfile())
    }, [dispatch, error])
    return (
        <>
            {loading ? <div className="min-h-screen mt-20">
                <Loader />
            </div> : <div className="mb-6 flex w-full px-4 min-w-0 flex-col bg-white min-h-screen">
                <div className="p-6 md:container md:mx-auto flex flex-col lg:flex-row gap-10">
                    <div className=" w-full">
                        <h1 className="font-[Poppins] font-medium text-2xl">My Exams</h1>
                        <Card className="mt-6 sm:w-full bg-gray-50" >
                            <CardBody className="overflow-scroll h-[500px]">
                                <ExamsList examTaken={user && user.examTaken} loading={loading} />

                            </CardBody>

                        </Card>
                    </div>
                </div>

            </div>}

        </>
    )
}

export default MyExams