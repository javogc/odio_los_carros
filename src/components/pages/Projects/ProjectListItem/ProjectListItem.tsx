import React from "react";
import { ProjectType } from "../../../../utils/projects";
import { Link } from "react-router-dom";

type ProjectListItemProps = {
  project: ProjectType;
  key: React.Key;
};

export default function ProjectListItem({ project }: ProjectListItemProps) {
  const { title, company, type, id, year } = project;

  return (
    <div className="text-center text-lato p-[30px] hover:bg-[#dcdad736] cursor-pointer listItem">
      <h2>
        <Link
          to={`/projects/${id}`}
          className="text-odioWhite font-robotoMono underline font-bold text-[3rem] cursor-auto hover:text-odioHover hover:cursor-inherit"
        >
          {title}
        </Link>
      </h2>
      <h5 className="font-robotoMono text-odioWhite">
        {company}, {year}
      </h5>
      <h5 className="font-robotoMono text-odioWhite">{type}</h5>
    </div>
  );
}
