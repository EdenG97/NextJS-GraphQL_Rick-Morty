import { gql } from "@apollo/client/core";

const GET_CHARACTERS = gql`
  query ($page: Int) {
    characters(page: $page) {
      results {
        id
        image
        name
        status
        gender
        origin {
          name
          dimension
        }
      }
    }
  }
`;

export default GET_CHARACTERS;
