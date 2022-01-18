import { Outlet } from "react-router-dom";
import { Card, CardBody } from "../../components/components";

function Error() {
  return (
    <div className="viewport grid-centered bg-secondary">
      <Card singular={true}>
        <CardBody>
          <Outlet />
        </CardBody>
      </Card>
    </div>
  );
}

export { Error };
export { Error403 } from "./Error403";
export { Error404 } from "./Error404";
export { Error419 } from "./Error419";
