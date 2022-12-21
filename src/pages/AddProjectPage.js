import React, { useState } from "react";
import styled from "styled-components";
import AddMemberModal from "../components/CreateProject/AddMemberModal";
import AddProjectForm from "../components/CreateProject/AddProjectForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
const AddProjectPage = () => {
  const [projectTitle, setProjectTitle] = useState();
  const [coverImage, setCoverImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [memberList, setMemberList] = useState([]);
  const [isConstantRecruit, setIsConstantRecruit] = useState(false);
  const [recruitStartDate, setRecruitStartDate] = useState();
  const [recruitEndDate, setRecruitEndDate] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [currentCreator, setCurrentCreator] = useState();
  const [simpleIntro, setSimpleIntro] = useState("");
  const [detailedIntro, setDetailedIntro] = useState();
  const [hashtag, setHashtag] = useState("");
  const [hashtagList, setHashtagList] = useState([]);
  const [myFieldTagList, setMyFieldTagList] = useState([]);
  const handleInput = (type) => async (event) => {
    const targetValue = event.currentTarget.value;
    switch (type) {
      default:
        break;
      case "title":
        setProjectTitle(targetValue);
        break;
      case "startDate":
        setRecruitStartDate(targetValue);
        break;
      case "endDate":
        setRecruitEndDate(targetValue);
        break;
      case "simpleIntro":
        setSimpleIntro(targetValue);
        break;
      case "hashtag":
        setHashtag(targetValue);
        break;
    }
  };
  const handleCheck = () => {
    setIsConstantRecruit(!isConstantRecruit);
    setRecruitStartDate("");
    setRecruitEndDate("");
  };
  const handleSearch = (event) => {
    const targetVal = event.currentTarget.value;
    setSearchContent(targetVal);
  };
  const handleClick = (creator) => {
    const newList = memberList.filter((member) => member.id !== creator.id);
    setMemberList(newList);
  };
  const handleSubmitTag = async (val) => {
    const regExpTag = /^#([\w|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|]{1,15})/g;
    const targetVal = val.replace(/\s/gi, "");
    let newTagList = hashtagList;
    console.log(hashtagList);
    if (targetVal !== "") {
      const newTag = targetVal.substring(1);
      regExpTag.test(targetVal) &&
        (newTagList = await hashtagList.concat(newTag));
    }
    setHashtagList(newTagList);
  };
  const onCheckEnter = async (e) => {
    const targetVal = e.currentTarget.value;
    if (e.key === "Enter" && hashtagList.length < 3) {
      e.preventDefault();
      handleSubmitTag(targetVal);
      setHashtag("");
    }
  };
  const onChangeFile = (e) => {
    e.preventDefault();
    let image = e.target.files[0];
    let reader = new FileReader();
    setCoverImage(image);
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };
  const handleTagClick = (type) => async (e) => {
    const targetVal = e.currentTarget.id;
    if (type === "hashtag") {
      const newTagList = hashtagList.filter((tag) => tag !== targetVal);
      setHashtagList(newTagList);
    }
    if (type === "fieldtag") {
      if (myFieldTagList.length === 3) {
        const newTagList = myFieldTagList.filter(
          (element) => element !== targetVal
        );
        setMyFieldTagList(newTagList);
      } else if (
        myFieldTagList.findIndex((element) => element === targetVal) !== -1
      ) {
        const newTagList = myFieldTagList.filter(
          (element) => element !== targetVal
        );
        setMyFieldTagList(newTagList);
      } else {
        const newTagList = myFieldTagList.concat(targetVal);
        setMyFieldTagList(newTagList);
      }
    }
  };
  return (
    <>
      <Header />
      <AddProjectFormContainer>
        <AddProjectForm
          imagePreview={imagePreview}
          projectTitle={projectTitle}
          memberList={memberList}
          handleInput={handleInput}
          handleCheck={handleCheck}
          handleClick={handleClick}
          handleTagClick={handleTagClick}
          onCheckEnter={onCheckEnter}
          onChangeFile={onChangeFile}
          isConstantRecruit={isConstantRecruit}
          recruitStartDate={recruitStartDate}
          recruitEndDate={recruitEndDate}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          simpleIntro={simpleIntro}
          setDetailedIntro={setDetailedIntro}
          hashtag={hashtag}
          hashtagList={hashtagList}
          myFieldTagList={myFieldTagList}
          setMyFieldTagList={setMyFieldTagList}
        />
      </AddProjectFormContainer>
      {isModalOpen && (
        <AddMemberModal
          setIsModalOpen={setIsModalOpen}
          searchContent={searchContent}
          handleSearch={handleSearch}
          currentCreator={currentCreator}
          setCurrentCreator={setCurrentCreator}
          memberList={memberList}
          setMemberList={setMemberList}
        />
      )}
      <Footer />
    </>
  );
};

export default AddProjectPage;

const AddProjectFormContainer = styled.div``;
