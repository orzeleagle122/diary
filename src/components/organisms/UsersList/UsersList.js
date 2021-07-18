import React from 'react';
import { users } from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.elements';

const UsersList = (props) => {
  return (
    <Wrapper>
      <ul>
        {users.map((usersData) => (
          <UsersListItem key={usersData.name} usersData={usersData} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UsersList;
