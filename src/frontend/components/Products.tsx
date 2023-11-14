import { ReactNode, useEffect, useState } from "react";
import Button from "./Button";
import { Product } from "../../shared/Product";
import { remult } from "remult";

export default function Products(): ReactNode {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    remult.repo(Product).find().then(setFeaturedProducts);
  }, []);

  return (
    <>
      <h2>Featured Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {featuredProducts.map((product) => (
          <article key={product.name} className="flex flex-col gap-4">
            <img src="grocery1.jpg" alt="Product 1" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>
              ${product.price} / lb <br></br>
            </span>
            <Button text="Add to cart" />
          </article>
        ))}
      </div>
    </>
  );
}
