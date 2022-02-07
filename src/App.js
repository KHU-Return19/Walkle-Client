import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./styles/App.css";

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
