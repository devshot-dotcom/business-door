import Hero from "./hero";
import Intro from "./intro";
import Reason from "./reason";
import { Footer, Sidebar } from "../../components";

function Landing() {
  return (
    <>
      <Hero />
      <Intro />
      <Sidebar
        variant="tidbits"
        rwd={{ onMobile: "default-subtle", onLaptop: "default" }}
      />
      <Reason />
      <Footer />
    </>
  );
}

export default Landing;
