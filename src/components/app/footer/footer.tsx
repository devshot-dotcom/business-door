import { useContext } from "react";
import { NextToNav } from "..";
import { Button, Icon, Logo } from "../..";
import { authorEmail, authorSite } from "../../../helpers/meta";
import { MainContext, MainRef } from "../main";
import styles from "./footer.module.scss";

const Footer = () => {
  const mainRef = useContext<MainRef>(MainContext);

  function scrollToTop() {
    mainRef?.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className={styles.footer}>
      <NextToNav>
        <article className={styles["page-end-indicator"]}>
          <div className="text-paragraph">This is the bottom of this page.</div>
          <Button variant="secondary" onClick={scrollToTop}>
            Back to top
          </Button>
        </article>
        <article className={styles.about}>
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
      </NextToNav>
    </footer>
  );
};

export { Footer };