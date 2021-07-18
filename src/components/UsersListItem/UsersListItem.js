import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ usersData: { average, name, attendance = '0%' } }) => {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <div>
        <button>X</button>
      </div>
    </li>
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
