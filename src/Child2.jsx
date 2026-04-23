import React from "react";
import "./child2.css";

function Child2({ items }) {
  return (
    <div>
      <div className="item">
        <img src={items.image} alt="20" />
        <p>{items.title}</p>
        <p>{items.price}</p>
      </div>
      <button>Order now</button>
    </div>
  );
}

export default Child2;
