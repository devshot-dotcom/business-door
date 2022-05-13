import { Avatar } from "../../../../components";
import { AvatarProps } from "../../../../components/types";

const ProfileAvatarDefault = (props: AvatarProps): JSX.Element => (
  <Avatar {...props} size="larger" />
);

export default ProfileAvatarDefault;
