import React, { createContext, useState } from 'react';
import { users as usersData } from 'data/users';

export const UserContext = createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (value) => {
    const newUser = {
      name: value.name,
      attendance: value.attendance,
      average: value.average,
    };

    setUsers([newUser, ...users]);
  };
  return (
    <UserContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UsersProvider;
