import { Hero } from "./hero";
import { Intro } from "./intro";
import { Reason } from "./reason";
import { Tidbits } from "./tidbits";
import { useTitle } from "../../hooks";
import { appName } from "../../helpers/meta";
import { Main, Footer, Sidebar } from "../../components";
import styles from "./landing.module.scss";

const Landing = () => {
  useTitle(
    `${appName} | Digitalize yourself with modern business cards that stand out`
  );

  return (
    <Main className={styles.landing}>
      <Hero />
      <Intro />
      <Sidebar bg="default-subtle" bgOnLaptop="default">
        <Tidbits />
      </Sidebar>
      <Reason />
      <Footer />
    </Main>
  );
};

export { Landing };
