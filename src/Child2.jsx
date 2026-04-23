import React from "react";
import "./child2.css";

function Child2({ item }) {
  return (
    <div>
      <div className="item">
        <img src={item.image} alt="20" />
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
      <button>Order now</button>
    </div>
  );
}

export default Child2;
