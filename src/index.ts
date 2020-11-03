import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import typeDefs from "./schema";
import Faker from "./dataSources/Faker";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ faker: new Faker() }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
