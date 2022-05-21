import * as React from "react";
import { Loader } from "../../components";

const CardNew = React.lazy(() => import("./card-new"));

const CardNewLazy = () => (
  <React.Suspense fallback={<Loader />}>
    <CardNew />
  </React.Suspense>
);

export default CardNewLazy;
