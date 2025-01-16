import "./App.css";
import { Person } from "./Person";

function App() {
  return (
    <div className="App">
      <Person
        name={123} // Incorrect: should be a string
        email="saeed@saeed.me" // Correct
        age="25" // Incorrect: should be a number
        isMarried={true} // Correct
        courses={["python", "react"]} // Correct
      />
    </div>
  );
}

export default App;
