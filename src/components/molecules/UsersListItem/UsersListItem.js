import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UsersListItem.elements';
import Button from 'components/atoms/Button/Button';

const UsersListItem = ({ usersData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
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
