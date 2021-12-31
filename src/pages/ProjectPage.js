import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import ProjectCard from "../components/Projects/ProjectCard";
import SearchBar from "../components/SearchBar";
import { Projects } from "../store/fakeCreators";

const ProjectPage = () => {
  const [searchContent, setSearchContent] = useState("");
  const handleSearch = (e) => {
    const targetValue = e.currentTarget.value;
    setSearchContent(targetValue);
  };
  return (
    <>
      <Header />
      <PageWrapper>
        <SearchBarContainer>
          <SearchBar
            value={searchContent}
            placeholder={"프로젝트명 or 태그 검색하기"}
            handleSearch={handleSearch}
          />
        </SearchBarContainer>
        <RecommentContainer />
        <FilterBox>
          <OnGoingFilter>
            <OnGoingCheckbox type="checkbox" />
            <FilterLabelText>진행중인 프로젝트만 보기</FilterLabelText>
          </OnGoingFilter>
          <TimeFilterSelector>
            <RecentFilter>
              <FilterIndicator />
              <SubFilterLabelText>최신순</SubFilterLabelText>
            </RecentFilter>
            <NearEndFilter>
              <FilterIndicator />
              <SubFilterLabelText>마감임박순</SubFilterLabelText>
            </NearEndFilter>
          </TimeFilterSelector>
        </FilterBox>
        <ProjectsContainer>
          {Projects.map((project) => (
            <ProjectCard />
          ))}
        </ProjectsContainer>
      </PageWrapper>
    </>
  );
};

export default ProjectPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBarContainer = styled.div`
  margin: 56px auto;
`;

const RecommentContainer = styled.div`
  width: 100vw;
  height: 508px;
  background: #c4c4c4;
`;

const FilterBox = styled.div`
  width: 1352px;
  display: flex;
  justify-content: space-between;
  margin: 92px auto 28px auto;
`;

const OnGoingFilter = styled.div`
  width: 186px;
  height: 20px;
  display: flex;
`;

const OnGoingCheckbox = styled.input`
  height: 20px;
`;

const FilterLabelText = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400px;
  padding-left: 8px;
`;

const TimeFilterSelector = styled.div`
  width: 146px;
  height: 16px;
  display: flex;
`;

const RecentFilter = styled.div`
  display: flex;
`;

const FilterIndicator = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 100px;
  margin-top: 6px;
  background-color: #8b8b8b;
`;

const SubFilterLabelText = styled(FilterLabelText)`
  color: #8b8b8b;
  padding-left: 6px;
`;

const NearEndFilter = styled(RecentFilter)`
  padding-left: 13px;
`;

const ProjectsContainer = styled.div`
  width: 1380px;
  display: flex;
  flex-flow: row wrap;
  margin: auto;
`;

/*
import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Text from "../elements/Text.js";
import Grid from "../elements/Grid.js";
import Image from "../elements/Images.js";
import SearchBar from "../components/SearchBar";
import { StyledText } from "../elements/Text.js";

const ProjectPage = (props) => {
  return (
    <>
      <Header />
      <SearchBar />
      <React.Fragment>
        <Grid
          width="274px"
          height="300px"
          margin="10px 5px 50px 0"
          bg="#f9fafa"
          border-radius="5%"
          overflow="hidden"
          _onClick={() => {
            document.location.href = `/detail/${props.ProjectId}`;
          }}
        >
          <Image src={props.prj_img} width="100%" height="200px" />
          <Grid height="97px" padding="0 5%">
            <div
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "272px",
              }}
            >
              <Text color="#A1A1A1" margin="14px 0px 0px" size="13px">
                {props.prj_writer}
              </Text>
              <ListName>{props.prj_name}</ListName>
            </div>
          </Grid>
        </Grid>

        <ProjectCard>
          <Image src={props.prj_img} width="100%" height="200px" />
          <ProjectInfo width="30%">
            <InfoContainer>
              <StyledText>{props.prj_writer}</StyledText>
              <ListName>{props.prj_name}</ListName>
            </InfoContainer>
          </ProjectInfo>
        </ProjectCard>
      </React.Fragment>
    </>
  );
};

ProjectPage.defaultProps = {
  prj_img:
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d583a565-afaa-4819-af46-f5bfdda677cd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211113T184000Z&X-Amz-Expires=86400&X-Amz-Signature=ae943c8a788529f748a42968e9823c05efcd270b98ecd691e05272c7a904243d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22",
  prj_name: "Project1",
  prj_writer: "user id",
  new: false,
};

const ListName = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #4e4e4e;
  margin: 3px 0 0 0;
  height: 20px;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  width: 274px;
`;

export default ProjectPage;

//참고용
const ProjectCard = styled.div`
  width: 300px;
  height: 300px;
  margin: 10px 5px 50px 0;
  bg: #7054ff;
  border-radius: 5%;
  overflow: hidden;
`;

const ProjectInfo = styled.div`
  height: 97px;
  padding: 0 5%;
  background: #ffffff;
`;

const InfoContainer = styled.div`
  overflow: hidden;
  textoverflow: ellipsis;
  whitespace: nowrap;
  width: 272px;
`;
*/
