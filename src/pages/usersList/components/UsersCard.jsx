import React from 'react'

export const UsersCard = ({user}) => {
const {fullName, address, gender,status} = user;
  return (
      <tr>
            <td>{fullName}</td>
            <td>{address}</td>
            <td>{gender}</td>
            <td>{status}</td>
      </tr>
  )
}
