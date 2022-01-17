import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WriteModal = ({ isModalOpen, setIsModalOpen, name, fileName }) => {
  const placeholder = `${name} 크리에이터님, 오늘은 어떤 이야기를 나눠볼까요?`;
  const handleModalClose = () => {
    document.body.style.overflow = "unset";
    setIsModalOpen(false);
  };
  return (
    <>
      <ModalWrapper>
        <ModalBackground className={!isModalOpen && "invisible"}>
          <ModalOutlay>
            <FontAwesomeIcon
              icon="times"
              className="close-button"
              onClick={() => handleModalClose()}
            />
            <ModalHeader>
              <ProfileImg />
              <Name>{name}</Name>
            </ModalHeader>
            <ModalInner>
              <AddImageBar>
                <FileName>{fileName}</FileName>
                <AddImageIcon>
                  <ImageInput type="file" />
                  <FontAwesomeIcon className="Icon" icon="images" />
                </AddImageIcon>
              </AddImageBar>
              <PostContent placeholder={placeholder} />
            </ModalInner>
            <ModalFooter>
              <SubmitButton>게시물 올리기</SubmitButton>
            </ModalFooter>
          </ModalOutlay>
        </ModalBackground>
      </ModalWrapper>
    </>
  );
};

export default WriteModal;

const ModalWrapper = styled.div`
  .invisible {
    display: none;
  }
`;

const ModalBackground = styled.div`
  display: flex;
  box-sizing: border-box;
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(139, 139, 139, 0.2);
  backdrop-filter: blur(15px);
  z-index: 999;
  overflow: hidden;
`;

const ModalOutlay = styled.div`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 764px;
  height: 627px;
  background: #ffffff;
  border: 1px solid #fafafa;
  box-sizing: border-box;
  border-radius: 10px;
  .close-button {
    position: absolute;
    top: 28px;
    left: 707px;
    color: #8b8b8b;
    font-size: 21px;
    cursor: pointer;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  margin: 40px 45px 0px 45px;
  height: 30px;
`;

const ProfileImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background: #d2d2d2;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin-left: 8px;
`;

const ModalInner = styled.div`
  margin: 18px 45px 0px 45px;
`;

const AddImageBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 18px;
  width: 638px;
  height: 24px;
  background: #f5f3ff;
  border-radius: 10px;
`;

const ImageInput = styled.input`
  display: none;
`;

const AddImageIcon = styled.label`
  cursor: pointer;
  .Icon {
    color: #7054ff;
    font-size: 20px;
  }
`;

const FileName = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #7054ff;
`;

const PostContent = styled.textarea`
  width: 634px;
  height: 308px;
  margin: 40px 20px 0px 20px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #313338;
  border: none;
  resize: none;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #d2d2d2;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 56px 0px 45px 0px;
`;

const SubmitButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 236px;
  width: 202px;
  height: 26px;
  background: #7054ff;
  border-radius: 30px;
  color: #ffffff;
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
`;
