import React from "react";
import "./child2.css";

function Child2({ items }) {
  return (
    <div>
      <div className="item">
        <img src={items.image} />
        <p>{items.title}</p>
        <p>{items.price}</p>
      </div>
    </div>
  );
}

export default Child2;
