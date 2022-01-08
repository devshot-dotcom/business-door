import { Flexbox, Card, Logo, Absolute } from "../../components/components";
import { Outlet } from "react-router-dom";
import { ThemeSwitcher } from "../../modules/modules";

function Auth() {
  return (
    <div className="viewport bg-secondary">
      <Flexbox justify="center" align="center" className="minHeight-100">
        <Card singular={true}>
          <Logo />
          <Outlet />
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
