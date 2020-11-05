import faker from "faker";
import { User, Address, BlogPost } from "../types";
import { generateFullName } from "./helpers";

export const getUser = (): User => ({
  id: faker.random.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  userName: faker.internet.userName(),
  password: faker.internet.password(),
  avatar: faker.internet.avatar(),
});

export const getUsers = (count: number): User[] =>
  [...Array(count).keys()].map(() => getUser());

export const getAddress = (): Address => ({
  streetName: faker.address.streetName(),
  streetSuffix: faker.address.streetSuffix(),
  zipCode: faker.address.zipCode(),
  county: faker.address.county(),
  state: faker.address.state(),
  stateAbbr: faker.address.stateAbbr(),
  country: faker.address.country(),
  countryCode: faker.address.countryCode(),
});

export const getBlogPost = (): BlogPost => ({
  id: faker.random.uuid(),
  title: faker.random.words(faker.random.number(6) + 1),
  body: faker.lorem.paragraphs(faker.random.number(10) + 1),
  author: generateFullName(),
  publishedAt: faker.date.past().toUTCString(),
  thumbnailImageUrl: faker.image.imageUrl(200, 160),
  imageUrl: faker.image.imageUrl(1280, 720),
});

export const getBlogPosts = (count: number): BlogPost[] =>
  [...Array(count).keys()].map(() => getBlogPost());
