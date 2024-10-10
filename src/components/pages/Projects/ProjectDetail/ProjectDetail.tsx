import React from "react";
// import "./ProjectDetail.css";
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
      <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-5">
        <div>
          <h1 className="text-4xl">{title}</h1>
          <h6 className="mt-8">
            Project Type:{" "}
            {company === "Freelance"
              ? "Freelance Project"
              : `Developed while working at ${company}`}
          </h6>
          <h6 className="mt-4 mb-2">Technologies used:</h6>
          {stack.map((s) => (
            <h6>-{s}</h6>
          ))}
          {/* <h6>Tech Stack: {stack.toString()}</h6> */}
          {link !== undefined && (
            <h6 className="mt-2 ">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="hover:color-HoveronHover"
              >
                Visit the website{" "}
              </a>
            </h6>
          )}
        </div>
        <div className="md:w-1/2">
          <p>{description}</p>
        </div>
      </div>
      <>{images != null && <ImageSlider images={images!} />}</>
    </>
  );
}
