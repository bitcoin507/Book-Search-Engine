const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    users: [User!]!
    me: User
    user(id: ID!): User


    }
    type Mutation {
        login(email: String!, password: String!): AuthPayload!
        addUser(name: String!):AuthPayload! 
        saveBook(id: ID!): User
        removeBook(id: ID!): User


  type User {
    id: ID!
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book!]!
    }

    type Book {
        bookId: ID!
        authors: String!
        description: String!
        title: String!
        image: String!
        link: String!
    }
    type AuthPayload {
        user: User!
        token: String!
    }
`;

module.exports = typeDefs;