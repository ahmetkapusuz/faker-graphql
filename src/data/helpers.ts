import faker from "faker";

export const generateFullName = (): string =>
  `${faker.name.firstName()} ${faker.name.lastName()}`;

export const generateArrayWith = <T, A = unknown>(
  generator: (args?: A) => T,
  count: number,
  args?: A
): T[] => [...Array(count).keys()].map(() => generator(args));
