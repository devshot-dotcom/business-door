import * as React from "react";
import { Loader } from "../../components";

// Lazy load the edit profile component.
const EditProfileComponent = React.lazy(() => import("./edit-profile"));

const EditProfile = () => (
  <React.Suspense fallback={<Loader />}>
    <EditProfileComponent />
  </React.Suspense>
);

export default EditProfile;
export * from "./edit-profile-types";
export * from "./edit-profile-utils";
