import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
    let currentPage = window.location.pathname;
    return (
        <StyledHeader>
            <Link to="/">
            </Link>
            <nav classname="header-nav">
                <Link to ="/walklemap" className={(currentPage === "/walklemap" ? 'current-page' : 'nav-element')}>워클맵</Link>
                <Link to ="/creators" className={(currentPage === "/creators" ? 'current-page' : 'nav-element')}>크리에이터</Link>
                <Link to ="/projects"className={(currentPage === "/projects" ? 'current-page' : 'nav-element')}>프로젝트</Link>
                <Link to ="/community"className={(currentPage === "/community" ? 'current-page' : 'nav-element')}>커뮤니티</Link>
            </nav>
            <Link to ="/addproject">
                <AddProjectBtn>+ 프로젝트 생성</AddProjectBtn>
            </Link>
            <div className="where-I-am">
                <FontAwesomeIcon icon="map-marker-alt"/>
                경기도 안산시 상록구
            </div>
            <Link to ="profile">
                <ProfileImgContainer></ProfileImgContainer>
            </Link>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #DBDBDB;
    padding: 1rem 1rem 1rem 0rem;
    width: 100%;
    font-size: 0.9rem;
    font-weight: 500;
    font-family: "Noto Sans KR", sans-serif;
    a { text-decoration: none; }
    .current-page {
        color: #7054FF;
        padding: 1rem;
    }
    .nav-element {
        color: #313338;
        padding: 1rem;
    }
`;

const AddProjectBtn = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    border: none;
    border-radius: 25px;
    width: 140px;
    height: 35px;
    font-size: 0.9rem;
    color: #FFFFFF;
    background: #7054FF;
    :hover {
        opacity: 0.8;
        transition: .3s;
    }
    
`;

const ProfileImgContainer = styled.div`
    width: 30px;
    height: 30px;
    background: #DBDBDB;
    border-radius: 25px;
`;