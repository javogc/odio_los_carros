import React, { useState, useEffect } from "react";

interface IDrawingProps {}

const Drawing: React.FC<IDrawingProps> = (): JSX.Element => {
  return (
    <div>
      <h3>This component will hold a p5.js drawing</h3>
    </div>
  );
};

export default Drawing;
