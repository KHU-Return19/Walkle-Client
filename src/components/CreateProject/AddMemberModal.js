import React from "react";
import styled from "styled-components";
import StyledButton from "../Button";
import { ButtonContainer } from "../Carousel/SetNameJobSlide";
import { StyledSearchBar } from "../SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Creators } from "../../store/fakeCreators";
import ModalCreatorCard from "./ModalCreatorCard";

const AddMemberModal = ({
  searchContent,
  handleSearch,
  isModalOpen,
  setIsModalOpen,
  currentCreator,
  setCurrentCreator,
  memberList,
  setMemberList,
}) => {
  let filteredCreators =
    searchContent !== "" &&
    Creators.filter(
      (creator) =>
        creator.name.toLowerCase().includes(searchContent.toLowerCase()) ===
        true
    );
  const handleApprove = (creator) => {
    let newList = memberList;
    if (memberList.find((member) => member.id === creator.id) === undefined)
      newList = memberList.concat(creator);
    setMemberList(newList);
  };
  return (
    <>
      <ModalWrapper>
        <ModalBackground className={!isModalOpen && "invisible"}>
          <ModalOutlay>
            <ModalHeader />
            <ModalInner>
              <SearchBar>
                <SearchInput
                  type="text"
                  placeholder="멤버 이름 검색"
                  value={searchContent}
                  onChange={handleSearch}
                />
                <FontAwesomeIcon icon="search" />
              </SearchBar>
              <SearchResultContainer>
                {filteredCreators &&
                  filteredCreators.map((creator) => (
                    <ModalCreatorCard
                      creator={creator}
                      currentCreator={currentCreator}
                      setCurrentCreator={setCurrentCreator}
                    />
                  ))}
              </SearchResultContainer>
            </ModalInner>
            <ModalFooter>
              <ButtonContainer>
                <CancelButton onClick={() => setIsModalOpen(false)}>
                  취소
                </CancelButton>
                <ApproveButton onClick={() => handleApprove(currentCreator)}>
                  확인
                </ApproveButton>
              </ButtonContainer>
            </ModalFooter>
          </ModalOutlay>
        </ModalBackground>
      </ModalWrapper>
    </>
  );
};

export default AddMemberModal;

const ModalWrapper = styled.div`
  .invisible {
    display: none;
  }
`;

const ModalBackground = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(49, 51, 56, 0.5);
  z-index: 999;
  overflow: hidden;
`;

const ModalOutlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 500px;
  height: 608px;
  border-radius: 20px;
  background-color: #ffffff;
`;

const ModalHeader = styled.div`
  height: 64px;
  border-bottom: 1px solid #f1f1f1;
`;

const ModalInner = styled.div`
  height: 413px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const SearchBar = styled(StyledSearchBar)`
  width: 390px;
  height: 50px;
  margin: 30px 0px 0px 10px;
  padding: 0px 20px;
  font-size: 18px;
`;

const SearchInput = styled.input`
  height: 18px;
`;

const SearchResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ModalFooter = styled.div`
  height: 131px;
`;

const ApproveButton = styled(StyledButton)`
  font-family: Pretendard;
  font-size: 21px;
  line-height: 21px;
  width: 117px;
  height: 61px;
  padding: 20px 40px;
  margin: 20px 10px;
`;

const CancelButton = styled(ApproveButton)`
  background: #313338;
`;
