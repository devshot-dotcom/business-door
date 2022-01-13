import { Link } from "react-router-dom";
import illustration from "../../assets/illustrations/monochrome/@x2/boy-waiting-with-cat.png";

function Error404() {
  return (
    <>
      <h2 className="h2">
        Beyond the <span className="color-brand h2">limits</span>
      </h2>
      <p className="paragraph">
        You've come to the wrong place, even we don't dare come here.{" "}
        <Link to={"/home"} replace={true} className="link">
          Take me home
        </Link>
      </p>
      <img
        src={illustration}
        alt="Wonder what went wrong 🤔"
        className="invert-on-dark"
      />
      <p className="small-text color-primary-subtle">
        What you're seeing is a 404 error, displayed when you try to access a
        page that doesn't exist, or when you click a bad link.{" "}
        <span className="bold-text small-text color-primary-subtle">
          sorry 😅
        </span>
      </p>
    </>
  );
}

export { Error404 };
