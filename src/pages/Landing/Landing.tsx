import { Hero } from "./Hero";
import { Intro } from "./Intro";
import "./Landing.scss";

const Landing = () => {
  return (
    <main id="landing">
      <Hero />
      <Intro />
    </main>
  );
};

export { Landing };
