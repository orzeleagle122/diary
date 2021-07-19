import React, { useState } from 'react';
import { users as usersData } from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.elements';

const UsersList = (props) => {
  const [user, setUser] = useState(usersData);

  const deleteUser = (name) => {
    console.log(user);
    const filteredUsers = user.filter((item) => name !== item.name);
    setUser(filteredUsers);
    console.log(filteredUsers);
  };

  return (
    <Wrapper>
      <ul>
        {usersData.map((item) => (
          <UsersListItem
            key={item.name}
            usersData={item}
            deleteUser={deleteUser}
          />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UsersList;
