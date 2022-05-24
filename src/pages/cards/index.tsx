import * as React from "react";
import { Loader } from "../../components";

const CardsComponent = React.lazy(() => import("./cards"));

const Cards = () => (
  <React.Suspense fallback={<Loader />}>
    <CardsComponent />
  </React.Suspense>
);

export default Cards;
