import React, { useContext } from "react";
import { Context } from "../config/Context";
import { Navigate } from "react-router-dom";

function AuthorizedRoute(props) {
  const { isLogged } = useContext(Context).authContext.user;

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  return props.children;
}

export default AuthorizedRoute;
