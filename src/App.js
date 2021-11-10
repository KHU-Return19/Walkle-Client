import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faSearch,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/App.css";

library.add(faMapMarkerAlt, faSearch, faCheck);

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
