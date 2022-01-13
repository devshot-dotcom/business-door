import { Outlet } from "react-router-dom";
import { Absolute, Card, CardBody, Flexbox } from "../../components/components";
import { ThemeSwitcher } from "../../modules/ThemeSwitcher";

function Error() {
  return (
    <div className="viewport bg-secondary">
      <Flexbox className="min-height-100">
        <Card singular={true}>
          <CardBody>
            <Outlet />
          </CardBody>
        </Card>
      </Flexbox>
      <Absolute placement="bottom-right" className="margin-medium">
        <ThemeSwitcher />
      </Absolute>
    </div>
  );
}

export { Error };
export { Error403 } from "./Error403";
export { Error404 } from "./Error404";
export { Error419 } from "./Error419";
