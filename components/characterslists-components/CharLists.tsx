import Image from "next/image";
import Link from "next/link";
import classes from "./CharLists.module.css";

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

type Data = {
  data: any;
};

const CharLists = ({ data }: Data): JSX.Element => {
  return (
    <ul className={classes["char-list"]}>
      {data.results.map((char: Characters) => (
        <Link key={char.id} href={`/${char.id}`}>
          <a>
            <li
              className={classes["items-wrapper"]}
              key={char.id}
            >
              <Image
                src={char.image}
                alt={char.name}
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
      ))}
    </ul>
  );
};

export default CharLists;
