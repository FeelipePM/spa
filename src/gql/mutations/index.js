import { gql } from "@apollo/client";

const AUTH_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

export { AUTH_USER };
