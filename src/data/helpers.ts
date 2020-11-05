import faker from "faker";

export const generateFullName = (): string =>
  `${faker.name.firstName()} ${faker.name.lastName()}`;
