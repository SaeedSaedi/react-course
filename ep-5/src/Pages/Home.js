import React, { useContext } from "react";
import { ProfileContext } from "../App";
import { useQuery } from "react-query";
import Axios from "axios";
const Home = () => {
  const { username } = useContext(ProfileContext);
  const {
    data: catData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>We back soon error: {error.message}</h2>;
  return (
    <React.Fragment>
      <div>This is Home page - username is {username}</div>
      <h1>{catData?.fact}</h1>
      <button onClick={refetch}>update</button>
    </React.Fragment>
  );
};

export default Home;
