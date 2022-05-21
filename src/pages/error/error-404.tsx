import { Link } from "react-router-dom";
import { routes } from "../../config";
import styles from "./error.module.scss";

const Error404 = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <h1 className={styles.heading}>404</h1>
      <div className={styles.title}>You've come to the wrong place!</div>
      <p className="text-paragraph">
        Nobody resides here, even we didn't know of this place's existence,{" "}
        <Link
          to={routes.landing.PATH}
          replace={true}
          className="text-paragraph text-link"
        >
          let's go home.
        </Link>
      </p>
    </div>
  </div>
);

export default Error404;
