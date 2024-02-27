import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer  } from './Reducers/userReducers';
import { checklistReducer } from './Reducers/checklistReducers';
import { moduleReducer, modulesDetailsReducer, modulesReducer, newModulesReducer } from './Reducers/moduleReducers';
const reducer = combineReducers({
    
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    checklist: checklistReducer,
    newModule: newModulesReducer,
    modules: modulesReducer,
    moduleDetails: modulesDetailsReducer,
    module: moduleReducer,
    

})

let initialState = {
    user:JSON.parse(sessionStorage.getItem('user'))||{},
    auth:JSON.parse(sessionStorage.getItem('user'))||{},
}

const middlware = [thunk]
const store = createStore(reducer, initialState, applyMiddleware(...middlware))

export default store;