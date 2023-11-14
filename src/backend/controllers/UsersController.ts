import { BackendMethod, EntityFilter, remult } from "remult";
import { User } from "../../shared/User";

export class UsersController {
  @BackendMethod({ allowed: true })
  static async findUser(
    where?: EntityFilter<User> | undefined
  ): Promise<User | undefined> {
    const userRepo = remult.repo(User);

    return await userRepo.findFirst(where);
  }
}
