import { DataSource } from "apollo-datasource";
import faker from "faker";
import { User } from "../types";

class Faker extends DataSource {
  constructor() {
    super();
  }

  getUser(): User {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    };
  }
}

export default Faker;
