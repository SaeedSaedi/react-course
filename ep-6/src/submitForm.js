import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const SubmitForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().min(18).max(100).required(),
    password1: yup
      .string()
      .min(4)
      .max(15)
      .matches(/[a-z]+/)
      .matches(/[A-Z]+/)
      .required(),
    password2: yup
      .string()
      .oneOf([yup.ref("password1")])
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onFormSubmit = (data) => {
    console.log("the form submitted");
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input type="text" placeholder="Name..." {...register("name")} />
      {errors.name && <p>{errors.name?.message}</p>}
      <input type="text" placeholder="Email..." {...register("email")} />
      {errors.email && <p>{errors.email?.message}</p>}
      <input type="number" placeholder="Age..." {...register("age")} />
      {errors.age && <p>{errors.age?.message}</p>}
      <input
        type="password"
        placeholder="Password..."
        {...register("password1")}
      />
      {errors.password1 && <p>{errors.password1?.message}</p>}
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("password2")}
      />
      {errors.password2 && <p>{errors.password2?.message}</p>}
      <input type="submit" />
    </form>
  );
};

export default SubmitForm;
