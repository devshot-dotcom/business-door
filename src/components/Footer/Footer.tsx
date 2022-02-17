import { Button, Icon, Logo } from "../components";
import { authorEmail, authorSite } from "../../helpers/meta";
import "./Footer.scss";

const Footer = () => {
  function scrollToTop() {
    document.getElementsByClassName("root__main")[0]?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer id="footer">
      <div className="spaced-for-nav">
        <article className="footer__bottom-indicator">
          <div className="text-paragraph">This is the bottom of this page.</div>
          <Button variant="secondary" onClick={scrollToTop}>
            Back to top
          </Button>
        </article>
        <article className="footer__about">
          <Logo />
          <div className="text-smaller">
            Made with <Icon src="❤" size="smaller" color="brand" /> using React.
          </div>
          <div className="text-paragraph">
            For inquiries, contact{" "}
            <a
              href={`mailto://${authorEmail}`}
              className="text-paragraph text-link"
            >
              {authorEmail}
            </a>
          </div>
          <div className="text-paragraph">
            &copy; {new Date().getFullYear()}{" "}
            <a href={authorSite} className="text-paragraph text-link">
              {authorSite}
            </a>
            {", "}
            all rights reserved.
          </div>
        </article>
      </div>
    </footer>
  );
};

export { Footer };
