import classes from "./CharEpisode.module.css";
import { useState } from "react";

type Episode = {
  charactersEpisode: {
    character: {
      episode: {
        name: string;
        air_date: string;
        episode: string;
      }[];
    };
  };
};

const CharEpisode = ({
  charactersEpisode,
}: Episode): JSX.Element => {
  const [view, setView] = useState(false);

  const viewEpsHandler = () => {
    setView(!view);
  };

  return (
    <div className={classes.container}>
      <button onClick={viewEpsHandler}>
        {view ? "Close Episode" : "View Episode"}
      </button>
      {view && (
        <div className={classes["eps-container"]}>
          {charactersEpisode.character.episode.map(
            (eps) => (
              <div
                className={classes["eps-wrapper"]}
                key={eps.name}
              >
                <div>
                  <h2>{eps.episode}</h2>
                  <h4>{eps.air_date}</h4>
                </div>
                <p>{eps.name}</p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default CharEpisode;
