import React, { useEffect, useState } from 'react'
// import {PDFDownloadLink, Document, Page} from '@react-pdf/renderer'

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Chip
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux'
import { addUserCourse, clearErrors } from '../Actions/userActions';
import { updateExamTaken, clearErrors as clearExamError } from '../Actions/userActions';
import { ADD_COURSE_RESET } from '../Constants/userConstants';
import { toast } from 'react-toastify'
import { UPDATE_EXAM_TAKEN_RESET } from '../Constants/userConstants';
import ExamCard from '../Exam/ExamCard'
import Loader from './Loader';
const ModuleCard = ({ id, title, description, img, link, category, shortDesc, questions }) => {
    const [open, setOpen] = useState(false);
    const [exam, setExam] = useState(false)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const {loading, isUpdated, error: examError} = useSelector(state => state.user)
    const handleOpen = () => setOpen(!open);
    const answerQuiz = () => setExam(!exam);
    const dispatch = useDispatch()
    const { success, error } = useSelector(state => state.myModules)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const saveAttempt = () =>{
        const data = {
            moduleId: id, 
            attempts: [
                {
                    score: score
                }
            ]
        }
        dispatch(updateExamTaken(data))
        // console.log(id)
    }
   
    const handleAnswer = (answer) => {
        if (answer === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };
    const onButtonClick = () => {
        dispatch(addUserCourse(id))
        // using Java Script method to get PDF file
        fetch(link).then((response) => {
            response.blob().then((blob) => {

                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = title + ".pdf";
                alink.click();
            });

        });
        toast.dark('Downloading PDF', { autoclose: 10000 })
    };
    useEffect(() => {
        if (success) {
            dispatch({ type: ADD_COURSE_RESET })
        }
        if (error) {
            dispatch(clearErrors())
        }
        if (examError){
            dispatch(clearExamError())
        }
        if (isUpdated){
            dispatch({type: UPDATE_EXAM_TAKEN_RESET})
            
        }
    }, [success, error, dispatch, isUpdated, examError])
    return (
        <>

            <Card variant="gradient" color="white" className="sm:w-96 mt-10 h-full flex flex-col justify-between">
                <CardHeader shadow={false} floated={false} className="h-96 transition duration-500 ease-in-out transform hover:scale-105 hover:cursor-pointer" onClick={handleOpen}>
                    <img
                        src={img && img}
                        alt="card-image"
                        className="h-full w-full object-contain bg-gray-100"
                    />

                </CardHeader>

                <CardBody className="flex-grow">

                    <div className="mb-10 flex flex-col">
                        <Typography color="blue-gray" className="font-medium">
                            <a href={link}>{title}</a>
                        </Typography>
                        <Typography>Click on the title to preview</Typography>
                        <div className="flex">
                            <Chip color="light-green" variant="gradient" className="mt-4 rounded-full" value={category.name ? category.name : category} />
                        </div>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                    >
                        {shortDesc}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 flex justify-between items-center gap-5">

                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        onClick={answerQuiz}
                    >
                        Answer quiz
                    </Button>
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        onClick={onButtonClick}
                        color="amber"
                        variant="gradient"
                    >
                        Download PDF
                    </Button>
                </CardFooter>
            </Card>
            <Dialog open={exam} handler={answerQuiz} className="max-h-[80vh] overflow-auto">
                <DialogHeader>Disaster Risk Reduction including Emergency Preparedness</DialogHeader>
                <DialogBody className="">
                
                {currentQuestionIndex >= questions.length ?<Typography variant="h1"> Your score: {score}/{questions.length}</Typography>: <ExamCard
                question={questions[currentQuestionIndex].text}
                answers={questions[currentQuestionIndex].answers}
                onAnswer={handleAnswer}
            />}
               
                </DialogBody>
                <DialogFooter className="space-x-2">
                {currentQuestionIndex >= questions.length ?
                <Button variant="gradient" color="amber" onClick={()=>{answerQuiz(); saveAttempt()}}>
                        Save
                    </Button>: ''}
                    <Button variant="gradient" color="amber" onClick={answerQuiz}>
                        Close
                    </Button>
                </DialogFooter>
            </Dialog>
            <Dialog open={open} handler={handleOpen} className="max-h-[80vh] overflow-auto">
                <DialogHeader>{title && title}</DialogHeader>
                <DialogBody className="">
                    <Card
                        className="h-[auto] w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90 mb-8"
                        onClick={handleOpen}
                    >
                        <img
                            alt="nature"
                            className="h-full w-full object-cover object-center"
                            src={img && img}
                        />
                    </Card>

                    <Typography className="font-normal">
                        {description && description}
                    </Typography>
                </DialogBody>
                <DialogFooter className="space-x-2">

                    <Button variant="gradient" color="amber" onClick={handleOpen}>
                        Close
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default ModuleCard