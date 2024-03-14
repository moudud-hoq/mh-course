//11.4{carts}
const Cart = ({ carts }) => {
  return (
    <div className="bg-slate-100 p-4 rounded-xl md:w-72 space-y-4 ">
      <h3 className="font-bold text-blue-500">
        Credit Hour Remaining: {carts.length}
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
        {/* 12.1  --------- 12.2 (, i)/ {i+1}. if u do not want to serialized then no problem*/}
      </div>
      <hr />

      <h3 className="font-semibold">
        Total Credit Hour:
        {carts.reduce((total, course) => total + course.credit, 0)} {/* 12.3*/}
      </h3>
      <hr />

      <h3 className="font-semibold">
        Total Price: 
        {carts.reduce((total, course) => total + course.price, 0)}{/* 12.4*/}
      </h3>
    </div>
  );
};

export default Cart;
