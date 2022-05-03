import { FC } from "react";
import { AvatarProps } from "..";
import { AvatarComponent } from "../avatar";

export const AvatarProfile: FC<AvatarProps> = (props) => {
  return <AvatarComponent {...props} size="larger" />;
};
