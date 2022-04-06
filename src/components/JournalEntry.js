import React from "react";

function JournalEntry(props) {
  return (
    <div className="col-md-12">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default JournalEntry;
