import * as React from "react";
import { Loader } from "../../components";

const TemplatesComponent = React.lazy(() => import("./card-templates"));

const CardTemplates = () => (
  <React.Suspense fallback={<Loader style={{ height: "100vh" }} />}>
    <TemplatesComponent />
  </React.Suspense>
);

export default CardTemplates;
