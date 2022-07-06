import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query Page($page: Int) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        id
        species
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

export const useCharacters = (page: number) => {
  const { data, error, loading } = useQuery(
    GET_CHARACTERS,
    {
      variables: { page },
    }
  );

  return {
    data,
    error,
    loading,
  };
};
