import React from "react";
import {
  Flexbox,
  Card,
  CardBody,
  Logo,
  Absolute,
} from "../../components/components";
import { Outlet } from "react-router-dom";
import { ThemeSwitcher } from "../../modules/modules";

function Auth() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="viewport bg-secondary">
      <Flexbox justify="center" align="center" className="height-100">
        <Card singular={true}>
          <Logo />
          <form onSubmit={handleSubmit}>
            <CardBody>
              <Outlet />
            </CardBody>
          </form>
        </Card>
      </Flexbox>
      <Absolute placement="bottom-right" className="padding-medium">
        <ThemeSwitcher />
      </Absolute>
    </div>
  );
}

export default Auth;
export { Login } from "./Login";
export { Create } from "./Create";
