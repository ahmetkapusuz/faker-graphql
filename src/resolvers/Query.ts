import { User, Address, BlogPost } from "../types";
import {
  getUser,
  getUsers,
  getAddress,
  getBlogPost,
  getBlogPosts,
} from "../data/Faker";

export default {
  user: (): User => getUser(),
  address: (): Address => getAddress(),
  users: (_: unknown, { count }: { count: number }): User[] => getUsers(count), // TODO: Add max count limit
  blogPost: (): BlogPost => getBlogPost(),
  blogPosts: (_: unknown, { count }: { count: number }): BlogPost[] =>
    getBlogPosts(count),
};
