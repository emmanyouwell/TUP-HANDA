import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_SUCCESS,
    CATEGORY_DETAILS_FAIL,
    ADMIN_CATEGORY_REQUEST,
    ADMIN_CATEGORY_SUCCESS,
    ADMIN_CATEGORY_FAIL,
    NEW_CATEGORY_REQUEST,
    NEW_CATEGORY_SUCCESS,
    NEW_CATEGORY_RESET,
    NEW_CATEGORY_FAIL,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_RESET,
    DELETE_CATEGORY_FAIL,
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_RESET,
    UPDATE_CATEGORY_FAIL,
    RESTORE_CATEGORY_REQUEST,
    RESTORE_CATEGORY_SUCCESS,
    RESTORE_CATEGORY_RESET,
    RESTORE_CATEGORY_FAIL,
    ARCHIVED_CATEGORY_REQUEST,
    ARCHIVED_CATEGORY_SUCCESS,
    ARCHIVED_CATEGORY_FAIL,
    CLEAR_ERRORS,

} from '../Constants/categoryConstants';

import axios from 'axios'
import { authenticate, getToken, logout } from '../utils/helper'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const createCategory = (categoryData) => async (dispatch) => {

    try {
        dispatch({ type: NEW_CATEGORY_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        }

        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/admin/category/new`, categoryData, config)
        dispatch({
            type: NEW_CATEGORY_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_CATEGORY_FAIL,
            payload: error.response.data.message
        })

    }
}

export const getCategory = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_CATEGORY_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/categories`)
        dispatch({
            type: ALL_CATEGORY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_CATEGORY_FAIL,
            payload: error.response.data.message
        })
    }
}



export const getCategoryDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_DETAILS_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/${id}`)
        dispatch({
            type: CATEGORY_DETAILS_SUCCESS,
            payload: data.category
        })
    } catch (error) {
        dispatch({
            type: CATEGORY_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const updateCategory = (id, categoryData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_CATEGORY_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }

        }
        const { data } = await axios.put(`${process.env.REACT_APP_API}/api/v1/admin/category/${id}`, categoryData, config)
        dispatch({
            type: UPDATE_CATEGORY_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: UPDATE_CATEGORY_FAIL,
            payload: error.response.data.message
        })
    }
}
export const archiveCategory = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_CATEGORY_REQUEST })
        const config = {
            headers: {

                'Authorization': `Bearer ${getToken()}`
            }
        }
        const { data } = await axios.delete(`${process.env.REACT_APP_API}/api/v1/admin/category/${id}`, config)
        dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data.success })

    } catch (error) {
        dispatch({
            type: DELETE_CATEGORY_FAIL,
            payload: error.response.data.message
        })

    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS

    })
}

export const getAdminCategory = (currentPage = 1, keyword = '') => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        }
        dispatch({
            type: ADMIN_CATEGORY_REQUEST
        })
        let link = ''

        link = `${process.env.REACT_APP_API}/api/v1/admin/category/all/?page=${currentPage}&keyword=${keyword}`


        const { data } = await axios.get(link, config)

        dispatch({
            type: ADMIN_CATEGORY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADMIN_CATEGORY_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getArchivedCategories = (currentPage = 1, keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: ARCHIVED_CATEGORY_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        }
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/admin/category/archive/?page=${currentPage}&keyword=${keyword}`, config)
        // console.log(data)
        dispatch({
            type: ARCHIVED_CATEGORY_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        console.log(error.message)
        dispatch({
            type: ARCHIVED_CATEGORY_FAIL,
            payload: error.response.data.message
        })
    }
}

export const restoreArchivedCategory = (id) => async (dispatch) => {
    try {
        dispatch({ type: RESTORE_CATEGORY_REQUEST })
        const config = {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }
        const { data } = await axios.delete(`${process.env.REACT_APP_API}/api/v1/admin/category/restore/${id}`, config)
        console.log(data)
        dispatch({
            type: RESTORE_CATEGORY_SUCCESS,
            payload: data.success
        })
    }
    catch (error) {
        dispatch({
            type: RESTORE_CATEGORY_FAIL,
            payload: error.response.data.message
        })
    }
}