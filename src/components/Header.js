import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
    return (
        <StyledHeader>
            <Link to="/">
            </Link>
            <nav classname="header-nav">
                <Link to ="/walklemap">워클맵</Link>
                <Link to ="/creators">크리에이터</Link>
                <Link to ="/projects">프로젝트</Link>
                <Link to ="/community">커뮤니티</Link>
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
    padding-right: 1rem;
    width: 100%;
    font-size: 0.8rem;
    font-family: "Noto Sans KR", sans-serif;
    text-decoration: none;
    a:link, a:visited { color: darkgrey; text-decoration: none; padding: 1rem;}
`;

const AddProjectBtn = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    border: none;
    border-radius: 25px;
    width: 100px;
    height: 25px;
    font-size: 4px;
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