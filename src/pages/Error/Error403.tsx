import { Link } from "react-router-dom";
import illustration from "../../assets/illustrations/monochrome/@x2/bald-man-listening-to-gramophone.png";

function Error403() {
  return (
    <>
      <h2 className="h2">Hey, who're you?</h2>
      <p className="paragraph">
        You're not authorized to access this page. Please{" "}
        <Link to={"/auth"} replace={true} className="link">
          log in.
        </Link>{" "}
        Otherwise, you can just{" "}
        <Link to={"/home"} replace={true} className="link">
          go home.
        </Link>
      </p>
      <img
        src={illustration}
        alt="Wonder what went wrong 🤔"
        className="invert-on-dark"
      />
      <p className="small-text color-primary-subtle">
        What you're seeing is a 403 error, displayed when you try to access a
        page that requires authorization, while you're not authorized.
      </p>
    </>
  );
}

export { Error403 };
