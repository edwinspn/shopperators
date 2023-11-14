import { ReactNode } from "react";

export default function Categories(): ReactNode {
  return (
<>
        <h2>Shop by Category</h2>
        <div className="grid grid-cols-3 gap-0">
          <div className="">
            <img src="src/assets/grocery1.jpg" alt="Vegetables" />
            <h3>Vegetables</h3>
          </div>

          <div className="">
            <img src="src/assets/grocery1.jpg" alt="Fruits" />
            <h3>Fruits</h3>
          </div>

          <div className="">
            <img src="src/assets/grocery1.jpg" alt="Dairy" />
            <h3>Dairy</h3>
          </div>

          {/* Add more categories */}
        </div>
      </>
  );
}
