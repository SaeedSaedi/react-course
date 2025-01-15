import Axios from "axios";
import { useReducer } from "react";
import { factReducer, initialState } from "./factReducer";

const Fact = () => {
  const [state, dispatch] = useReducer(factReducer, initialState);

  const handleFetch = () => {
    dispatch({type:"fetch_start"})
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        dispatch({type:"fetch_success",data:res.data.fact})
        console.log(res);
      })
      .catch((error) => {
        dispatch({type:"fetch_error"})
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleFetch}>
        {state.loading ? "is loading..." : "fetch cat fact"}
      </button>
      {state.error && <p>Error, get some error</p>}
      <h1>{state.fact}</h1>
    </div>
  );
};
export default Fact;
