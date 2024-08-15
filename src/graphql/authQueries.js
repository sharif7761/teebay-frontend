import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation Mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            userId
            token
        }
    }
`;

export const REGISTER_USER = gql`
    mutation Mutation($registerInput: RegisterInput) {
      register(registerInput: $registerInput) {
        id
        firstName
        lastName
        address
        email
        phone
        createdAt
        updatedAt
      }
    }
`;