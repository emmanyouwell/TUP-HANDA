import {
    ITEM_LIST_REQUEST,
    ITEM_LIST_SUCCESS,
    ITEM_LIST_FAIL
} from '../Constants/checklistConstants'
import axios from 'axios'

export const getItems = () => async (dispatch)=> {
    try {
        dispatch({ type: ITEM_LIST_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/items`)
        
        dispatch({
            type: ITEM_LIST_SUCCESS,
            payload: data.list
        })
        console.log(data.list)
        
        
    } catch (error) {
        dispatch({
            type: ITEM_LIST_FAIL,
            payload: error.response.data.message})
    }
}
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS

    })
}