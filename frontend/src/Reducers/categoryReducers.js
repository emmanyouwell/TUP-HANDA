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

export const categoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case ALL_CATEGORY_REQUEST:
        case ADMIN_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
                categories: []
            }
        case ALL_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload.categories,
                // productsCount: action.payload.productsCount,
                // resPerPage: action.payload.resPerPage,
                // filteredProductsCount: action.payload.filteredProductsCount
            }
        case ADMIN_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload.categories,
                categoryCount: action.payload.categoryCount,
                resPerPage: action.payload.resPerPage,
                filteredCategoriesCount: action.payload.filteredCategoriesCount

            }
        case ALL_CATEGORY_FAIL:
        case ADMIN_CATEGORY_FAIL:
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
            return state;
    }
}

export const categoryDetailsReducer = (state = { category: {} }, action) => {
    switch (action.type) {

        case CATEGORY_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CATEGORY_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                category: action.payload
            }

        case CATEGORY_DETAILS_FAIL:
            return {
                ...state,
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

export const newCategoriesReducer = (state = { category: {} }, action) => {
    switch (action.type) {
        case NEW_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case NEW_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                category: action.payload.category
            }
        case NEW_CATEGORY_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case NEW_CATEGORY_RESET:
            return {
                ...state,
                success: false
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

export const categoryReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_CATEGORY_REQUEST:
        case UPDATE_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }
        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_CATEGORY_FAIL:
        case UPDATE_CATEGORY_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_CATEGORY_RESET:
            return {
                ...state,
                isDeleted: false
            }
        case UPDATE_CATEGORY_RESET:
            return {
                ...state,
                isUpdated: false
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

export const restoreCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case RESTORE_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case RESTORE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                isRestored: action.payload
            }
        case RESTORE_CATEGORY_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case RESTORE_CATEGORY_RESET:
            return {
                ...state,
                isRestored: false
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

export const archiveCategoryReducer = (state = {archivedCategories: []}, action) => {
    switch (action.type) {
        case ARCHIVED_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
                archivedCategories: []
            }
        case ARCHIVED_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                archivedCategories: action.payload.archivedCategories,
                archivedCategoryCount: action.payload.archivedCategoryCount,
                resPerPage: action.payload.resPerPage,
                filteredArchivedCategoriesCount: action.payload.filteredArchivedCategoriesCount
            }
        case ARCHIVED_CATEGORY_FAIL:
            return {
                ...state,
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