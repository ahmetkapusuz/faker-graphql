import { User, Address } from "../types";
import { getUser, getAddress } from "../data/Faker";

export default {
  user: (): User => getUser(),
  address: (): Address => getAddress(),
};
