import { useEffect } from "react";
import Course from "./Course";
import { useState } from "react";

const CoursesIndex = () => {
  const [courses, setCourses] = useState([]);
  // =====================
  useEffect(() => {
    fetch("/coursesData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {courses.map((course) => (
        <Course key={course.id}></Course>
      ))}

      <Course />
    </div>
  );
};

export default CoursesIndex;
