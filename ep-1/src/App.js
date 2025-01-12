import {User} from "./User";
import './App.css';

function App() {
  const users = [
    {name:"saeed",age:32},
    {name:"ali",age:33},
    {name:"mamad",age:31},
  ]

  return (
    <div className="App">
      {users.map((user,index)=>{
        return <User key={index} name={user.name} age={user.age} />
      })}
    </div>
  );
}



export default App;

