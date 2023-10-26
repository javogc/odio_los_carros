import React, { useState } from "react";

function Episodes() {
  const [next, setNext] = useState(null);

  return (
    <div>
      <p>Scroll through episodes</p>
      <div>
        <button>Previous</button>
        <p>Episode</p>
        <p>Next</p>
      </div>
    </div>
  );
}
