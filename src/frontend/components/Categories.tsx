import { ReactNode, useEffect, useState } from "react";
import { Category } from "../../shared/Category";
import { remult } from "remult";

export default function Categories(): ReactNode {
  const [featuredCategories, setFeaturedCategories] = useState<Category[]>([]);

  useEffect(() => {
    remult.repo(Category).find().then(setFeaturedCategories);
  }, []);

  return (
    <>
      <h2>Shop by Category</h2>
      <div className="grid grid-cols-3">
        {featuredCategories.map((category) => (
          <article key={category.id}>
            <img src={category.imageSrc} alt={category.name} />
            <h3>{category.name}</h3>
          </article>
        ))}
      </div>
    </>
  );
}
