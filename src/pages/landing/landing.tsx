import { Hero } from "./hero";
import { Intro } from "./intro";
import { Reason } from "./reason";
import { useTitle } from "../../hooks";
import { Footer, Sidebar } from "../../components";
import { routes } from "../../config";

const Landing = () => {
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
