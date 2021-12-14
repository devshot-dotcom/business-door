import React from "react";
import "../../sass/Auth.scss";
import ThemeSwitcher from "../ThemeSwitcher";

function Form(props) {
  return (
    <main className="container">
      <article className="background">
        <form onSubmit={props.onSubmit}>
          <div className="flex column gapMedium">{props.children}</div>
        </form>
      </article>
      <ThemeSwitcher />
    </main>
  );
}

export default Form;
