import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_RESET,
    UPDATE_USER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_RESET,
    DELETE_USER_FAIL,
    CLEAR_ERRORS
} from '../Constants/userConstants'

import axios from 'axios'
import { authenticate, getToken, logout} from '../utils/helper'
import {toast} from 'react-toastify'
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/register`, {
            firstName: userData.get('firstName'),
            lastName: userData.get('lastName'),
            email: userData.get('email'),
            password: userData.get('password'),
            avatar: userData.getAll('avatar'),
            address: userData.get('street'),
            city: userData.get('city'),
            phoneNo: userData.get('phone'),
            postalCode: userData.get('postalCode'),
            country: userData.get('country')
        }, config)
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })
        toast.success('Registered successfully', {
            position: toast.POSITION.BOTTOM_RIGHT
        
        })

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
        toast.error("Registered failed",{
            position: toast.POSITION.BOTTOM_RIGHT
        
        })
    }
}

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            
        }
        
        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/login`, { email, password }, config)
        authenticate(data,dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        }), toast.success('Logged in', {
            position: toast.POSITION.BOTTOM_RIGHT
        }))
        


    } catch (error) {
        
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
        toast.error("Invalid email or password", {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
            
        }
      
        await axios.get(`${process.env.REACT_APP_API}/api/v1/logout`, config)
        logout(dispatch({ type: LOGOUT_SUCCESS }))
        


    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }

}
export const getUser = () => {
    return (dispatch) => {
        if (typeof window !== 'undefined') {
            if (sessionStorage.getItem('user')) {
                dispatch({type:'GET_USER_SUCCESS', payload: JSON.parse(sessionStorage.getItem('user'))});
            } else {
                return false;
            }
        }
    }
}
export const getProfile = () => async (dispatch) => {
    const config = {
        headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`,
            
        },
        
    }
    dispatch({ type: LOAD_USER_REQUEST })
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/me`, config)
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }

}

export const forgotPassword =  (formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/password/forgot`, formData, config)
      console.log(data.message)

      setLoading(false)
      toast.success(data.message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      navigate('/login')
    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS

    })
}
