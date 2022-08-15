import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
        }
    }
`;

export const ADD_USER = gql`
    mutation AddUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            id
            username
            email
            savedBooks {
                id
                title
                author
                description
                image
                link
            }
        }
    }
`;
export const SAVE_BOOK = gql`
    mutation SaveBook($bookId: ID!) {
        saveBook(bookId: $bookId) {

            id
            title
            author
            description
            image
            link
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation DeleteBook($bookId: ID!) {
        deleteBook(bookId: $bookId) {
            id
            title
            author
            description
            image
            link
        }
    }
`;

