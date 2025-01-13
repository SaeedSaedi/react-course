import { useParams } from "react-router-dom";
const Profile = () => {
  const { name, id } = useParams();
  return (
    <div>
      This is Profile page of {name} with {id}
    </div>
  );
};

export default Profile;
