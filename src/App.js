import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styles/App.css";

library.add(faMapMarkerAlt, faSearch);

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
