import { useState } from "react";
import Cart from "./components/Cart";
import CoursesIndex from "./components/Courses/CoursesIndex";
import Header from "./components/Header/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const totalCredits = 15;

function App() {
  const [carts, setCarts] = useState([]);

  const handleCourseSelection = (course) => {
    const credits = carts.reduce((total, course) => total + course.credit, 0);
    if (credits + course.credit > totalCredits) {
      toast.error(`Only ${totalCredits} credits allowed`);
      return;
    }
    const alreadyExists = carts.find((cart) => cart.id === course.id);
    if (!alreadyExists) {
      setCarts([...carts, course]);
      return toast.success("Course Added");
    } else {
      return toast.warn("Course Already Exists");
    }
  };

  return (
    <div className="container mx-auto">
      {/* Header */}
      <div className="mb-8 sticky">
        <Header />
      </div>
      {/* Body */}
      <div className="md:flex gap-5 grid grid-cols-12">
        {/* Course Side div */}
        <div className="col-span-9">
          {/* Pass handleCourseSelection function as prop */}
          <CoursesIndex handleCourseSelection={handleCourseSelection} />
        </div>
        {/* Cart Side div */}
        <div className="col-span-3">
          {/* Pass selected courses to Cart component */}
          <Cart carts={carts} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
