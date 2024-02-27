import {
    ALL_VIDEOS_REQUEST,
    ALL_VIDEOS_SUCCESS,
    ALL_VIDEOS_FAIL,
    VIDEO_DETAILS_REQUEST,
    VIDEO_DETAILS_SUCCESS,
    VIDEO_DETAILS_FAIL,
    ADMIN_VIDEOS_REQUEST,
    ADMIN_VIDEOS_SUCCESS,
    ADMIN_VIDEOS_FAIL,
    NEW_VIDEO_REQUEST,
    NEW_VIDEO_SUCCESS,
    NEW_VIDEO_RESET,
    NEW_VIDEO_FAIL,
    DELETE_VIDEO_REQUEST,
    DELETE_VIDEO_SUCCESS,
    DELETE_VIDEO_RESET,
    DELETE_VIDEO_FAIL,
    UPDATE_VIDEO_REQUEST,
    UPDATE_VIDEO_SUCCESS,
    UPDATE_VIDEO_RESET,
    UPDATE_VIDEO_FAIL,
    CLEAR_ERRORS,

} from '../Constants/videoConstants';
import axios from 'axios'


import { authenticate, getToken, logout } from '../utils/helper'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
export const getVideos = () => async (dispatch) => {
    try{
        dispatch({ type: ALL_VIDEOS_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/admin/videos`)
        dispatch({
            type: ALL_VIDEOS_SUCCESS,
            payload: data
        })
    }catch (error){
        dispatch({
            type: ALL_VIDEOS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const createVideos = (formData) => async (dispatch) => {
    try{
        dispatch({ type: NEW_VIDEO_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        }
        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/admin/video/new`, formData, config)
        dispatch({
            type: NEW_VIDEO_SUCCESS,
            payload: data
        })
    }
    catch(error){
        dispatch({
            type: NEW_VIDEO_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getSingleVideo = (id) => async (dispatch) => {
    try{
        dispatch({ type: VIDEO_DETAILS_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/admin/videos/${id}`)
        dispatch({
            type: VIDEO_DETAILS_SUCCESS,
            payload: data.videos
        })
    }catch(error){
        dispatch({
            type: VIDEO_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const updateVideo = (id, videoData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_VIDEO_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
            
        }
        const { data } = await axios.put(`${process.env.REACT_APP_API}/api/v1/admin/videos/${id}`, videoData, config)
       
        dispatch({
            type: UPDATE_VIDEO_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: UPDATE_VIDEO_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS

    })
}