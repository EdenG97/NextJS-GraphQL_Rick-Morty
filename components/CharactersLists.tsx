import classes from "./CharactersLists.module.css";
import Paginate from "./ui/Paginate";
import LoadingSpinner from "./ui/LoadingSpinner";
import CharLists from "./characterslists-components/CharLists";
import { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";

const CharactersLists = (): JSX.Element => {
  const [pages, setPages] = useState<number>(1);
  const { data, loading, error } = useCharacters(pages);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <section>
      <div className={classes["items-container"]}>
        <CharLists data={data?.characters} />
        <Paginate
          info={data?.characters.info.pages}
          page={pages}
          setPage={setPages}
        />
      </div>
    </section>
  );
};

export default CharactersLists;
