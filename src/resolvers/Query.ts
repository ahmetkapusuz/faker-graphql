import { User } from "../types";
import { FakerContext } from "../common/types";

export default {
  user: (
    parent: unknown,
    args: unknown,
    { dataSources }: FakerContext
  ): User => {
    return dataSources.faker.getUser();
  },
};
