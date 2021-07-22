import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useParams } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import axios from 'axios';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get('/students')
      .then(({ data }) => setUsers(data.users))
      .then(() => console.log('dddupuupaa'))
      .catch((err) => console.log(err));
  }, [users]);
  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
