import { atom } from "recoil";

export const State = atom({
  key: "state",
  default: "",
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
