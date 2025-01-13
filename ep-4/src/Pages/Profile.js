import { useParams } from "react-router-dom";
import ChangeProfile from "../Components/ChangeProfile";
const Profile = (props) => {
  const { name, id } = useParams();
  return (
    <div>
      This is Profile page of {name} with {id}
      username is {props.username}
      <ChangeProfile setUserName={props.setUserName} />
    </div>
  );
};

export default Profile;
