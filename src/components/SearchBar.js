import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/magnifying_glass.svg";

const SearchBar = ({ length, placeholder, value, handleSearch }) => {
  return (
    <StyledSearchBar length={length}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleSearch}
      />
      <SearchIcon />
    </StyledSearchBar>
  );
};

export default SearchBar;

export const StyledSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.length && props.length};
  height: 54px;
  min-height: 44px;
  min-width: 375px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 100px;
  background: #fafafa;
  input {
    width: 500px;
    border: none;
    background: #fafafa;
    font-family: Pretendard;
    font-size: 21px;
    font-weight: 400;
    :focus {
      outline: none;
    }
    line-height: 44px;
  }
`;
