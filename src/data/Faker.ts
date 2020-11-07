import faker from "faker";
import { User, Address, BlogPost, Todo, Movie } from "../types";
import { generateFullName, generateArrayWith } from "./helpers";

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
  generateArrayWith<User>(getUser, count);

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
  generateArrayWith<BlogPost>(getBlogPost, count);

export const getTodo = (): Todo => ({
  id: faker.random.uuid(),
  title: faker.random.words(faker.random.number(6) + 1),
  completed: faker.random.boolean(),
});

export const getTodos = (count: number): Todo[] =>
  generateArrayWith<Todo>(getTodo, count);

export const getMovie = (): Movie => ({
  id: faker.random.uuid(),
  title: faker.random.words(faker.random.number(4) + 1),
  overview: faker.lorem.paragraphs(3),
  posterURL: faker.image.imageUrl(250, 360),
  rating: faker.random.number(5),
  genres: generateArrayWith<string>(
    faker.random.word,
    faker.random.number(3) + 1
  ),
  cast: generateArrayWith<string>(generateFullName, faker.random.number(5) + 1),
  directors: generateArrayWith<string>(
    generateFullName,
    faker.random.number(1) + 1
  ),
});

export const getMovies = (count: number): Movie[] =>
  generateArrayWith<Movie>(getMovie, count);
