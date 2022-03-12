import { useAuthenticator } from "../../hooks";
import illustration from "../../assets/illustrations/monochrome/@x2/lady-employee-working-in-office.png";
import { useNavigate, Link } from "react-router-dom";

function Error419() {
  const navigate = useNavigate();
  const authenticator = useAuthenticator();

  function logout() {
    authenticator.logout({
      onSuccess: () => navigate("/auth", { replace: true }),
    });
  }

  return (
    <>
      <h1 className="h2" aria-hidden={true}>
        Mind <span className="color-brand h2">logging</span> out?
      </h1>
      <p className="paragraph">
        This page is for unauthorized personnel only, please{" "}
        <button onClick={logout} className="link" title="log out">
          log out
        </button>{" "}
        to continue.{" "}
        <Link to={"/home"} replace={true} className="link" title="Take me home">
          Take me home.
        </Link>
      </p>
      <img
        src={illustration}
        alt="Wonder what went wrong 🤔"
        className="invert-on-dark"
      />
      <p className="small-text color-primary-subtle">
        What you're seeing is a{" "}
        <span className="bold-text small-text">419 error,</span> displayed when
        you try to access a page that's only for those who don't have an
        account, or aren't logged in.
      </p>
    </>
  );
}

export { Error419 };
