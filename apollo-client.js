// apollo-client.js (React 없이 GraphQL 요청)
import { request, gql } from 'graphql-request';

// GraphQL 서버 URL
const endpoint = 'http://localhost:4000';

// Define the query
const query = gql`
    query {
        hello
    }
`;

// Execute the query
request(endpoint, query)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
