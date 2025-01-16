import { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried?: boolean; //Optional
  courses: string[];
  country: Country;
}

export enum Country {
  Iran = "Iran",
  Japan = "Japan",
  USA = "USA",
}
export const Person = (props: Props) => {
  const [name, setName] = useState<string>("saeed"); //define type for state

  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.email}</h2>
      <h2>{props.age}</h2>
      <h2>{props.isMarried ? "yes" : "no"}</h2>
      <ul>
        {props.courses.map((course: String) => (
          <h4>{course}</h4>
        ))}
      </ul>
      <h3>{props.country}</h3>
    </div>
  );
};
