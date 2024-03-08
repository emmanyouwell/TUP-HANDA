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
    ARCHIVED_VIDEO_REQUEST,
    ARCHIVED_VIDEO_SUCCESS,
    ARCHIVED_VIDEO_FAIL,
    RESTORE_VIDEO_REQUEST,
    RESTORE_VIDEO_SUCCESS,
    RESTORE_VIDEO_RESET,
    RESTORE_VIDEO_FAIL,
    CLEAR_ERRORS,

} from '../Constants/videoConstants';

export const videosReducer = (state = { videos: [] }, action) => {
    switch (action.type) {
        case ALL_VIDEOS_REQUEST:
        case ADMIN_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true,
                videos: []
            }
        case ALL_VIDEOS_SUCCESS:
            return {
                ...state,
                loading: false,
                videos: action.payload.videos,
                videosCount: action.payload.videosCount,
                resPerPage: action.payload.resPerPage,
                filteredVideosCount: action.payload.filteredVideosCount
            }
        case ADMIN_VIDEOS_SUCCESS:
            return {
                ...state,
                loading: false,
                videos: action.payload.videos,
                videosCount: action.payload.videosCount,
                resPerPage: action.payload.resPerPage,
                filteredVideosCount: action.payload.filteredVideosCount

            }
        case ALL_VIDEOS_FAIL:
        case ADMIN_VIDEOS_FAIL:
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

export const videoDetailsReducer = (state = { videos: {} }, action) => {
    switch (action.type) {

        case VIDEO_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case VIDEO_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                videos: action.payload
            }

        case VIDEO_DETAILS_FAIL:
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

export const newVideosReducer = (state = { videos: {} }, action) => {
    switch (action.type) {
        case NEW_VIDEO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case NEW_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                videos: action.payload.videos
            }
        case NEW_VIDEO_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case NEW_VIDEO_RESET:
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

export const videoReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_VIDEO_REQUEST:
        case UPDATE_VIDEO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }
        case UPDATE_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_VIDEO_FAIL:
        case UPDATE_VIDEO_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_VIDEO_RESET:
            return {
                ...state,
                isDeleted: false
            }
        case UPDATE_VIDEO_RESET:
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

export const restoreVideoReducer = (state = {}, action) => {
    switch (action.type) {
        case RESTORE_VIDEO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case RESTORE_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                isRestored: action.payload
            }
        case RESTORE_VIDEO_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case RESTORE_VIDEO_RESET:
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

export const archiveVideoReducer = (state = {archivedVideos: []}, action) => {
    switch (action.type) {
        case ARCHIVED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true,
                archivedVideos: []
            }
        case ARCHIVED_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                archivedVideos: action.payload.videos,
                archivedVideosCount: action.payload.videosCount,
                resPerPage: action.payload.resPerPage,
                filteredArchivedVideosCount: action.payload.filteredVideosCount
            }
        case ARCHIVED_VIDEO_FAIL:
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