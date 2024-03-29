import { useEffect, useState } from "react";
import Course from "./Course";

// (handleCourseSelection)
const CoursesIndex = ({handleCourseSelection}) => {
  const [courses, setCourses] = useState([]);
  // =====================Data Load
  useEffect(() => {
    fetch("/coursesData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {courses.map((course) => (
        <Course
          handleCourseSelection={handleCourseSelection} 
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
};

export default CoursesIndex;
