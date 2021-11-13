import React from 'react'
import Header from "../components/Header"
import styled from "styled-components";
import Text from "../elements/Text.js";
import Grid from "../elements/Grid.js";
import Image from "../elements/Images.js";
import SearchBar from "../components/SearchBar";

//프로젝트 정렬을 해보려고 했는데 하려면 4개가 필요하더라고요 
//주석쓰면서 생각이 난건데 그냥 4개 여기서 쓰고 자리배치 맞춰볼걸 그랬어요
//마무리하고 일어나서 하려니까 왜 놓친게 계속 보이지??? 왼쪽 여백추가할게요
// 정렬하는거는 아예 감도 못잡겠어서 마감임박순, 조회순 이거는 안 건드렸어요

const ProjectPage = (props) => {

  return (
    <>
      <Header  />
      <SearchBar />
      <React.Fragment>
        <Grid
          width="274px"
          height="300px"
          margin="10px 5px 50px 0"
          bg="#f9fafa"
          border-radius= "5%"
          overflow= "hidden"
          _onClick={() => {
            document.location.href = `/detail/${props.ProjectId}`;
          } }
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
    </React.Fragment></>
  );
};

ProjectPage.defaultProps = {
  prj_img: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d583a565-afaa-4819-af46-f5bfdda677cd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211113T184000Z&X-Amz-Expires=86400&X-Amz-Signature=ae943c8a788529f748a42968e9823c05efcd270b98ecd691e05272c7a904243d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22",
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