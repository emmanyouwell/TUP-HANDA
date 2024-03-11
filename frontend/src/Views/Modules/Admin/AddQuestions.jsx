import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateModule, clearErrors } from '../../../Actions/modulesActions';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Formik, Field, Form, FieldArray } from 'formik';
import Loader from '../../../Components/Loader';
import { UPDATE_MODULE_RESET } from '../../../Constants/moduleConstants';

const initialValues = {
    questions: [
        {
            text: '',
            answers: [''],
            correctAnswer: '',
        },
    ],
};

import {
    TrashIcon,
    XMarkIcon
} from '@heroicons/react/20/solid'
import { toast } from 'react-toastify';

const AddQuestions = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    const { loading, error: updateError, isUpdated } = useSelector(state => state.module)
    const navigate = useNavigate()
    useEffect(() => {
        if (updateError) {
            dispatch(clearErrors())
        }
        if (isUpdated) {
            navigate('/admin/modules')
            dispatch({ type: UPDATE_MODULE_RESET })
            toast.success('Exam created successfully')
        }
    }, [dispatch, id, updateError, isUpdated])
    return (
        <>
            <>

                <div className="overflow-x-hidden overflow-y-hidden w-full">

                    <div className="relative min-h-screen p-10 flex flex-col justify-center items-center">
                        <div className="absolute inset-0 filter opacity-30 brightness-75 bg-tuphanda bg-no-repeat bg-cover bg-center bg-fixed"></div>
                        <div className="container mx-auto lg:p-10 lg:w-[50%] z-10">
                            {loading ? <Loader /> : (<>
                                <h1 className="font-black text-4xl mb-5 text-center">Create Exam</h1>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={(values, {setSubmitting}) => {
                                        // console.log(values)
                                           dispatch(updateModule(id,values));
                                        setSubmitting(false)
                                    }}
                                >
                                    {({ values }) => (
                                        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                            <FieldArray name="questions">
                                                {({ push, remove }) => (
                                                    <div className="mb-2">
                                                        {values.questions.map((question, index) => (
                                                            <div key={index} className="mb-4 bg-gray-100 p-5 rounded-md">
                                                                <div className="flex justify-between items-center mb-3">
                                                                    <label htmlFor="Question" className="block text-lg  font-medium text-gray-900">
                                                                        Question # {index + 1}
                                                                    </label>
                                                                    <button type="button" onClick={() => remove(index)} className="bg-red-700 text-white p-2 whitespace-nowrap text-sm rounded-md ml-2"><TrashIcon className='h-4 w-4'/></button>
                                                                </div>

                                                                <Field name={`questions.${index}.text`} placeholder="Question Text" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4" />



                                                                <FieldArray name={`questions.${index}.answers`}>
                                                                    {({ push: pushAnswer, remove: removeAnswer }) => (
                                                                        <div>
                                                                            <label htmlFor="Answers" className="block text-sm font-medium leading-6 text-gray-900">
                                                                                Choices
                                                                            </label>
                                                                            {question.answers.map((answer, answerIndex) => (

                                                                                <div key={answerIndex} className="mb-2 flex justify-between items-center">
                                                                                   
                                                                                    <Field name={`questions.${index}.answers.${answerIndex}`} placeholder="Answer" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                    <button type="button" onClick={() => removeAnswer(answerIndex)} className="bg-yellow-900 text-white p-2 whitespace-nowrap rounded-md ml-2"><XMarkIcon className="h-4 w-4" /></button>
                                                                                </div>
                                                                            ))}
                                                                            <button type="button" onClick={() => pushAnswer('')} className="bg-blue-500 text-white text-sm p-2 mb-2 rounded-md">Add choice</button>
                                                                        </div>
                                                                    )}
                                                                </FieldArray>
                                                                <label htmlFor="Correct answer" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Correct Answer
                                                                </label>
                                                                <Field name={`questions.${index}.correctAnswer`} placeholder="Correct Answer" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4" />

                                                            </div>
                                                        ))}
                                                        {/* <button type="button" onClick={() => push({ text: '', answers: [''], correctAnswer: '' })} className="bg-blue-500 text-white p-2 rounded-md">
                                                            Add Question
                                                        </button> */}
                                                        <div className="flex justify-between">
                                                            <button type="button" onClick={() => push({ text: '', answers: [''], correctAnswer: '' })} className="bg-blue-500 text-white p-2 rounded-md">
                                                                Add Question
                                                            </button>
                                                            <div>
                                                            <Link to="/admin/modules">
                                                            <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 mr-2">Cancel</button>
                                                            </Link>
                                                            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">Submit</button>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                )}
                                            </FieldArray>

                                            {/* <div className="justify-end flex">
                                                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">Submit</button>
                                            </div> */}
                                        </Form>
                                    )}
                                </Formik>
                            </>)
                            }
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}

export default AddQuestions;