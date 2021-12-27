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

export const selectedProjectState = atom({
  key: "selectedProjectState",
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
