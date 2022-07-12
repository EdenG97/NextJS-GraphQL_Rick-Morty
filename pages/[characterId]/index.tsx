import CharactersDetail from "../../components/CharactersDetail";
import client from "../../graphql/client";
import Head from "next/head";
import { gql } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import { Fragment, useEffect, useState } from "react";

type Data = {
  data: {
    character: {
      id: string;
      image: string;
      name: string;
      gender: string;
      status: string;
      species: string;
      location: {
        name: string;
      };
      episode: {
        name: string;
        air_date: string;
        episode: string;
      }[];
    };
  };
};

const Detail: NextPage<Data> = ({ data }: Data) => {
  const [dataChar, setDataChar] = useState(data);

  useEffect(() => {
    setDataChar(data);
  }, [data]);

  return (
    <Fragment>
      <Head>
        <title>{dataChar.character.name}</title>
      </Head>
      <CharactersDetail charactersData={dataChar} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps =
  async (context) => {
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
            location {
              name
            }
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
