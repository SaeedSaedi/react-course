import "./App.css";
import { useState } from "react";

function App() {
  const[showText,setShowText] = useState(true);
  const toggleText = ()=>{
    setShowText(!showText)
  }
  return (
    <div className="App">
      <button onClick={toggleText}>show/hide</button>
      { showText && <h1>This is a header</h1>}
    </div>
  );
}

export default App;
