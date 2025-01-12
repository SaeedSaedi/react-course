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
        return <h1 key={index}>{user.name} : {user.age}</h1>
      })}
    </div>
  );
}



export default App;

