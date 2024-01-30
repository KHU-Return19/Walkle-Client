import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/magnifying_glass.svg";

const SearchBar = ({ placeholder, value, handleSearch }) => {
  return (
    <StyledSearchBar>
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
  width: 656px;
  height: 64px;
  padding-left: 30px;
  padding-right: 30px;
  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 100px;
  background: #fafafa;
  input {
    width: 550px;
    border: none;
    background: #fafafa;
    color: #313338;
    font-family: Pretendard;
    font-size: 21px;
    font-weight: 400;
    :focus {
      outline: none;
    }
    line-height: 44px;
    placeholder {
      color: #8b8b8b;
    }
  }
`;
