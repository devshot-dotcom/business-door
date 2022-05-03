import { ComponentPropsWithoutRef } from "react";

export const TextArea = (props: ComponentPropsWithoutRef<"textarea">) => {
  return <textarea {...props} rows={4} />;
};
