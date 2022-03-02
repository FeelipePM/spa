import { gql } from "@apollo/client";

export const AUTH_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $password: String!
    $birthDate: String
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      birthDate: $birthDate
    ) {
      name
      email
      password
      age
      birthDate
    }
  }
`;
