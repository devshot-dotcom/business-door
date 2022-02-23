import { Card } from "../../components/components";
import { Outlet } from "react-router-dom";
import { ThemeSwitcher } from "../../modules/modules";
import "./Auth.scss";

function Auth() {
  return (
    <main
      className="auth viewport bg-secondary"
      aria-label="Business door authentication system"
    >
      <div className="auth__card-wrapper">
        <Card className="auth__card">
          <Outlet />
        </Card>
      </div>
      <div className="auth__switch-wrapper" aria-hidden="true">
        <ThemeSwitcher className="auth__switch" />
      </div>
    </main>
  );
}

export { Auth };
export { Login } from "./Login";
export { Create } from "./Create";
