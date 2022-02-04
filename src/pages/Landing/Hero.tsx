import { Logo, Button } from "../../components/components";
import { Vector } from "../../components/Vector/Vector";
import wave from "../../assets/vectors/abstract/wave.svg";
import semis from "../../assets/vectors/abstract/semis.svg";
import blocks from "../../assets/vectors/abstract/blocks.svg";

/** The hero section of the landing page. */
export const Hero = () => {
  return (
    <section id="hero">
      <header>
        <Logo size="medium" className="align-start" />
      </header>
      <article>
        <h1 className="h2">We're the upbringing of business technologies</h1>
        <p className="paragraph color-primary-subtle">
          Gone are the days when business cards were considered "paper" &
          "irrelevant". Digitalize yourself with modern, sleek, & up-to-date
          cards that stand out.
        </p>
        <Button>Create a Card</Button>
        <Button variant="tertiary">Browse Templates</Button>
        <Vector src={semis} id="vectorSemis" />
        <Vector src={blocks} color="tertiary" id="vectorBlocks" />
      </article>
      <footer>
        <Vector src={wave} color="brand" />
      </footer>
    </section>
  );
};
