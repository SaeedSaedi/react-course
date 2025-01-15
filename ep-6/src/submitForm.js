import { useForm } from "react-hook-form";
const SubmitForm = () => {
  const { register, handleSubmit } = useForm();
  const onFormSubmit = (data) => {
    console.log("the form submitted");
    console.log(data)
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input type="text" placeholder="Name..." {...register("name")} />
      <input type="text" placeholder="Email..." {...register("email")} />
      <input type="number" placeholder="Age..." {...register("age")} />
      <input type="password" placeholder="Password..." {...register("password1")} />
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
