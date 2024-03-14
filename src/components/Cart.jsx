import { totalCredits } from "../App"; 

const Cart = ({ carts }) => {
  const credits = carts.reduce((total, course) => total + course.credit, 0);
  return (
    <div className="bg-slate-100 p-4 rounded-xl md:w-72 space-y-4">
      <h3 className="font-bold text-blue-500">
        Credit Hour Remaining: {totalCredits - credits}
      </h3>
      <hr />

      <h3 className="font-bold">Course Name</h3>
      <div>
        <ul>
          {carts.map((course, i) => (
            <li key={course.id}>
              {i + 1}.{course.name}
            </li>
          ))}
        </ul>
      </div>
      <hr />

      <h3 className="font-semibold">
        Total Credit Hour: {credits}
      </h3>
      <hr />

      <h3 className="font-semibold">
        Total Price: {carts.reduce((total, course) => total + course.price, 0)}
      </h3>
    </div>
  );
};

export default Cart;
