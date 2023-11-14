import { Entity, Fields } from "remult";

@Entity("categories", {
  allowApiCrud: true,
})
export class Category {
  @Fields.autoIncrement()
  id: number;

  @Fields.string()
  name: string;

  @Fields.string()
  description: string;

  @Fields.string()
  imageSrc: string;
}
