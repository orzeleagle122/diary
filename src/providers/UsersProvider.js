import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data }) => setUsers(data.students))
      .catch((err) => console.log(err));
  }, []);

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
