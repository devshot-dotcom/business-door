import { Button } from "../..";
import { SwapperProps } from "./type-swapper-types";

export const TypeSwapper = ({ type, onClick }: SwapperProps) => {
  return (
    <Button
      variant="naked"
      type="button"
      className="text-link"
      onClick={onClick}
      aria-hidden="true"
    >
      {type === "password" ? "Show" : "Hide"}
    </Button>
  );
};
