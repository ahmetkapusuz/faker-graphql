export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  address?: Maybe<Address>;
  blogPost?: Maybe<BlogPost>;
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>;
  todo?: Maybe<Todo>;
  todos?: Maybe<Array<Maybe<Todo>>>;
  movie?: Maybe<Movie>;
  movies?: Maybe<Array<Maybe<Movie>>>;
};

export type QueryUsersArgs = {
  count?: Maybe<Scalars["Int"]>;
};

export type QueryBlogPostsArgs = {
  count?: Maybe<Scalars["Int"]>;
};

export type QueryTodosArgs = {
  count?: Maybe<Scalars["Int"]>;
};

export type QueryMoviesArgs = {
  count?: Maybe<Scalars["Int"]>;
};

export type User = {
  __typename?: "User";
  id?: Maybe<Scalars["ID"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  userName?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
};

export type Address = {
  __typename?: "Address";
  streetName?: Maybe<Scalars["String"]>;
  streetSuffix?: Maybe<Scalars["String"]>;
  zipCode?: Maybe<Scalars["String"]>;
  county?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  stateAbbr?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  countryCode?: Maybe<Scalars["String"]>;
};

export type BlogPost = {
  __typename?: "BlogPost";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["String"]>;
  thumbnailImageUrl?: Maybe<Scalars["String"]>;
  imageUrl?: Maybe<Scalars["String"]>;
};

export type Todo = {
  __typename?: "Todo";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  completed?: Maybe<Scalars["Boolean"]>;
};

export type Movie = {
  __typename?: "Movie";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  overview?: Maybe<Scalars["String"]>;
  posterURL?: Maybe<Scalars["String"]>;
  rating?: Maybe<Scalars["Int"]>;
  genres?: Maybe<Array<Maybe<Scalars["String"]>>>;
  cast?: Maybe<Array<Maybe<Scalars["String"]>>>;
  directors?: Maybe<Array<Maybe<Scalars["String"]>>>;
};
