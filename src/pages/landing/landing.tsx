import { Hero } from "./hero";
import { Intro } from "./intro";
import { Reason } from "./reason";
import { Tidbits } from "./tidbits";
import { useTitle } from "../../hooks";
import { appName } from "../../helpers/meta";
import { Footer, Sidebar } from "../../components";

const Landing = () => {
  useTitle(
    `${appName} | Digitalize yourself with modern business cards that stand out`
  );

  return (
    <>
      <Hero />
      <Intro />
      <Sidebar bg="default-subtle" bgOnLaptop="default">
        <Tidbits />
      </Sidebar>
      <Reason />
      <Footer />
    </>
  );
};

export { Landing };
