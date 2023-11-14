import { ReactNode } from "react";
import Products from "../components/Products";
import Categories from "../components/Categories";
//src/assets/grocery1.jpg
export default function Home(): ReactNode {
  return (
    <>
      <div className="text-center border-2 border-double border-white rounded p-24 mt-10 mx-24">
        <h1>Welcome to Shopperators</h1>
        <p>Your one-stop shop for fresh and quality groceries.</p>
      </div>
      <section className="flex flex-col gap-10 p-24">
        <Products></Products>

        <Categories></Categories>

        <div className="promo-banner">
          <img
            className="px-24"
            width={1600}
            height={100}
            src="grocery2.jpg"
            alt="Promotional Banner"
          />
          <div className="promo-text text-center">
            <h2>Special Offers</h2>
            <p>
              Check out our exclusive deals on selected items. Limited time
              only!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
