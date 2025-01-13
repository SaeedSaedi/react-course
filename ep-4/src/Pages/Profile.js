import { useParams } from "react-router-dom";
import ChangeProfile from "../Components/ChangeProfile";
import { useContext } from "react";
import { ProfileContext } from "../App";

const Profile = () => {
  const { name, id } = useParams();
  const { username } = useContext(ProfileContext);
  return (
    <div>
      This is Profile page of {name} with {id}
      username is {username}
      <ChangeProfile />
    </div>
  );
};

export default Profile;
