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
              alt="NextJS"
              width={250}
              height={120}
            />
          </li>
          <li>
            <Image
              src="/footer-img/TypeScript.png"
              alt="TypeScript"
              width={250}
              height={120}
            />
          </li>
          <li>
            <Image
              src="/footer-img/GraphQL.png"
              alt="GraphQL - Apollo Client"
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
