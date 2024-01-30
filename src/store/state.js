import { atom, selector, selectorFamily } from "recoil";
import axios from "axios";
require("dotenv").config();

const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

export const CreatorsState = atom({
  key: "CreatorsState",
  default: [],
});

export const ProjectsState = atom({
  key: "ProjectsState",
  default: [],
});

export const searchContentState = atom({
  key: "searchContentState",
  default: "",
});

export const latitudeState = atom({
  key: "latitudeState",
  default: "",
});

export const longitudeState = atom({
  key: "longitudeState",
  default: "",
});

export const regionState = atom({
  key: "regionState",
  default: "",
});

export const selectedObjectState = atom({
  key: "selectedObjectState",
  default: {},
});

export const selectedCreatorState = atom({
  key: "selectedCreatorState",
  default: {},
});

export const selectedProjectState = atom({
  key: "selectedProjectState",
  default: {},
});

export const userIDState = atom({
  key: "userIDState",
  default: {},
});

export const userProfileState = atom({
  key: "userProfileState",
  default: {
    user_uid: "",
    nickname: "",
    job: "",
    sns_link: "",
    intro: "",
    career: "",
    age: "",
    gender: "",
    picture: null,
  },
});

// async selector
export const currentUserProfile = selector({
  key: "CurrentUserProfile",
  get: async ({ get }) => {
    const response = await axios.get(`${SERVER_ADDRESS}/api/profile`, {
      nickname: get(userProfileState).nickname,
    });
    return response.profile;
  },
});

export const PostListSelector = selector({
  key: "PostListSelector",
  get: async () => {
    const response = await axios.get(
      `http://${SERVER_ADDRESS}/api/community/posts`,
      userIDState
    );
    return response.data.communities;
  },
});

export const profileHashtagListState = atom({
  key: "profileHashtagListState",
  default: [],
});

export const profileFieldTagListState = atom({
  key: "profileFieldTagListState",
  default: [],
});

export const fieldTagListState = atom({
  key: "fieldTagListState",
  default: [
    "디자인",
    "기획",
    "개발",
    "마케팅",
    "음악",
    "커피",
    "비즈니스",
    "글쓰기",
    "교육",
    "운동",
    "무역",
    "로컬사업",
  ],
});

export const bookmarkListState = atom({
  key: "bookmarkListState",
  default: [],
});

export const locationListState = atom({
  key: "locationListState",
  default: [],
});
