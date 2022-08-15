
import { gql } from '@apollo/client';

export const QUERY_GET_ME = gql`
    query GetMe {
        getMe {
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

