import './App.css';

function App() {
  const age = 20;
  if(age > 20)
    return (
      <div className="App">
        <GetNameComponent name="Saeed" age={32} />
        <GetNameComponent name="Ali" age={20} />
      </div>
    );
  else
    return <div><h1>Forbidden</h1></div>
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
