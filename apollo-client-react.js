// **apollo-client.js** (GraphQL Client)
const { ApolloClient, InMemoryCache, gql } = require('@apollo/client/core');
const { HttpLink } = require('@apollo/client');
const fetch = require('cross-fetch');

// Create the Apollo Client instance
const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000', fetch }),
    cache: new InMemoryCache(),
});

// Define the query
const HELLO_QUERY = gql`
    query {
        hello
    }
`;

// Fetch data from the server
client
    .query({ query: HELLO_QUERY })
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
