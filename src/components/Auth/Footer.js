import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="flex gapSmaller">
      <div className="smallText">{props.text}</div>
      <Link to={props.link.to}>{props.link.label}</Link>
    </footer>
  );
}

export default Footer;
