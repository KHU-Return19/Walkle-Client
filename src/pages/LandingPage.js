import React from "react";
import Welcome from "../components/Welcome";
import Header from "../components/Header";

const LandingPage = ({ userId }) => {
  return (
    <>
      <Header userId={userId} />
      <Welcome />
    </>
  );
};

export default LandingPage;
