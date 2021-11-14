import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { src, width, height, margin } = props;

  const styles = {
    src: src,
    width: width,
    height: height,
    margin: margin,
  };
  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  src: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d583a565-afaa-4819-af46-f5bfdda677cd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211113T184000Z&X-Amz-Expires=86400&X-Amz-Signature=ae943c8a788529f748a42968e9823c05efcd270b98ecd691e05272c7a904243d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22",
  width: "100%",
  height: "300px",
  margin: "0",
};

const ImageDefault = styled.div`
  top: 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  margin: ${(props) => props.margin};
  border-radius: 5%;
  overflow: hidden;
`;

export default Image;
