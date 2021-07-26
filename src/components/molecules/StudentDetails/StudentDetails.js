import React from 'react';
import { Title } from '../../atoms/Title/Title';

const StudentDetails = ({ student: { name, average, attendance } }) => {
  return (
    <div>
      <Title>{name}</Title>
      <p>{average}</p>
      <p>{attendance}</p>
    </div>
  );
};

export default StudentDetails;
