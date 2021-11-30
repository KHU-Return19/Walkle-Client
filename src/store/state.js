import { atom } from "recoil";

export const State = atom({
  key: "state",
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

export const selectedCreatorState = atom({
  key: "selectedCreatorState",
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
