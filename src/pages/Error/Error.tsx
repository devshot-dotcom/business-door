import { Outlet } from "react-router-dom";
import { Card } from "../../components";

function Error() {
  return (
    <div className="viewport grid-centered bg-secondary">
      <Card>
        <Outlet />
      </Card>
    </div>
  );
}

export { Error };
export { Error403 } from "./Error403";
export { Error404 } from "./Error404";
export { Error419 } from "./Error419";
