import classes from "./BioCard.module.css";

function BioCard(props) {
  return (
    <div className="card_div col-md-12 mt-3">
      {/* <h1>{props.name}</h1> */}
      <h1 className="p_bio">{props.bio_eng}</h1>
      <p>{props.location}</p>
    </div>
  );
}

export default BioCard;
