import './App.css';

function App() {
  const names = ["saeed","ali","mamad"]

  return (
    <div className="App">
      { names.map((v,i)=>{
        return <h1 key={i}>{v}</h1>
      })}
    </div>
  );
}



export default App;
