import { Button, NextToNav, ResponsiveImage } from "../../../components";
import { Header } from "../../../components/app";
import waveX1 from "../../../assets/vectors/abstract/wave/wave-full.svg";
import waveX2 from "../../../assets/vectors/abstract/wave/@x2/wave-full.svg";
import waveX3 from "../../../assets/vectors/abstract/wave/@x3/wave-full.svg";
import semis from "../../../assets/vectors/abstract/semis.svg";
import blocks from "../../../assets/vectors/abstract/blocks.svg";
import styles from "./hero.module.scss";
import { routes } from "../../../config";

/** The hero section of the landing page. */
const Hero = () => (
  <section className={styles.hero}>
    <Header />
    <NextToNav className={styles.first}>
      <article>
        <h1 className={`${styles.title} text-h2`}>
          We're the upbringing
          <br />
          of business technologies
        </h1>
        <p className="text-small text-subtle">
          Gone are the days when business cards were considered "paper" &
          "irrelevant".
          <br />
          Digitalize yourself with modern, sleek, & up-to-date cards that stand
          out.
        </p>
        <div className={styles.buttons}>
          <Button as="a" href="#intro">
            Learn More
          </Button>
          <Button as="Link" to={routes.cardTemplates.PATH} variant="tertiary">
            Get Started
          </Button>
        </div>
        <ResponsiveImage
          src={semis}
          filter="brand"
          className={styles["vector-semis"]}
        />
      </article>
    </NextToNav>
    <footer className={styles.last}>
      <ResponsiveImage
        src={blocks}
        filter="tertiary"
        className={styles["vector-blocks"]}
      />
      <ResponsiveImage
        src={waveX1}
        filter="brand"
        srcForMobile={waveX2}
        srcForLaptop={waveX3}
        className={styles["vector-wave"]}
      />
    </footer>
  </section>
);

export default Hero;
