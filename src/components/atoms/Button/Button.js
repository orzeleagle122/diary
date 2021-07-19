import React from 'react';
import { StyledButton } from './Button.elements';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const Button = (props) => {
  return (
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  );
};

export default Button;
