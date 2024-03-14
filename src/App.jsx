import { useState } from "react";
import Cart from "./components/Cart";
import CoursesIndex from "./components/Courses/CoursesIndex";
import Header from "./components/Header/Header";

function App() {
  const [carts, setCarts] = useState([]); //11.0

  const handleCourseSelection = (course) => {
    setCarts((data) => [...data, course]); //11.1
  }; //10.1 (course)10.8

  return (
    <div className="container mx-auto ">
      {/* Header */}
      <div className="mb-8 sticky">
        <Header />
      </div>
      {/* Body */}

      <div className="md:flex gap-5 grid grid-cols-12">
        {/* Course Side  div*/}
        <div className="col-span-9">
          {/* handleCourseSelection={handleCourseSelection} ========Props Passing==10.2 */}
          <CoursesIndex handleCourseSelection={handleCourseSelection} />
        </div>
        {/* Cart Side div*/}
        <div className="col-span-3">
          {/* 11.3 --- carts={carts}*/}
          <Cart carts={carts} />
        </div>
      </div>
    </div>
  );
}

export default App;
