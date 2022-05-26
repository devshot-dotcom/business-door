import * as React from "react";
import { Loader } from "../../../src/components";

const SettingsPage = React.lazy(() => import("./settings"));

const Settings = () => (
  <React.Suspense fallback={<Loader />}>
    <SettingsPage />
  </React.Suspense>
);

export default Settings;
