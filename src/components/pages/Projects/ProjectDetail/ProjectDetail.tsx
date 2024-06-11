import React from "react";
import "./ProjectDetail.css";
import { useParams } from "react-router-dom";
import { projects } from "../../../../utils/projects";
import ImageSlider from "../ImageSlider/ImageSlider";

export default function ProjectDetail() {
  const params = useParams<{ projectId: string }>();

  const filteredProject = projects.filter(
    (project) => project.id === params.projectId
  );

  const { title, link, stack, company, description, images } =
    filteredProject[0];

  return (
    <>
      <div className="projectDetail">
        <div>
          <h1>{title}</h1>
          <h6>
            Project Type:{" "}
            {company === "Freelance"
              ? "Freelance Project"
              : `Developed while working at ${company}`}
          </h6>
          <h6>Technologies used:</h6>
          {stack.map((s) => (
            <h6>-{s}</h6>
          ))}
          {/* <h6>Tech Stack: {stack.toString()}</h6> */}
          {link !== undefined && (
            <h6>
              <a href={link} target="_blank" rel="noreferrer">
                Visit the website{" "}
              </a>
            </h6>
          )}
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      <>{images != null && <ImageSlider images={images!} />}</>
    </>
  );
}
