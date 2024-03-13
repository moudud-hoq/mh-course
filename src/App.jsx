import Cart from "./components/Cart";
import CoursesIndex from "./components/Courses/CoursesIndex";
import Header from "./components/Header/Header";

function App() {
  const handleCourseSelection = (course) => {
    console.log(course);
  }; //10.1 (course)10.8

  return (
    <div className="container mx-auto">
      {/* Header */}
      <div className="mb-2">
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
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
