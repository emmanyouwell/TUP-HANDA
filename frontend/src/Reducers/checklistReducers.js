import {
    ITEM_LIST_REQUEST,
    ITEM_LIST_SUCCESS,
    ITEM_LIST_FAIL,
    CLEAR_ERRORS
} from '../Constants/checklistConstants'

export const checklistReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case ITEM_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                items: []
            }
        case ITEM_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case ITEM_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}