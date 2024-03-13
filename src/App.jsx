import Cart from "./components/Cart";
import CoursesIndex from "./components/Courses/CoursesIndex";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="container mx-auto">
      {/* Header */}
      <div className="mb-2">
        <Header />
      </div>
      {/* Body */}

      <div className="md:flex gap-5 grid grid-cols-12">
        {/* Course Side  div*/}
        <div className="col-span-10">
          <CoursesIndex />
        </div>
        {/* Cart Side div*/}
        <div className="col-span-2">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;
