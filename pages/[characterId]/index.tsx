import { gql } from "@apollo/client";
import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { useEffect, useState } from "react";
import CharactersDetail from "../../components/CharactersDetail";
import client from "../../graphql/client";

const Detail: NextPage<any> = ({ data }: any) => {
  const [dataChar, setDataChar] = useState(data);

  useEffect(() => {
    setDataChar(data);
  }, [data]);

  return <CharactersDetail charactersData={dataChar} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        characters {
          results {
            id
          }
        }
      }
    `,
  });

  const path = data.characters.results[0].id;

  return {
    paths: [
      {
        params: { characterId: path },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (
  context
) => {
  const ids = context.params?.characterId;
  const { data } = await client.query({
    query: gql`
      query Detail($id: ID!) {
        character(id: $id) {
          id
          image
          name
          gender
          status
          species
          episode {
            name
            air_date
            episode
          }
        }
      }
    `,
    variables: { id: ids },
  });

  return {
    props: {
      data,
    },
  };
};

export default Detail;
