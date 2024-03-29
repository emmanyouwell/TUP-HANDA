import {
    ALL_MODULES_REQUEST,
    ALL_MODULES_SUCCESS,
    ALL_MODULES_FAIL,
    MODULE_DETAILS_REQUEST,
    MODULE_DETAILS_SUCCESS,
    MODULE_DETAILS_FAIL,
    ADMIN_MODULES_REQUEST,
    ADMIN_MODULES_SUCCESS,
    ADMIN_MODULES_FAIL,
    NEW_MODULE_REQUEST,
    NEW_MODULE_SUCCESS,
    NEW_MODULE_RESET,
    NEW_MODULE_FAIL,
    DELETE_MODULE_REQUEST,
    DELETE_MODULE_SUCCESS,
    DELETE_MODULE_RESET,
    DELETE_MODULE_FAIL,
    UPDATE_MODULE_REQUEST,
    UPDATE_MODULE_SUCCESS,
    UPDATE_MODULE_RESET,
    UPDATE_MODULE_FAIL,
    RESTORE_MODULE_REQUEST,
    RESTORE_MODULE_SUCCESS,
    RESTORE_MODULE_RESET,
    RESTORE_MODULE_FAIL,
    ARCHIVED_MODULE_REQUEST,
    ARCHIVED_MODULE_SUCCESS,
    ARCHIVED_MODULE_FAIL,
    ALL_MODULES_DOWNLOADED_REQUEST,
    ALL_MODULES_DOWNLOADED_SUCCESS,
    ALL_MODULES_DOWNLOADED_FAIL,
    CLEAR_ERRORS,

} from '../Constants/moduleConstants';

import axios from 'axios'
import { authenticate, getToken, logout } from '../utils/helper'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const createModules = (moduleData) => async (dispatch) => {
    
    try {
        dispatch({type: NEW_MODULE_REQUEST})
        const config = {
            headers: {
                
                'Authorization': `Bearer ${getToken()}`
            }
        }

        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/admin/module/new`, moduleData, config)
        dispatch({
            type: NEW_MODULE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_MODULE_FAIL,
            payload: error.response.data.message
        })

    }
}

export const getModules = (currentPage=1, keyword='', category='') => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${getToken()}`
            }
        }
        dispatch({
            type: ALL_MODULES_REQUEST
        })
        let link = ''

        
        if (category && category !== 'all'){
            link = `${process.env.REACT_APP_API}/api/v1/modules?page=${currentPage}&keyword=${keyword}&category=${category}`
        }
        else{
            link = `${process.env.REACT_APP_API}/api/v1/modules?page=${currentPage}&keyword=${keyword}`
        }
        
        const { data } = await axios.get(link, config)

        dispatch({
            type: ALL_MODULES_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_MODULES_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getModuleDetails = (id) => async (dispatch) => {
    try{
        dispatch({ type: MODULE_DETAILS_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/module/${id}`)
        dispatch({
            type: MODULE_DETAILS_SUCCESS,
            payload: data.modules
        })
    }catch(error){
        dispatch({
            type: MODULE_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const updateModule = (id, productData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_MODULE_REQUEST })
        const config = {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
            
        }
        const { data } = await axios.put(`${process.env.REACT_APP_API}/api/v1/admin/module/${id}`, productData, config)
        dispatch({
            type: UPDATE_MODULE_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: UPDATE_MODULE_FAIL,
            payload: error.response.data.message
        })
    }
}
export const deleteModule = (id) => async (dispatch) => {
    try {
        dispatch({type: DELETE_MODULE_REQUEST})
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${getToken()}`
            }
        }
        const { data } = await axios.delete(`${process.env.REACT_APP_API}/api/v1/admin/module/${id}`, config)
        dispatch({type: DELETE_MODULE_SUCCESS, payload: data.success})
       
    } catch (error) {
        dispatch({
            type: DELETE_MODULE_FAIL,
            payload: error.response.data.message 
        })

    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS

    })
}

export const getAdminModules = (currentPage = 1, keyword = '', category = '') => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${getToken()}`
            }
        }
        dispatch({
            type: ADMIN_MODULES_REQUEST
        })
        let link = ''

        
        if (category && category !== 'all'){
            link = `${process.env.REACT_APP_API}/api/v1/admin/modules/all/?page=${currentPage}&keyword=${keyword}&category=${category}`
        }
        else{
            link = `${process.env.REACT_APP_API}/api/v1/admin/modules/all/?page=${currentPage}&keyword=${keyword}`
        }
        
        const { data } = await axios.get(link, config)

        dispatch({
            type: ADMIN_MODULES_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADMIN_MODULES_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getArchivedModules = (currentPage = 1, keyword = '', category='') => async (dispatch) => {
    try {
        dispatch({ type: ARCHIVED_MODULE_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        }
        let link = ''
        if (category && category !== 'all'){
            link = `${process.env.REACT_APP_API}/api/v1/admin/modules/archive/?page=${currentPage}&keyword=${keyword}&category=${category}`
        }
        else{
            link = `${process.env.REACT_APP_API}/api/v1/admin/modules/archive/?page=${currentPage}&keyword=${keyword}`
        }
        
        const { data } = await axios.get(link, config)
        // console.log(data)
        dispatch({
            type: ARCHIVED_MODULE_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        console.log(error.message)
        dispatch({
            type: ARCHIVED_MODULE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const restoreArchivedModules = (id) => async (dispatch) => {
    try {
        dispatch({ type: RESTORE_MODULE_REQUEST })
        const config = {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }
        const { data } = await axios.delete(`${process.env.REACT_APP_API}/api/v1/admin/modules/restore/${id}`, config)
        console.log(data)
        dispatch({
            type: RESTORE_MODULE_SUCCESS,
            payload: data.success
        })
    }
    catch (error) {
        dispatch({
            type: RESTORE_MODULE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getAllDownloadedModules = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_MODULES_DOWNLOADED_REQUEST });
  
      const config = {
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
      };
  
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/admin/modules/downloaded`, config);
  
      dispatch({
        type: ALL_MODULES_DOWNLOADED_SUCCESS,
        payload: data.data
      });
    } catch (error) {
      dispatch({
        type: ALL_MODULES_DOWNLOADED_FAIL,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      });
    }
  };