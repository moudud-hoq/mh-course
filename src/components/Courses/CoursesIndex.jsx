import { useEffect } from "react";
import Course from "./Course";

const CoursesIndex = () => {
  useEffect(() => {
    fetch("/public/coursesData.json")
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
  );
};

export default CoursesIndex;
