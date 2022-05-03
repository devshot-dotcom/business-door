import { Button, Link, NextToNav } from "../../../components";
import { Vector } from "../../../components/Vector/Vector";
import waveX1 from "../../../assets/vectors/abstract/wave/wave-full.svg";
import waveX2 from "../../../assets/vectors/abstract/wave/@x2/wave-full.svg";
import waveX3 from "../../../assets/vectors/abstract/wave/@x3/wave-full.svg";
import semis from "../../../assets/vectors/abstract/semis.svg";
import blocks from "../../../assets/vectors/abstract/blocks.svg";
import styles from "./hero.module.scss";
import { Header } from "../../../components/app";

/** The hero section of the landing page. */
export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Header />
      <NextToNav className={styles.first}>
        <article>
          <h1 className={`${styles.title}  text-h2`}>
            We're the upbringing
            <br />
            of business technologies
          </h1>
          <p className="text-small text-subtle">
            Gone are the days when business cards were considered "paper" &
            "irrelevant".
            <br />
            Digitalize yourself with modern, sleek, & up-to-date cards that
            stand out.
          </p>
          <div className={styles.buttons}>
            <Link variant="primary" scrollTo="intro">
              Learn More
            </Link>
            <Button variant="tertiary">Get Started</Button>
          </div>
          <Vector src={semis} className={styles["vector-semis"]} />
        </article>
      </NextToNav>
      <footer className={styles.last}>
        <Vector
          src={blocks}
          color="tertiary"
          className={styles["vector-blocks"]}
        />
        <Vector
          src={waveX1}
          srcForMobile={waveX2}
          srcForLaptop={waveX3}
          color="brand"
          className={styles["vector-wave"]}
        />
      </footer>
    </section>
  );
};
