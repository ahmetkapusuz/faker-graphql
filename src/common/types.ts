import { User } from "../types";

export interface Faker {
  getUser: () => User;
}

export interface FakerDataSources {
  faker: Faker;
}

export interface FakerContext {
  dataSources: FakerDataSources;
}
