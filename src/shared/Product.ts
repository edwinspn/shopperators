import { Entity, Fields } from "remult";

@Entity("products", {
  allowApiCrud: true,
})
export class Product {
  @Fields.autoIncrement()
  id: number;

  @Fields.string()
  name: string;

  @Fields.string()
  description: string;

  @Fields.string()
  imageSrc: string;

  @Fields.number()
  price: number;

  @Fields.number()
  weight?: number
}
