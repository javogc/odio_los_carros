import React from "react";
import "./ProjectListItem.css";

type ProjectListItemProps = {
  titulo: string;
  company: string;
  stack: string[];
};

export default function ProjectListItem({
  titulo,
  company,
  stack,
}: ProjectListItemProps) {
  return (
    <div className="listItem">
      <h2>{titulo}</h2>
      <h5>{company}</h5>
      <p>{stack.toString()}</p>
    </div>
  );
}
