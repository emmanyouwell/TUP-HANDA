import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer, userDepartmentReducer, userCourseReducer, addUserCourse  } from './Reducers/userReducers';
import { checklistReducer } from './Reducers/checklistReducers';
import { archiveModuleReducer, moduleReducer, modulesDetailsReducer, modulesReducer, newModulesReducer, restoreModuleReducer } from './Reducers/moduleReducers';
import { newVideosReducer, videoDetailsReducer, videosReducer, videoReducer, restoreVideoReducer, archiveVideoReducer } from './Reducers/videoReducer';
import { archiveCategoryReducer, categoriesReducer, categoryDetailsReducer, categoryReducer, newCategoriesReducer, restoreCategoryReducer} from './Reducers/categoryReducers';
const reducer = combineReducers({
    
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    userDepartment: userDepartmentReducer,
    userCourse: userCourseReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    myModules: addUserCourse,
    
    checklist: checklistReducer,

    newModule: newModulesReducer,
    modules: modulesReducer,
    moduleDetails: modulesDetailsReducer,
    module: moduleReducer,
    resModule: restoreModuleReducer,
    archiveModule: archiveModuleReducer,
    
    newVideo: newVideosReducer,
    videoDetails: videoDetailsReducer,
    videos: videosReducer,
    video: videoReducer,
    resVideo: restoreVideoReducer,
    archiveVideo: archiveVideoReducer,

    categories: categoriesReducer,
    categoryDetails: categoryDetailsReducer,
    newCategory: newCategoriesReducer,
    category: categoryReducer,
    resCategory: restoreCategoryReducer,
    archiveCategory: archiveCategoryReducer

})

let initialState = {
    user: sessionStorage.getItem('user') && sessionStorage.getItem('user') !== "undefined" ? JSON.parse(sessionStorage.getItem('user')) : {},
    auth: sessionStorage.getItem('user') && sessionStorage.getItem('user') !== "undefined" ? JSON.parse(sessionStorage.getItem('user')) : {},
}

const middlware = [thunk]
const store = createStore(reducer, initialState, applyMiddleware(...middlware))

export default store;