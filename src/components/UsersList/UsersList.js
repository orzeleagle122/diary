import React from 'react';
import { users } from '../../data/users';
import UsersListItem from '../UsersListItem/UsersListItem';

const UsersList = (props) => {
  return (
    <div>
      <ul>
        {users.map((usersData) => (
          <UsersListItem key={usersData.name} usersData={usersData} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
