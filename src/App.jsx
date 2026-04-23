import React from "react";
import pizza from "./assets/pizzza.jpg";
import dosa from "./assets/dosa.jpg";
import idly from "./assets/idly.jpg";
import vada from "./assets/vada.jpg";
import butternan from "./assets/butternan.jpg";
import Child from "./Child";
import Child2 from "./Child2";
import "./App.css";
function App() {
  const name = "Sreeram";
  const age = 24;
  const country = "India";

  const items = [
    {
      title: "Pizza",
      price: 200,
      image: pizza,
    },
    {
      title: "Dosa",
      price: 50,
      image: dosa,
    },
    {
      title: "Vada",
      price: 50,
      image: vada,
    },
    {
      title: "Butternan",
      price: 50,
      image: butternan,
    },
    {
      title: "Idly",
      price: 50,
      image: idly,
    },
  ];
  return (
    <div>
      <div className="profile">
        <Child name={name} age={age} country={country} />
      </div>
      <div className="items">
        {items.map((items) => (
          <Child2 items={items} />
        ))}
      </div>
    </div>
  );
}

export default App;
