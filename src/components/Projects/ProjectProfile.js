import React from "react";
import { Projects } from "../../store/fakeCreators";
import Header from "../Header";

const ProjectProfile = ({ match, history }) => {
  const project = Projects.find(
    (project) => String(project.id) === match.params.id
  );
  return (
    <>
      <Header />
      {project.id}
      {project.name}
      {project.director}
      <button onClick={() => history.goBack()}>Back</button>
    </>
  );
};

export default ProjectProfile;
