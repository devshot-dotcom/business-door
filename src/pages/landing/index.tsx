import * as React from "react";
import { Loader } from "../../components";

const Landing = React.lazy(() => import("./landing"));

function LazyLanding() {
  return (
    <React.Suspense fallback={<Loader />}>
      <Landing />
    </React.Suspense>
  );
}

export default LazyLanding;
