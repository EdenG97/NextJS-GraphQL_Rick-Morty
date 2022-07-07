import BackButton from "./charactersdetails-components/BackButton";
import CharDetail from "./charactersdetails-components/CharDetail";
import CharEpisode from "./charactersdetails-components/CharEpisode";

type Data = {
  charactersData: {
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

const CharactersDetail = ({
  charactersData,
}: Data): JSX.Element => {
  return (
    <div>
      <BackButton />
      <CharDetail charactersData={charactersData} />
      <CharEpisode charactersEpisode={charactersData} />
    </div>
  );
};

export default CharactersDetail;
