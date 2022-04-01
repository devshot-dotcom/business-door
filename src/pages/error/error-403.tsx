import { Link } from "react-router-dom";
import { ROUTES } from "../../config";
import styles from "./error.module.scss";

export const Error403 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.content}`}>
        <h1 className={styles.heading}>403</h1>
        <div className={styles.title}>
          We've limited your freedom, restricted access!
        </div>
        <p className="text-paragraph">
          You're not authorized to access this page. Please{" "}
          <Link
            replace
            to={ROUTES.login.path}
            className="text-paragraph text-link"
          >
            log in
          </Link>{" "}
          to continue.
        </p>
      </div>
    </div>
  );
};
