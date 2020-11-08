import faker from "faker";
import { User, Address, BlogPost, Todo, Image, Product } from "../types";
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

interface GetImageArgs {
  width?: number;
  height?: number;
}

export const getImage = (args: GetImageArgs = {}): Image => {
  // Set default values if width or height is not initialized with a value
  const {
    width = faker.random.number({ max: 2000, min: 200, precision: 50 }),
    height = faker.random.number({ max: 2000, min: 200, precision: 50 }),
  } = args;

  return {
    url: faker.image.imageUrl(width, height),
    alt: faker.lorem.sentence(6),
    width,
    height,
  };
};

export const getProduct = (): Product => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  color: faker.commerce.color(),
  price: faker.commerce.price(),
  category: faker.commerce.department(),
  images: generateArrayWith<Image, GetImageArgs>(
    getImage,
    faker.random.number({ max: 8, min: 2 }),
    { width: 200, height: 300 }
  ),
  publishedAt: faker.date.past().toUTCString(),
});

export const getProducts = (count: number): Product[] =>
  generateArrayWith<Product>(getProduct, count);
