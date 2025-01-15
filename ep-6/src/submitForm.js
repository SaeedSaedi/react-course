import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const SubmitForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().min(18).max(100).required(),
    password1: yup.string().min(4).max(15).required(),
    password2: yup
      .string()
      .oneOf([yup.ref("password1")])
      .required(),
  });
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const onFormSubmit = (data) => {
    console.log("the form submitted");
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input type="text" placeholder="Name..." {...register("name")} />
      <input type="text" placeholder="Email..." {...register("email")} />
      <input type="number" placeholder="Age..." {...register("age")} />
      <input
        type="password"
        placeholder="Password..."
        {...register("password1")}
      />
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("password2")}
      />
      <input type="submit" />
    </form>
  );
};

export default SubmitForm;
