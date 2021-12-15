import React, { useContext } from "react";
import { AuthContext } from "../config/Context";
import { Navigate } from "react-router-dom";

function AuthorizedRoute(props) {
  const user = useContext(AuthContext);

  /** @see https://stackoverflow.com/a/32108184/14716989 */
  return user &&
    Object.keys(user).length > 0 &&
    Object.getPrototypeOf(user) === Object.prototype ? (
    props.children
  ) : (
    <Navigate to="/" />
  );
}

export default AuthorizedRoute;
