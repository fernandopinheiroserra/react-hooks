import { useReducer } from 'react';
import { ReactDOM } from 'react';
import './App.css';


const initialState = {
  message: "hi"
}



function App() {
//  const [number, setNumber] = useReducer((
//  number, newNumber) => number + newNumber , 0)

  const [state, dispatch] = useReducer(
     reducer,
     initialState
  );

  return (
    <>
      <p>Message: {StaticRange.message}</p>
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
