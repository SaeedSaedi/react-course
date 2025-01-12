import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <GetNameComponent name="Saeed" age={32} />
      <GetNameComponent name="Ali" age={20} />
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
  );
};

export default App;
