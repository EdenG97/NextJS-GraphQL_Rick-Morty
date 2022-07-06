import Image from "next/image";
import classes from "./CharactersLists.module.css";
import Link from "next/link";
import Paginate from "./ui/Paginate";
import LoadingSpinner from "./ui/LoadingSpinner";
import { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";

type Characters = {
  id: string;
  gender: string;
  species: string;
  name: string;
  image: string;
  status: string;
  origin: {
    name: string;
    dimension: string;
  };
};

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
        <ul>
          {data?.characters.results.map(
            (char: Characters) => (
              <Link key={char.id} href={`/${char.id}`}>
                <a>
                  <li
                    className={classes["items-wrapper"]}
                    key={char.id}
                  >
                    <Image
                      src={char.image}
                      width={400}
                      height={400}
                      priority
                    />
                    <div className={classes["items-info"]}>
                      <h2>{char.name}</h2>
                      <div>
                        <span
                          className={
                            char.status === "Dead"
                              ? `${classes.status} ${classes.dead}`
                              : classes.status
                          }
                        />
                        {char.status} - {char.species}
                      </div>
                      <div className={classes.origin}>
                        <h4>Origin location:</h4>
                        <p>{char.origin.name}</p>
                      </div>
                      <div className={classes.origin}>
                        <h4>Origin dimension:</h4>
                        {char.origin.dimension === null ||
                        char.origin.dimension === "" ? (
                          <p>unknown</p>
                        ) : (
                          <p>{char.origin.dimension}</p>
                        )}
                      </div>
                    </div>
                  </li>
                </a>
              </Link>
            )
          )}
        </ul>
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
