import React from 'react'
import ExamCard from './ExamCard'
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Chip,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,

} from '@material-tailwind/react';
const ExamPage = () => {
    const questions = [
        {
            text: 'What is the capital of France?',
            answers: ['Paris', 'London', 'Berlin', 'Madrid'],
            correctAnswer: 'Paris',
        },
        {
            text: 'Who is CEO of Tesla?',
            answers: ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Tony Stark'],
            correctAnswer: 'Elon Musk',
        },
        {
            text: 'The iPhone was created by which company?',
            answers: ['Apple', 'Intel', 'Amazon', 'Microsoft'],
            correctAnswer: 'Apple',
        },
        {
            text: 'How many Harry Potter books are there?',
            answers: ['1', '4', '6', '7'],
            correctAnswer: '7',
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [readMore, setReadMore] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const handleReadMore = () => setReadMore(!readMore);
    const handleAnswer = (answer) => {
        if (answer === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    // if (currentQuestionIndex >= questions.length) {
    //     return <div className="sm:container sm:mx-auto p-10 min-h-screen"><Typography variant="h1"> Your score: {score}</Typography></div>;
    // }

    return (
        <div className="sm:container sm:mx-auto p-10 min-h-screen">
            <Card variant="gradient" color="white" className="sm:w-96 mt-10 h-full flex flex-col justify-between">
                <CardHeader shadow={false} floated={false} className="h-96 transition duration-500 ease-in-out transform hover:scale-105 hover:cursor-pointer" onClick={handleReadMore}>
                    <img
                        src="https://res.cloudinary.com/dtrr0ihcb/image/upload/v1709619986/TUPHANDA_ASSETS/gvs7mi75awddrhuqrp5o.png"
                        alt="card-image"
                        className="h-full w-full object-contain bg-gray-100"
                    />

                </CardHeader>
                <CardBody className="flex-grow">
                    <div className="mb-10 flex flex-col">
                        <Typography color="blue-gray" className="font-medium">
                            <a href="#">Disaster Risk Reduction including Emergency Preparedness</a>
                        </Typography>
                        <Typography>Click on the title to preview</Typography>
                        <div className="flex">
                            <Chip color="light-green" variant="gradient" className="mt-4 rounded-full" value="Category" />
                        </div>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                    >
                       Disaster Risk Reduction including Emergency Preparedness" emphasizes proactive measures to mitigate disaster impact. 
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 flex justify-between items-center gap-5">

                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        onClick={handleOpen}
                    >
                        Answer quiz
                    </Button>
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        
                        color="amber"
                        variant="gradient"
                    >
                        Download PDF
                    </Button>
                </CardFooter>
            </Card>
            <Dialog open={open} handler={handleOpen} className="max-h-[80vh] overflow-auto">
                <DialogHeader>Disaster Risk Reduction including Emergency Preparedness</DialogHeader>
                <DialogBody className="">
                {currentQuestionIndex >= questions.length ?<Typography variant="h1"> Your score: {score}/{questions.length}</Typography>: <ExamCard
                question={questions[currentQuestionIndex].text}
                answers={questions[currentQuestionIndex].answers}
                onAnswer={handleAnswer}
            />}
               
                </DialogBody>
                <DialogFooter className="space-x-2">

                    <Button variant="gradient" color="amber" onClick={handleOpen}>
                        Close
                    </Button>
                </DialogFooter>
            </Dialog>
            
            <Dialog open={readMore} handler={handleReadMore} className="max-h-[80vh] overflow-auto">
                <DialogHeader> Disaster Risk Reduction including Emergency Preparedness" emphasizes proactive measures to mitigate disaster impact. </DialogHeader>
                <DialogBody className="">
                    <Card
                        className="h-[auto] w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90 mb-8"
                        onClick={handleReadMore}
                    >
                        <img
                            alt="nature"
                            className="h-full w-full object-cover object-center"
                            src="https://res.cloudinary.com/dtrr0ihcb/image/upload/v1709619986/TUPHANDA_ASSETS/gvs7mi75awddrhuqrp5o.png"
                        />
                    </Card>

                    <Typography className="font-normal">
                    Disaster Risk Reduction including Emergency Preparedness" is a comprehensive program designed to minimize the impact of disasters through proactive measures and preparedness strategies. It encompasses a range of initiatives, including risk assessment methodologies, the establishment of robust early warning systems, evacuation planning, and community resilience-building efforts.
                    </Typography>
                </DialogBody>
                <DialogFooter className="space-x-2">

                    <Button variant="gradient" color="amber" onClick={handleReadMore}>
                        Close
                    </Button>
                </DialogFooter>
            </Dialog>

        </div>
    );
}

export default ExamPage