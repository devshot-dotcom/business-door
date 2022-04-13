import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { NextToNav } from "..";
import { Button, Icon, Logo } from "../..";
import { env } from "../../../config";
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
          <div className="text-small">
            Made with <Icon src={faHeart} size="small" color="brand" /> using
            React.
          </div>
          <div className="text-paragraph">
            For inquiries, contact{" "}
            <a
              href={`mailto://${env.author.EMAIL}`}
              className="text-paragraph text-link"
            >
              {env.author.EMAIL}
            </a>
          </div>
          <div className="text-paragraph">
            &copy; {new Date().getFullYear()}{" "}
            <a href={env.author.site.URL} className="text-paragraph text-link">
              {env.author.site.NAME}
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
