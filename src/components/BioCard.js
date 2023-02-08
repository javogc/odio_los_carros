import classes from "./BioCard.module.css";

function BioCard(props) {
  return (
    <div className="row">
      <div className="card_div col-md-12 mt-3">
        {/* <h1>{props.name}</h1> */}
        <h1 className="p_bio">{props.name_eng}</h1>
        <h5>{props.location}</h5>
      </div>
    </div>
  );
}

export default BioCard;
