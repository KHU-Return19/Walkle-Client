import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ReactComponent as ShadowMoly } from "../assets/moly_shadow.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  locationListState,
  profileFieldTagListState,
  profileHashtagListState,
} from "../store/state";
import EditProfileForm from "../components/Profile/EditProfile/EditProfileForm";

const EditProfilePage = () => {
  const [introduce, setIntroduce] = useState("");
  const [photo, setPhoto] = useState("");
  const [nickname, setNickname] = useState("");
  const [job, setJob] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [hashtag, setHashtag] = useState("");
  const fieldtagList = useRecoilValue(profileFieldTagListState);
  const hashtagList = useRecoilValue(profileHashtagListState);
  const [isValidNickname, setIsValidNickname] = useState();
  const [isValidInstagramUrl, setIsValidInstagramUrl] = useState();
  const [location, setLocation] = useRecoilState(locationListState);
  return (
    <>
      <Header />
      <IconContainer>
        <ShadowMoly className="moly" />
        <OuterCircle>
          <InnerCircle />
        </OuterCircle>
      </IconContainer>
      <EditProfileForm />
      <Footer />
    </>
  );
};

export default EditProfilePage;

const IconContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 63px;
  .moly {
    margin-bottom: 4px;
  }
`;
const OuterCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background: #f5f3ff;
  border-radius: 100px;
`;
const InnerCircle = styled(OuterCircle)`
  width: 6px;
  height: 6px;
  background: #7054ff;
`;
