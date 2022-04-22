import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {UsersScreen} from '../pages/usersList/UsersScreen';
import {UsersEdit} from '../pages/usersEdit/UsersEdit';
import {UsersNew} from '../pages/usersNew/UsersNew';
import {Provider} from "react-redux";
import store from "../redux/store/store";

const UsersRouters = () => {
    return (
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<UsersScreen/>}/>
                    <Route path="/users" element={<UsersScreen/>}/>
                    <Route path="/users/new" element={<UsersNew/>}/>
                    <Route path="/users/edit/:id" element={<UsersEdit/>}/>
                </Routes>
            </Provider> 
    )
}
export default UsersRouters;