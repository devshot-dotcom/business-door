import { Hero } from "./hero";
import { Intro } from "./intro";
import { Reason } from "./reason";
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
      <Sidebar
        variant="tidbits"
        rwd={{ bg: "default-subtle", bgOnLaptop: "default" }}
      />
      <Reason />
      <Footer />
    </>
  );
};

export { Landing };
