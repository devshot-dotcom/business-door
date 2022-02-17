import { Hero } from "./Hero";
import { Intro } from "./Intro";
import { Reason } from "./Reason";
import { Sidebar } from "./Sidebar";
import { Footer } from "../../components/Footer/Footer";
import { useTitle } from "../../hooks/hooks";
import "./Landing.scss";
import { appName } from "../../helpers/meta";

const Landing = () => {
  useTitle(`Welcome to ${appName}`);
  return (
    <main id="landing" className="root__main">
      <Hero />
      <Intro />
      <Sidebar />
      <Reason />
      <Footer />
    </main>
  );
};

export { Landing };
