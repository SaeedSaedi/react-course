import "./App.css";
import { useState } from "react";
import Course from "./Course";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");

  const handleChange = (event) => {
    setNewCourse(event.target.value);
  };

  const addCourse = () => {
    const course = {
      id:
        courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
      courseName: newCourse,
      isCompleted: false,
    };
    setCourseList([...courseList, course]);
  };

  const deleteCourse = (courseId) => {
    setCourseList(courseList.filter((course) => courseId !== course.id));
  };

  const completeCourse = (courseId) => {
    const newCourseList = courseList.map((course) => {
      if(course.id === courseId)
        return {...course,isCompleted: !course.isCompleted}
      else
        return course
    });

    setCourseList(newCourseList);
  };
  return (
    <div className="App">
      <div className="add-course">
        <input type="text" onChange={handleChange}></input>
        <button onClick={addCourse}>add course</button>
      </div>
      <div className="list">
        {courseList.map((course, i) => {
          return (
            <Course
              key={i}
              course={course}
              deleteCourse={deleteCourse}
              completeCourse={completeCourse}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
