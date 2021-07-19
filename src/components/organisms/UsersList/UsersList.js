import React, {useEffect, useState} from 'react';
import { users as usersData } from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.elements';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);
  useEffect(() => {
    setLoadingState(true);
    mockAPI()
        .then((data) => {
          setLoadingState(false);
          setUsers(data);
        })
        .catch((err) => console.log(err));
  }, []);
  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
      <ul>
        {users.map((item) => (
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
