import fs from "fs";
import { gql } from "apollo-server";
import resolvers from "../resolvers";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = gql(
  fs.readFileSync(__dirname.concat("/schema.graphql"), "utf8")
);

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
