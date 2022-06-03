import { useReducer } from 'react';
import { ReactDOM } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useReducer((
  number, newNumber) => number + newNumber , 0)

  const [checked, toogle] = useReducer(
     (checked) => !checked,
     false
  );

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={toogle}
      />  
      <h1 onClick={() => setNumber(1)}>{number}</h1>;
    </>
  )
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
