import './App.css';

function App() {
  const age = 21;

  return (
    <div className="App">
      <GetNameComponent name="Saeed" age={32} />
      {age > 20 ? <h1>Enter Site</h1>: <h1>Forbidden</h1>}
      {age === 20 && <h1>Age is 20</h1>}

      <button type="submit" className={age > 20 ? "success":"warning"}>Click here</button>
    </div>
  );
}

//Component
const GetNameComponent = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  )
}

export default App;
