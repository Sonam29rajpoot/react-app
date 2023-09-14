import React from "react";

function Addbutton({ product, onclick }) {
  return (
    <button
      size="small"
      style={{ backgroundColor: "cadetblue", color: "black" }}
      onClick={() => onclick(product)}
    >
      ADD TO CARD
    </button>
  );
}

export default Addbutton;
