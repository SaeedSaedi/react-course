import React from "react";
import "./App.css";
import { Person, Country } from "./Person";

function App() {
  const getAge = (name: string): number => {
    return 32;
  };

  const age: number = getAge("saeed");
  console.log(age);
  return (
    <div className="App">
      <Person
        name={"saeed"} // Incorrect: should be a string
        email="saeed@saeed.me" // Correct
        age={25} // Incorrect: should be a number
        isMarried={true} // Correct
        courses={["python", "react"]} // Correct
        country={Country.Iran}
      />
    </div>
  );
}

export default App;
