import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  // fetch("https://catfact.ninja/fact").then((res)=> res.json()).then((data)=>{
  //   console.log(data)
  // })

  const [catFact, setCatFact] = useState("");
  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  const [name, setName] = useState("");
  const [predictedResult, setPredictedResult] = useState({});
  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedResult(res.data);
    });
  };

  return (
    <div className="App">
      <button onClick={fetchFact}>fetch data</button>
      <p>{catFact}</p>

      <input
        placeholder="Enter your name"
        onChange={(event) => setName(event.target.value)}
      ></input>
      <button onClick={fetchAge}>Predict age</button>
      <h1>Age is: {predictedResult?.age}</h1>
      <h1>name is: {predictedResult?.name}</h1>
    </div>
  );
}

export default App;
