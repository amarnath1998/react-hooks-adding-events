import React, { useState } from "react";
import "./App.css";
import Item from "./components/item";

const initList = [
  { name: "tomato", calorie: 20 },
  { name: "rice", calorie: 30 },
  { name: "candy", calorie: 100 }
];

function App() {
  const [list, setList] = useState(initList);

  function removeUnhealthyHandle() {
    const filteredList = list.filter(v => v.calorie <= 50);
    setList(filteredList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {list.map((v, k) => {
          return <Item key={`${k}${v.name}${v.calorie}`} item={v} />;
        })}

        <button onClick={removeUnhealthyHandle} className="remove-button">
          Remove Unhealthy
        </button>
      </header>
    </div>
  );
}

export default App;
