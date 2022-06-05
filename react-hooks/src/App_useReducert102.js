import { useReducer } from 'react';
import { ReactDOM } from 'react-dom';
import './App.css';


const initialState = {
  message: "hi"
};

function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case "yell":
      return{
        message: `HEY! I JUST SAID ${state.message}`
      }
    case "whisper":
      return {
        message: `excuse me..i just said ${state.message}`
      };  
  }
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
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell"})}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper"})}>whisper</button>
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
