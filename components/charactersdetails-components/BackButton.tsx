import classes from "./BackButton.module.css";
import { useRouter } from "next/router";

const BackButton = (): JSX.Element => {
  const router = useRouter();

  const backHandler = () => {
    router.push("/");
  };

  return (
    <button
      className={classes.button}
      onClick={backHandler}
    >
      Back
    </button>
  );
};

export default BackButton;
