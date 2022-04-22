import React from 'react'
import { UsersList } from './components/UsersList'

export const UsersScreen = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Users List</h1>
          </div>
          <div className="col">
            <a 
              href="/users/new"
              className="btn d-block d-md-inline-block px-md-5 btn-primary"
            >New User
            </a>
          </div>
        </div>
      </div>
        <hr />
        <UsersList/>
    </div>
  )
}
