import React from "react";
import classes from "./BioCard.module.css";

function BioCard(props) {
  return (
    <div className="card_div col-md-12">
      <h1>{props.name}</h1>
      <p className="p_bio">{props.bio_eng}</p>
      <p>{props.location}</p>
      <ul>
        <li>
          <a className="link" href={props.github} target="blank">
            GitHub
          </a>
        </li>
        <li>
          <a className="link" href={props.twitter} target="blank">
            Twitter
          </a>
        </li>
        <li>
          <a className="link" href={props.linkedin} target="blank">
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BioCard;
