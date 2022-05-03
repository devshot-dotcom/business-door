import { lazy, ReactNode, Suspense } from "react";
import { Loader } from "../../components";

const LazyEditProfile = lazy(() => import("./edit-profile"));

export const EditProfile = (
  props: JSX.IntrinsicAttributes & { children?: ReactNode }
) => (
  <Suspense fallback={<Loader />}>
    <LazyEditProfile {...props} />
  </Suspense>
);
