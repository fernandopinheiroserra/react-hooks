import { useEffect, useState } from 'react';
import './App.css';
import { FaStar } from "react-icons/fa";

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users`)
    .then(response => response.json())
    .then(setData);
  })
//on going!!!
  if (data) {
    return (
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
          <p>{user.id}</p>
        ))}
      </ul>
    );
  }

  return <p>No Users</p>;
}
  
  //Check!
  //const [checked, setChecked] = useState(false);

  //return (
  //  <div className="App">
  //    <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)}/>
  //    <p>{checked ? "yep" : "nope"}</p>
  //  </div>
  //);


export default App;
