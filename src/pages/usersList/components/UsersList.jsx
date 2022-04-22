import React, {useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux';

import {downloadUsersAction} from '../../../redux/actions/usersActions';
import { UsersCard } from './UsersCard';

export const UsersList = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      const downloadUsers = ()=> dispatch(downloadUsersAction());
      downloadUsers();
    }, []);
    
    const users = useSelector(state => state.users.users);
    console.log(users);
    return (

        <div className="container-xxl">
            <h2 className="text-center my-5">User List</h2>
            <table className="table table-striped ">
                <thead className="bg-danger table-dark">
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    { users.length === 0 ? null:(
                        users.map(user => (
                            <UsersCard   key={user.id}
                                            user={user}
                                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
  )
}