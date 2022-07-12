import Head from "next/head";
import CharactersLists from "../components/CharactersLists";
import type { NextPage } from "next";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>The Rick and Morty</title>
      </Head>
      <CharactersLists />
    </Fragment>
  );
};

export default Home;
