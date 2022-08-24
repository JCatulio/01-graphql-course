import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';
import { context } from './graphql/context';
import { PostsApi } from './graphql/post/datasources';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postApi: new PostsApi(),
    };
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
