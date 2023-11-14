import { Entity, Fields, UserInfo, Validators } from "remult";

@Entity("users", {
  allowApiCrud: true,
})
export class User implements UserInfo {
  @Fields.cuid()
  id!: string;

  @Fields.string()
  name?: string | undefined;

  @Fields.json()
  roles?: string[] | undefined;

  @Fields.string({ validate: Validators.required })
  username!: string;

  @Fields.string({ validate: Validators.required })
  password!: string;
}

export type UserLoginModel = {
  username: string;
  password: string;
};
