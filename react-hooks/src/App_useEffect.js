import { useEffect, useState } from 'react';
import './App.css';
import { FaStar } from "react-icons/fa";

function App() {
  const [name, setName] = useState("Fer");
  const [admin, setAdmin] = useState(false);

  //using dependency array
  useEffect(() => {
    console.log(`Celebrate ${name}`);
  },[name]);

  //using dependency array
  useEffect(() => {
    console.log(
      `The user is: ${
      admin ? "admin" : "not admin"
      }.`
    );
  }, [admin]);

  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName("Keh")}>Change Winner</button>
      <p>{admin ? "logged in" : "not logged in"}</p>
      <button onClick={() => setAdmin(true)}>
        Log in
      </button>
    </section>
  );
  
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
