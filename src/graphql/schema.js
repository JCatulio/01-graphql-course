import { gql } from 'apollo-server';

const rootTypeDefs = gql`
  type Query {
    hi: String
    # user: User
    # users: [User!]!
  }
`;

const rootResolvers = {
  Query: {
    hi: () => 'hi again',
    //     user: () => {
    //       return {
    //         id: '1',
    //         username: 'johndoe',
    //       };
    //     },
    //     users: () => {
    //       return [
    //         {
    //           id: '1',
    //           username: 'johndoe',
    //         },
    //         {
    //           id: '2',
    //           username: 'johndoe2',
    //         },
    //         {
    //           id: '3',
    //           username: 'johndoe3',
    //         },
    //       ];
    //     },
  }
}

export const typeDefs = [rootTypeDefs];
export const resolvers = [rootResolvers];

