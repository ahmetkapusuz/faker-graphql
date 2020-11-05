import { User, Address } from "../types";
import { getUser, getUsers, getAddress } from "../data/Faker";

export default {
  user: (): User => getUser(),
  address: (): Address => getAddress(),
  users: (_: unknown, { count }: { count: number }): User[] => getUsers(count), // TODO: Add max count limit
};
