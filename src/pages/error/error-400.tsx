import { Link } from "react-router-dom";
import { routes } from "../../config";
import styles from "./error.module.scss";

const Error400 = () => (
  <div className={styles.wrapper}>
    <div className={`${styles.content}`}>
      <h1 className={styles.heading}>400</h1>
      <div className={styles.title}>Something went wrong!</div>
      <p className="text-paragraph">
        Right, something really didn't go well, neither for us, nor for you.
        What's next,{" "}
        <Link
          replace
          to={routes.landing.PATH}
          className="text-paragraph text-link"
        >
          Home?
        </Link>{" "}
      </p>
    </div>
  </div>
);

export default Error400;
