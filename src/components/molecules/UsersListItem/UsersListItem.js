import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Name, Attendance, Person } from './UsersListItem.elements';
import Button from 'components/atoms/Button/Button';
import Grade from '../../atoms/Grade/Grade';

const UsersListItem = ({ usersData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <div>
        <Grade average={average} />
      </div>
      <Person>
        <Name>{name}</Name>
        <Attendance>attendance: {attendance}</Attendance>
      </Person>
      <div>
        <Button />
      </div>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  usersData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
