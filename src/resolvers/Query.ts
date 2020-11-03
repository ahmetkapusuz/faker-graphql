import { User, Address } from "../types";
import { FakerContext } from "../common/types";

export default {
  user: (parent: unknown, args: unknown, { dataSources }: FakerContext): User =>
    dataSources.faker.getUser(),
  address: (
    parent: unknown,
    args: unknown,
    { dataSources }: FakerContext
  ): Address => dataSources.faker.getAddress(),
};
