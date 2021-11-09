import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = (props) => {
    return (
        <StyledSearchBar>
            <input type="text" placeholder="프로젝트명 or 태그 검색하기" />
            <FontAwesomeIcon icon="search" onclick={props} />
        </StyledSearchBar>
    );
};

export default SearchBar;

const StyledSearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 650px;
    height: 65px;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 30px;
    background: #fafafa;
    input {
        width: 500px;
        border: none;
        background: #fafafa;
        font-size: 1rem;
        font-weight: 600;
        :focus {
            outline: none;
        }
    }
`;
