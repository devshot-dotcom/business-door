import LoaderComponent from "./loader";
import KhabyLoader from "./loader-khaby";

const Loader = Object.assign(LoaderComponent, {
  Khaby: KhabyLoader,
});

export default Loader;
