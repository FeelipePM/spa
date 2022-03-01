import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      name
      email
      birthDate
      age
    }
  }
`;

export const getUser = (variables) => {
  const params = useQuery(GET_USER, { variables });

  return params;
};
