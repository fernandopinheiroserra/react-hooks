import { useRef } from 'react';
import { ReactDOM } from 'react-dom';
import './App.css';




function App() {
//  const [number, setNumber] = useReducer((
//  number, newNumber) => number + newNumber , 0)
  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`);
    sound.current.value= ""
    color.current.value= ""
  }

  return (
    <form onSubmit={submit}>
      <input 
        ref={sound}
        type="text"
        placeholder="Sound..."/>
      <input 
        ref={color}
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
