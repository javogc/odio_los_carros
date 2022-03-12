import React from "react";
import classes from "./BioCard.module.css";

function BioCard(props) {
  return (
    <div className="card_div">
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
      <p>{props.location}</p>
      {/* <a className="link" href={props.github} target="blank">
        GitHub
      </a>
      <a className="link" href={props.twitter} target="blank">
        Twitter
      </a>
      <a className="link" href={props.linkedin} target="blank">
        Linkedin
      </a> */}
    </div>
  );
}

export default BioCard;
