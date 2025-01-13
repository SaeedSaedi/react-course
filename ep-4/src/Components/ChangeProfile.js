import { useState } from "react";

const ChangeProfile = (props) => {
  const [newUserName, setNewUserName] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <button onClick={() => props.setUserName(newUserName)}>
        Change Username
      </button>
    </div>
  );
};

export default ChangeProfile;
