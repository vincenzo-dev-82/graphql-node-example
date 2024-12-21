import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schemas/schema.js';
import { helloResolver } from './resolvers/helloResolver.js';

// Create Apollo Server instance
const server = new ApolloServer({
    typeDefs,
    resolvers: helloResolver,
});

// Start the server
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});