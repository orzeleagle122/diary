import React from 'react';
import { Title } from '../../atoms/Title/Title';
import { Wrapper } from './ErrorMessge.styles';
import PropTypes from 'prop-types';
const defaultErrorMessage =
  'Something went wrong. Please try again, or contact our support.';
const ErrorMessge = ({ message = defaultErrorMessage }) => {
  return (
    <Wrapper>
      <Title>Oops!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

ErrorMessge.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessge;
