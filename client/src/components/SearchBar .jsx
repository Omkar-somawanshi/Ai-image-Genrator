import React from 'react';
import styled from 'styled-components';
import { SearchOutlined } from '@mui/icons-material';

const SearchBarContainer = styled.div`
  max-width: 550px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.text_secondary + '90'};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  gap: 6px;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  color: inherit;
  background: transparent;
  font-size: 16px;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchOutlined />
      <StyledInput placeholder="Search with prompt or name..." />
    </SearchBarContainer>
  );
};

export default SearchBar;
