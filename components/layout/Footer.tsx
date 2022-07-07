import Image from "next/image";
import classes from "./Footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <div className={classes.footer}>
      <div>
        <h2>Made with:</h2>
        <ul>
          <li>
            <Image
              src="/footer-img/Next.png"
              width={250}
              height={120}
            />
          </li>
          <li>
            <Image
              src="/footer-img/TypeScript.png"
              width={250}
              height={120}
            />
          </li>
          <li>
            <Image
              src="/footer-img/GraphQL.png"
              width={250}
              height={120}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
