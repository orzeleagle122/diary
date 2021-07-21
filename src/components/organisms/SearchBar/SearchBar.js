import React from 'react';
import { Input } from '../../atoms/Input/Input';
import { SearchBarWrapper, StatusInfo } from './SearchBar.elements';

const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
      <p>
        <strong>Teacher</strong>
      </p>
    </StatusInfo>
    <Input />
  </SearchBarWrapper>
);

export default SearchBar;
