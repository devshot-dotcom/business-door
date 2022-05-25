import * as React from "react";
import Loader from "../../src/components/loader";

const TemplateNamePage = React.lazy(() => import("./TemplateName"));

const TemplateName = () => (
  <React.Suspense fallback={<Loader />}>
    <TemplateNamePage />
  </React.Suspense>
);

export default TemplateName;
