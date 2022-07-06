type Episode = {
  name: string;
  air_date: string;
  episode: string;
};

type Char = {
  id: string;
  image: string;
  name: string;
  gender: string;
  status: string;
  species: string;
  episode: Episode;
};

const CharactersDetail = ({ charactersData }: any) => {
  return (
    <div>
      <h1>{charactersData.character.name}</h1>
    </div>
  );
};

export default CharactersDetail;
