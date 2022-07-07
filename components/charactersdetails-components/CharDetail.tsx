import Image from "next/image";
import classes from "./CharDetail.module.css";

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
    };
  };
};

const CharDetail = ({
  charactersData,
}: Data): JSX.Element => {
  return (
    <div className={classes["detail-container"]}>
      <Image
        src={charactersData.character.image}
        width={250}
        height={250}
        priority
      />
      <div className={classes["detail-info"]}>
        <ul>
          <li>Name</li>
          <li>Gender</li>
          <li>Species</li>
          <li>Location</li>
        </ul>
        <ul>
          <li>{charactersData.character.name}</li>
          <li>{charactersData.character.gender}</li>
          <li>{charactersData.character.species}</li>
          <li>{charactersData.character.location.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default CharDetail;
