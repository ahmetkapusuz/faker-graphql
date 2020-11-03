import fs from "fs";
import { gql } from "apollo-server";

const typeDefs = gql(
  fs.readFileSync(__dirname.concat("/schema.graphql"), "utf8")
);

export default typeDefs;
