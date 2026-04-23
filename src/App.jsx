import React from "react";
import pizza from "./assets/pizzza.jpg";
import Child from "./Child";
import Child2 from "./Child2";
import "./App.css";
function App() {
  const name = "Sreeram";
  const age = 24;
  const country = "India";

  const item = {
    title: "Pizza",
    price: 200,
    image: pizza,
  };
  return (
    <div className="profile">
      <Child name={name} age={age} country={country} />
      <Child2 item={item} />
    </div>
  );
}

export default App;
