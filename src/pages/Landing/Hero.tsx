import { Button, Logo } from "../../components/components";
import { Vector } from "../../components/Vector/Vector";
import waveX1 from "../../assets/vectors/abstract/wave/wave@x1.svg";
import waveX2 from "../../assets/vectors/abstract/wave/wave@x2.svg";
import semis from "../../assets/vectors/abstract/semis.svg";
import blocks from "../../assets/vectors/abstract/blocks.svg";

/** The hero section of the landing page. */
export const Hero = () => {
  return (
    <section id="hero">
      <div className="spaced-for-nav">
        <header>
          <Logo size="large" />
        </header>
        <article>
          <h1 className="hero__title text-h2">
            We're the upbringing
            <br />
            of business technologies
          </h1>
          <p className="hero__tagLine text-paragraph text-subtle">
            Gone are the days when business cards were considered "paper" &
            "irrelevant".
            <br />
            Digitalize yourself with modern, sleek, & up-to-date cards that
            stand out.
          </p>
          <div className="hero__buttons">
            <Button>Create a Card</Button>
            <Button variant="tertiary">Browse Templates</Button>
          </div>
          <Vector src={semis} id="vectorSemis" />
        </article>
      </div>
      <footer>
        <Vector src={blocks} color="tertiary" id="vectorBlocks" />
        <Vector
          src={waveX1}
          srcForMobile={waveX2}
          color="brand"
          id="vectorWave"
        />
      </footer>
    </section>
  );
};
