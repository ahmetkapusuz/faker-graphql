# Faker GraphQL

## About The Project

This is a GraphQL server application that generates random data using [faker.js](https://github.com/marak/Faker.js/) library.

You can clone this repository to your local machine and easily start using by following instructions below.

Demo application: https://faker-graphql.herokuapp.com

### Built With

- [TypeScript](https://www.typescriptlang.org/)
- [Faker.js](https://github.com/marak/Faker.js/)
- [Apollo Server](https://github.com/apollographql/apollo-server)
- [GraphQL](https://graphql.org/)

## Installation

You can use `yarn` or `npm install` command to install dependencies.

## Start on Development Mode

You can start the server in development mode by running the command below.

`yarn start:dev`

or

`npm run start:dev`

## Build

You can build the project with `yarn build` or `npm run build` command.

## Start

You can start the built server with `yarn start` or `npm start` command.

## Usage

After you run the project and go to http://localhost:4000, you will be able to see Apollo server GraphQL playground. You can use any supported query to generate fake data and you can easily use this server on your example applications and tutorials.

### Queries

You can always see all available queries and types in the [schema](https://github.com/ahmetkapusuz/faker-graphql/blob/master/src/schema/schema.graphql). Please refer to the schema for the most up to date version of queries and types.

- `user: User`
- `users(count: Int): [User]`
- `address: Address`
- `blogPost: BlogPost`
- `blogPosts(count: Int): [BlogPost]`
- `todo: Todo`
- `todos(count: Int): [Todo]`

**Example users query:**

```javascript
{
  users(count: 3) {
    id
    firstName
    lastName
  }
}
```

**Example response:**

```json
{
  "data": {
    "users": [
      {
        "id": "50f94a19-c09e-4e9f-844c-e85a0e8dbff0",
        "firstName": "Darlene",
        "lastName": "Heidenreich"
      },
      {
        "id": "334df302-6c2e-43bf-882a-86ca688963f0",
        "firstName": "Felipa",
        "lastName": "Harris"
      },
      {
        "id": "9613df7f-fca2-42cd-afa3-3e75a33daffc",
        "firstName": "Russell",
        "lastName": "Klein"
      }
    ]
  }
}
```

## Roadmap

See the [open issues](https://github.com/ahmetkapusuz/faker-graphql/issues).

## Contributing

Please feel free to make contributions, any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/newFakeData`)
3. Commit your Changes (`git commit -m 'Add some new fake data'`)
4. Push to the Branch (`git push origin feature/newFakeData`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Ahmet Kapusuz - [@ahmetkapusuz1](https://twitter.com/ahmetkapusuz1) - ahmetkapusuz@gmail.com
