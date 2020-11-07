import { User, Address, BlogPost, Todo, Movie } from "../types";
import {
  getUser,
  getUsers,
  getAddress,
  getBlogPost,
  getBlogPosts,
  getTodo,
  getTodos,
  getMovie,
  getMovies,
} from "../data/Faker";

export default {
  user: (): User => getUser(),
  address: (): Address => getAddress(),
  users: (_: unknown, { count }: { count: number }): User[] => getUsers(count), // TODO: Add max count limit
  blogPost: (): BlogPost => getBlogPost(),
  blogPosts: (_: unknown, { count }: { count: number }): BlogPost[] =>
    getBlogPosts(count),
  todo: (): Todo => getTodo(),
  todos: (_: unknown, { count }: { count: number }): Todo[] => getTodos(count),
  movie: (): Movie => getMovie(),
  movies: (_: unknown, { count }: { count: number }): Movie[] =>
    getMovies(count),
};
