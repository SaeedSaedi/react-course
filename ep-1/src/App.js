import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <GetNameComponent name="Saeed" age={32} />
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
