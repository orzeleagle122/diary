import React from 'react';
import { StyledButton } from './Button.elements';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const Button = () => {
  return (
    <StyledButton>
      <DeleteIcon />
    </StyledButton>
  );
};

export default Button;
