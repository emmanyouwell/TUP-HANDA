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
    CLEAR_ERRORS,

} from '../Constants/moduleConstants';

export const modulesReducer = (state = { modules: [] }, action) => {
    switch (action.type) {
        case ALL_MODULES_REQUEST:
        case ADMIN_MODULES_REQUEST:
            return {
                ...state,
                loading: true,
                modules: []
            }
        case ALL_MODULES_SUCCESS:
            return {
                ...state,
                loading: false,
                modules: action.payload.modules,
                // productsCount: action.payload.productsCount,
                // resPerPage: action.payload.resPerPage,
                // filteredProductsCount: action.payload.filteredProductsCount
            }
        case ADMIN_MODULES_SUCCESS:
            return {
                ...state,
                loading: false,
                modules: action.payload.modules,
                modulesCount: action.payload.modulesCount,
                resPerPage: action.payload.resPerPage,
                filteredModulesCount: action.payload.filteredModulesCount

            }
        case ALL_MODULES_FAIL:
        case ADMIN_MODULES_FAIL:
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

export const modulesDetailsReducer = (state = { modules: {} }, action) => {
    switch (action.type) {

        case MODULE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case MODULE_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                modules: action.payload
            }

        case MODULE_DETAILS_FAIL:
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

export const newModulesReducer = (state = { modules: {} }, action) => {
    switch (action.type) {
        case NEW_MODULE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case NEW_MODULE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                modules: action.payload.modules
            }
        case NEW_MODULE_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case NEW_MODULE_RESET:
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

export const moduleReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_MODULE_REQUEST:
        case UPDATE_MODULE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_MODULE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }
        case UPDATE_MODULE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_MODULE_FAIL:
        case UPDATE_MODULE_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_MODULE_RESET:
            return {
                ...state,
                isDeleted: false
            }
        case UPDATE_MODULE_RESET:
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

export const restoreModuleReducer = (state = {}, action) => {
    switch (action.type) {
        case RESTORE_MODULE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case RESTORE_MODULE_SUCCESS:
            return {
                ...state,
                loading: false,
                isRestored: action.payload
            }
        case RESTORE_MODULE_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case RESTORE_MODULE_RESET:
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

export const archiveModuleReducer = (state = {archivedModules: []}, action) => {
    switch (action.type) {
        case ARCHIVED_MODULE_REQUEST:
            return {
                ...state,
                loading: true,
                archivedModules: []
            }
        case ARCHIVED_MODULE_SUCCESS:
            return {
                ...state,
                loading: false,
                archivedModules: action.payload.archivedModules,
                archivedModulesCount: action.payload.archivedModulesCount,
                resPerPage: action.payload.resPerPage,
                filteredArchivedModulesCount: action.payload.filteredArchivedModulesCount
            }
        case ARCHIVED_MODULE_FAIL:
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