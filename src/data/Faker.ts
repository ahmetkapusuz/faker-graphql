import faker from "faker";
import { User, Address } from "../types";

export function getUser(): User {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    userName: faker.internet.userName(),
    password: faker.internet.password(),
    avatar: faker.internet.avatar(),
  };
}

export function getAddress(): Address {
  return {
    streetName: faker.address.streetName(),
    streetSuffix: faker.address.streetSuffix(),
    zipCode: faker.address.zipCode(),
    county: faker.address.county(),
    state: faker.address.state(),
    stateAbbr: faker.address.stateAbbr(),
    country: faker.address.country(),
    countryCode: faker.address.countryCode(),
  };
}
