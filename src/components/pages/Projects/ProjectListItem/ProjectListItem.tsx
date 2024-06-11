import React from "react";
import "./ProjectListItem.css";
import { ProjectType } from "../../../../utils/projects";
import { Link } from "react-router-dom";

type ProjectListItemProps = {
  project: ProjectType;
  key: React.Key;
};

export default function ProjectListItem({ project }: ProjectListItemProps) {
  const { title, company, type, id, year } = project;

  return (
    <div className="listItem">
      <h2>
        <Link to={`/projects/${id}`}>{title}</Link>
      </h2>
      <h5>
        {company}, {year}
      </h5>
      <h5>{type}</h5>
    </div>
  );
}
