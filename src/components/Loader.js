import React from "react";
import door from "../assets/brand-rounded.svg";
import "../sass/Loader.scss";

function Loader(props) {
  return (
    <div
      aria-label="Loading, please wait"
      className="Loader"
      hidden={props.hidden}
    >
      <button className="buttonPrimary" onClick={props.onCancel}>
        Cancel
      </button>
      <div className="LoaderIcon">
        <img src={door} alt="Loading..." />
        <h3>Loading...</h3>
      </div>
    </div>
  );
}

export default Loader;
