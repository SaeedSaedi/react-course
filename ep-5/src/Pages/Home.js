import { useContext } from "react";
import { ProfileContext } from "../App";
const Home = () => {
  const { username } = useContext(ProfileContext);
  return <div>This is Home page - username is {username}</div>;
};

export default Home;
