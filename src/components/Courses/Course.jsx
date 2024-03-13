// eslint-disable-next-line react/prop-types
import { MdOutlinePriceCheck } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";

//10.5 == {course, handleCourseSelection }
const Course = ({ course, handleCourseSelection }) => {
  const { photo, name, description, price, credit } = course;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>

        <div className="flex text-center">
          <p className="w-1/2 flex items-center gap-1">
            <MdOutlinePriceCheck />
            <b>Price: </b>
            {price}
          </p>
          <p className="w-1/2 flex items-center gap-1">
            <CiCreditCard1 />
            <b>Credit:</b> {credit}
          </p>
        </div>

        <div className="card-actions justify-end">
          <button
            className="w-full p-2 bg-blue-700 rounded-xl font-bold text-white"
            // 10.6-----
            onClick={() => handleCourseSelection(course)}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
