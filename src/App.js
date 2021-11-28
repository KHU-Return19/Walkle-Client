import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faSearch,
  faCheck,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/App.css";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

library.add(
  faMapMarkerAlt,
  faSearch,
  faCheck,
  faComment,
  faBookmark,
  faPaperPlane
);

const App = () => {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
};

export default App;
