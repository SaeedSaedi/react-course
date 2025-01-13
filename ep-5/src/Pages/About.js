import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  let navigate = useNavigate();

  return (
    // <div>
    //     <div>This is About page</div>
    //     <button>Go to Home</button>
    // </div>
    <React.Fragment>
      <div>This is About page</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </React.Fragment>
  );
};

export default About;
