import "./App.css";
import {useState} from "react"

function App() {
  const [age,setAge] = useState(0)

  return (
    <div className="App">
      <h1>{age}</h1>
      <button onClick={()=> setAge(age+1)}>Increase age</button>
      <button onClick={()=> setAge(age-1)}>Decrease age</button>
    </div>
  );
}

export default App;
