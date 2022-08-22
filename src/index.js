import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User
      users: [User!]!
    }

    type User {
      id: ID!
      username: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: '1',
          username: 'johndoe',
        };
      },
      users: () => {
        return [
          {
            id: '1',
            username: 'johndoe',
          },
          {
            id: '2',
            username: 'johndoe2',
          },
          {
            id: '3',
            username: 'johndoe3',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
