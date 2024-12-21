// **apollo-server.js** (GraphQL Server)
const { ApolloServer, gql } = require('apollo-server');

// Define the GraphQL schema
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// Define the resolvers
const resolvers = {
    Query: {
        hello: () => 'Hello, World!',
    },
};

// Create the Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
