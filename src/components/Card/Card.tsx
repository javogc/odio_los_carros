import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Card.css";

interface ICardProps {
  title: string;
  content?: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({
  title,
  content,
}: ICardProps): JSX.Element => {
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
