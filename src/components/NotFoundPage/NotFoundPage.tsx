import React from "react";
import "./NotFoundPage.css";
import NavBar from "../Layout/NavBar/NavBar";

export default function NotFoundPage() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text">404 Not Found :-)</h1>
      </div>
    </>
  );
}
