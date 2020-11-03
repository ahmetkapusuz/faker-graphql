import { User, Address } from "../types";

export interface Faker {
  getUser: () => User;
  getAddress: () => Address;
}

export interface FakerDataSources {
  faker: Faker;
}

export interface FakerContext {
  dataSources: FakerDataSources;
}
