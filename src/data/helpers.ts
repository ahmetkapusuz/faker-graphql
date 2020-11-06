import faker from "faker";

export const generateFullName = (): string =>
  `${faker.name.firstName()} ${faker.name.lastName()}`;

export const generateArrayWith = <T>(generator: () => T, count: number): T[] =>
  [...Array(count).keys()].map(() => generator());
