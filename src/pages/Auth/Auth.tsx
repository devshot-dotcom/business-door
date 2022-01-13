import { Flexbox, Card, Logo, Absolute } from "../../components/components";
import { Outlet } from "react-router-dom";
import { ThemeSwitcher } from "../../modules/modules";

function Auth() {
  return (
    <div className="viewport bg-secondary">
      <Flexbox className="min-height-100">
        <Card singular={true}>
          <Logo size="medium" />
          <Outlet />
        </Card>
      </Flexbox>
      <Absolute placement="bottom-right" className="margin-medium">
        <ThemeSwitcher />
      </Absolute>
    </div>
  );
}

export default Auth;
export { Login } from "./Login";
export { Create } from "./Create";
