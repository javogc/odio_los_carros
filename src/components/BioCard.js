import React from "react";
import classes from "./BioCard.module.css";

function BioCard(props) {
  return (
    <div className="card_div">
      <h3>{props.name}</h3>
      <h5>{props.bio}</h5>
      <h5>{props.location}</h5>
      <a className="link" href={props.github} target="blank">
        GitHub
      </a>
      <a className="link" href={props.twitter} target="blank">
        Twitter
      </a>
      <a className="link" href={props.linkedin} target="blank">
        Linkedin
      </a>
    </div>
  );
}

export default BioCard;
