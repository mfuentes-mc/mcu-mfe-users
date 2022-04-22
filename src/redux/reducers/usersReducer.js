import {
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    START_DOWNLOAD_USERS,
    DOWNLOAD_USERS_SUCCESS,
    DOWNLOAD_USERS_FAILURE
} from '../types';

const initialState = {
    users: [],
    error:null,
    loading:false
}


export default function (state = initialState, action) {
    switch(action.type){
        case START_DOWNLOAD_USERS:
        case ADD_USER:{
            return {
                ...state,
                loading:action.payload
            }
        }
        case ADD_USER_SUCCESS:{
            return {
                ...state,
                loading:false,
                users: [...state.users, action.payload]
            }
        }
        case DOWNLOAD_USERS_FAILURE:
        case ADD_USER_FAILURE:{
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        }
        case DOWNLOAD_USERS_SUCCESS:{
            return {
                ...state,
                loading:false,
                error:false,
                users: action.payload
            }
        }
        default:{
            return state;
        }
    }
}