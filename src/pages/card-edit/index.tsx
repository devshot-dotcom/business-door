import * as React from "react";
import { Loader } from "../../components";

const CardEdit = React.lazy(() => import("./card-edit"));

const CardEditLazy = () => (
  <React.Suspense fallback={<Loader />}>
    <CardEdit />
  </React.Suspense>
);

export default CardEditLazy;
