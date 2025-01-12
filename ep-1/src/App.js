import "./App.css";

function App() {
  let age = 0;

  const increaseAge = () => {
    age = age + 1
    console.log(age)
  }
  return (
    <div className="App">
      <h1>{age}</h1>
      <button onClick={increaseAge}>Increase age</button>
    </div>
  );
}

export default App;
