import React from "react";
// import "./Projects.css";
import ProjectListItem from "./ProjectListItem/ProjectListItem";
import { projects } from "../../../utils/projects";

export default function Projects() {
  return (
    <div>
      {projects
        .sort((a, b) => (a.year < b.year ? 1 : -1))
        .map((project, index) => (
          <ProjectListItem project={project} key={index} />
        ))}
    </div>
  );
}
