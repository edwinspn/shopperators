import { remultExpress } from "remult/remult-express";
import { User } from "../shared/User";
import { UsersController } from "./controllers/UsersController";
import { Product } from "../shared/Product";
import { Category } from "../shared/Category";

export const api = remultExpress({
  entities: [User, Product, Category],
  controllers: [UsersController],
  getUser: (req) => req.session!["user"],
  initApi: async (remult) => {
    const productsRepo = remult.repo(Product);
    const categoryRepo = remult.repo(Category);

    if ((await productsRepo.count()) === 0) {
      const products: Product[] = [];
      for (let i = 0; i < 3; i++) {
        products[i] = productsRepo.create({
          name: "Apple",
          description: "Very green apple",
          price: 2.99,
          weight: 1.35,
          imageSrc: "grocery1.jpg",
        });
      }

      await productsRepo.save(products);
    }

    if ((await categoryRepo.count()) === 0) {
      await categoryRepo.save([
        {
          description: "Veggies",
          name: "Vegetables",
          imageSrc: "grocery1.jpg",
        },
        {
          description: "Fruits",
          name: "Fruits",
          imageSrc: "grocery1.jpg",
        },
        {
          description: "Dairy",
          name: "Dairy",
          imageSrc: "grocery1.jpg",
        },
      ]);
    }
  },
});
