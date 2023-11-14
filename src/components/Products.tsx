import { ReactNode } from "react";
import Button from "./Button";

export default function Products(): ReactNode {
  return (
    <>
      <h2>Featured Products</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          <img src="src/assets/grocery1.jpg" alt="Product 1" />
          <h3>Organic Apples</h3>
          <p>Fresh organic apples from local orchards.</p>
          <span>
            $2.99 / lb <br></br>
          </span>
          <Button text="Add to cart"/>
        </div>

        <div className="flex flex-col gap-4">
          <img src="src/assets/grocery1.jpg" alt="Product 2" />
          <h3>Whole Grain Bread</h3>
          <p>Healthy whole grain bread for your family.</p>
          <span>
            $3.49<br></br>
          </span>
          <Button text="Add to cart"/>
        </div>

        {/* <div className="flex flex-col gap-4">
          <img src="src/assets/grocery1.jpg" alt="Product 2" />
          <h3>Whole Grain Bread</h3>
          <p>Healthy whole grain bread for your family.</p>
          <span>
            $3.49<br></br>
          </span>
          <button className="bg-red-200 w-24 border-2 border-double border-rose-500 rounded-xl hover:bg-rose-900 p-">
            Add to Cart
          </button>
        </div> */}

        {/* Add more featured products */}
      </div>
    </>
  );
}
