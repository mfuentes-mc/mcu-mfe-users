import {
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    START_DOWNLOAD_USERS,
    DOWNLOAD_USERS_SUCCESS,
    DOWNLOAD_USERS_FAILURE
} from '../types';

import clientAxios from '../../services/config/axios';
import Swal from 'sweetalert2';

export function createNewUserAction(user){
    return async (dispatch)=>{
        dispatch(addUser(patient));
        try{
            //insert on api
            await clientAxios.post('/users', user);
            
            //si todo sale bien, actualizar el state 
            dispatch(addUserSuccess(user));
            Swal.fire(
                'Success',
                'User added successfully',
                'success'
            );
        }catch(err){
            console.log(err);
            dispatch(addUserFailure(true));
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    }
}

const addUser = () =>({
    type: ADD_USER,
    payload:true
});

//si el paaiente se crea correctamente

const addUserSuccess = (user) =>({
    type: ADD_USER_SUCCESS,
    payload: user
});
//si hubo un error

const addUserFailure = state =>({
    type: ADD_USER_FAILURE,
    payload: state
});


//Funcion que descarga los pacientes
export function downloadUsersAction(){
    return async (dispatch)=>{
        dispatch(startDownloadUsers());
        try{
            const response = await clientAxios.get('/users');
            dispatch(downloadUsersSuccess(response.data));
        }catch(err){
            console.log(err);
            dispatch(downloadUsersFailure());
        }
    }
}
const startDownloadUsers = () =>({
    type: START_DOWNLOAD_USERS,
    payload:true
});

const downloadUsersSuccess = users =>({
    type: DOWNLOAD_USERS_SUCCESS,
    payload: users
});

const   downloadUsersFailure = () =>({
    type: DOWNLOAD_USERS_FAILURE,
    payload: true
});