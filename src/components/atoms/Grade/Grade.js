import React from 'react';
import { Wrapper } from './Grade.elements';

const Grade = ({ average }) => {
  return <Wrapper average={average}>{average}</Wrapper>;
};

export default Grade;
