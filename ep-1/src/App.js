import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event)=>{
    setInputValue(event.target.value)
  }
  return (
    <div className="App">
      <input type="text" onChange={handleInputValue}></input>
      <h1>{inputValue}</h1>
    </div>
  );
}

export default App;
