import React, { useState } from "react";
import "./Card.css";

interface Props {
  title: string;
  content: React.ReactNode;
}

const Card: React.FC<Props> = ({ title, content }: Props): JSX.Element => {
  // const [count, setCount] = useState(0);

  return (
    <div className="card">
      <p className="cardTitle">{title}</p>
      <p>{content}</p>
      {/* <p>You've clicked the buttons {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click me</button> */}
    </div>
  );
};

export default Card;
