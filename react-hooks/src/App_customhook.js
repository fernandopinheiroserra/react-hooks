import { useState } from 'react';
import { ReactDOM } from 'react-dom';
import { useInput } from './useInput';
import './App.css';


function App() {
//  const [number, setNumber] = useReducer((
//  number, newNumber) => number + newNumber , 0)
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000")

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();
  }

  return (
    <form onSubmit={submit}>
      <input 
        {...titleProps}
        type="text"
        placeholder="Sound..."/>
      <input 
        {...colorProps}
        type="color"/>
      <button>ADD</button>
    </form>  
  );
}

// UseReducer 101
//  const [number, setNumber] = useReducer((
//    number, newNumber) => number + newNumber , 0)
//   return <h1 onClick={() => setNumber(1)}>{number}</h1>;
//}
  
  //Check!
  //const [checked, setChecked] = useState(false);

  //return (
  //  <div className="App">
  //    <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)}/>
  //    <p>{checked ? "yep" : "nope"}</p>
  //  </div>
  //);


export default App;
