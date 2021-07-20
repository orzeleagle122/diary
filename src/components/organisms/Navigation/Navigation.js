import React from 'react';
import {
  Logo,
  StyledLink,
  Wrapper,
} from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink exact to="/">
        Dashboard
      </StyledLink>
      <StyledLink exact to="/add-user">
        Add user
      </StyledLink>
      <StyledLink exact to="/">
        Settings
      </StyledLink>
      <StyledLink exact to="/">
        Logout
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
