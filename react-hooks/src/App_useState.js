import { useState } from 'react';
import './App.css';
import { FaStar } from "react-icons/fa";

const createArray = (length) => [
  ...Array(length)
];

function Star({ selected = false, onSelected }) {
  return (
    <FaStar 
      color={selected ? "red" : "gray"}
      onClick={onSelected}
    />
  );
}

function StarRating({ totalStars=5 }){
  const [
    selectedStars, 
    setSelectedStars
  ] = useState(0);
  return (
  <>
    {createArray(totalStars).map((n, i) => (
      <Star 
        key={i} 
        selected={selectedStars > i}
        onSelected={() => setSelectedStars(i + 1)}
      />
    ))}
    <p>{selectedStars} of {totalStars}</p>
  </>
  );
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
