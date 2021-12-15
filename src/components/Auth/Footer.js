import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Footer(props) {
  const navigate = useNavigate();

  const generateLink = () => {
    if (props.link.external) {
      return <a href={props.link.to}>{props.link.label}</a>;
    }

    if (props.link.backwards) {
      return (
        <button className="link" onClick={() => navigate(-1)}>
          {props.link.label}
        </button>
      );
    }

    return <Link to={props.link.to}>{props.link.label}</Link>;
  };

  return (
    <footer className="flex gapSmaller">
      <div className="smallText">{props.text}</div>
      {generateLink()}
    </footer>
  );
}

export default Footer;
