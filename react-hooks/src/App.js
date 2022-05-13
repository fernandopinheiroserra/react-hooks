import { useState } from 'react';
import './App.css';
import { FaStar } from "react-icons/fa";

const createArray = (length) => [
  ...Array(length)
];

function Star() {
  return <FaStar />;
}

function App() {

  return <StarRating />
  
  //Check!
  //const [checked, setChecked] = useState(false);

  //return (
  //  <div className="App">
  //    <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)}/>
  //    <p>{checked ? "yep" : "nope"}</p>
  //  </div>
  //);
}

export default App;
