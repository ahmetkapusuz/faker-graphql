import faker from "faker";

export const generateFullName = (): string =>
  `${faker.name.firstName()} ${faker.name.lastName()}`;

export const generateArrayWith = <T, A = unknown>(
  generator: (args?: A) => T,
  count: number,
  args?: A
): T[] => [...Array(count).keys()].map(() => generator(args));

// TODO: There is a problem here when newWidth = height, write a better helper function
export const changeImageUrlSizes = (
  url: string,
  width: number,
  height: number,
  newWidth: number,
  newHeight: number
): string =>
  url
    .replace(`/${width}/`, `/${newWidth}/`)
    .replace(`/${height}`, `/${newHeight}`);
