import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageInput = ({ imagePreview, onChangeFile }) => {
  return (
    <>
      <CoverImageContainer>
        <CoverImage src={imagePreview} />
        <ImageInputWrapper>
          <FontAwesomeIcon className="Icon" icon={["far", "file-image"]} />
          <Image
            type="file"
            id="cover-image"
            name="image"
            onChange={onChangeFile}
          />
        </ImageInputWrapper>
      </CoverImageContainer>
    </>
  );
};

export default ImageInput;

const CoverImageContainer = styled.div`
  width: 100vw;
  height: 360px;
  background: #f1f1f1;
`;

const CoverImage = styled.img`
  width: 100vw;
  height: 360px;
  object-fit: contain;
`;

const ImageInputWrapper = styled.label`
  position: absolute;
  left: 72%;
  top: 334px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background: rgba(49, 51, 56, 0.5);
  border-radius: 100px;
  cursor: pointer;
  .Icon {
    color: #ffffff;
    font-size: 20px;
  }
`;

const Image = styled.input`
  display: none;
`;
