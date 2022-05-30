import React, { useState } from 'react'
import './App.css';

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? <h3>Welcome to the World of React</h3> : null}
    </div>
  );
}

export default App;
