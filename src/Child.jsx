import React from "react";
import "./child.css";
function Child(props) {
  return (
    <div>
      <div className="card">
        <h4>{props.name}</h4>
        <p>{props.age}</p>
        <p>{props.country}</p>
      </div>
      <button>Order now</button>
    </div>
  );
}

export default Child;
