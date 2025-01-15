import { useSelector } from "react-redux";

const Contact = () => {
  const selector = useSelector((state) => state.user);
  return(
    <div><h1>{selector.username}</h1></div>
  )
};

export default Contact;
