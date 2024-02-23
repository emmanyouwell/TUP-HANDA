import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer  } from './Reducers/userReducers';
const reducer = combineReducers({
    
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,


})

let initialState = {
    user: {},
    auth: {},
}

const middlware = [thunk]
const store = createStore(reducer, initialState, applyMiddleware(...middlware))

export default store;