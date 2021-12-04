import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = (props) => {
  return (
    <StyledSearchBar length={props.length}>
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <FontAwesomeIcon icon="search" onClick={props.onClick} />
    </StyledSearchBar>
  );
};

export default SearchBar;

export const StyledSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => (props.length === "short" ? "390px" : "33vw")};
  height: ${(props) => (props.length === "short" ? "54px" : "6vh")};
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
