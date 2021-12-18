import React, { useContext } from "react";
import { AuthContext } from "../config/Context";
import { Navigate } from "react-router-dom";
import { isObjectValid } from "../utils";

function AuthorizedRoute(props) {
  const { user } = useContext(AuthContext);
  return isObjectValid(user) ? props.children : <Navigate to="/" />;
}

export default AuthorizedRoute;
