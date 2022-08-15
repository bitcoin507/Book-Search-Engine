const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
  }

 

  type Query {
    user: [User]
    users(_id: String): [User]
  }

  type Mutation {
    createUser(User: String!): User
    
  }
`;

module.exports = typeDefs;