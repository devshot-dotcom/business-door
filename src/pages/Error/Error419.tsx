import { Link } from "react-router-dom";
import illustration from "../../assets/illustrations/monochrome/@x2/lady-employee-working-in-office.png";

function Error419() {
  return (
    <>
      <h2 className="h2">
        Mind <span className="color-brand h2">logging</span> out?
      </h2>
      <p className="paragraph">
        This page is only for the account-less, please{" "}
        <Link to={"/auth/logout"} replace={true} className="link">
          log out
        </Link>{" "}
        to continue.
      </p>
      <img
        src={illustration}
        alt="Wonder what went wrong 🤔"
        className="invert-on-dark"
      />
      <p className="small-text color-primary-subtle">
        What you're seeing is a 419 error, displayed when you try to access a
        page that's only for those who don't have an account, or aren't logged
        in.
      </p>
    </>
  );
}

export { Error419 };
