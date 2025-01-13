import { useContext, useState } from "react";
import { ProfileContext } from "../App";

const ChangeProfile = (props) => {
  const [newUserName, setNewUserName] = useState("");
  const { setUserName } = useContext(ProfileContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <button onClick={() => setUserName(newUserName)}>Change Username</button>
    </div>
  );
};

export default ChangeProfile;
