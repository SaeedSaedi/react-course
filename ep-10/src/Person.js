import PropTypes from 'prop-types';

export const Person = (props) => {
  const { name, email, age, isMarried, courses } = props;

  return (
    <div>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{age}</h2>
      <h2>{isMarried ? "yes" : "no"}</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isMarried: PropTypes.bool.isRequired,
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
};
