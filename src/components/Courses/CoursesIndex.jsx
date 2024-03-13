import { useEffect, useState } from "react";
import Course from "./Course";

//10.3 (handleCourseSelection)
const CoursesIndex = ({handleCourseSelection}) => {
  const [courses, setCourses] = useState([]);
  // =====================
  useEffect(() => {
    fetch("/coursesData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {courses.map((course) => (
        <Course
          handleCourseSelection={handleCourseSelection} //10.4 (Arrow FUnction 10.7)
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
};

export default CoursesIndex;
