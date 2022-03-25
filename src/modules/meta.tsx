import { Outlet } from "react-router-dom";
import { useTitle } from "../hooks";

type Props = {
  title?: string;
};

/**
 * A simple component that sets a page's metadata.
 */
export const Meta = (props: Props) => {
  useTitle(props.title);

  return <Outlet />;
};
