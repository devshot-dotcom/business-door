import { FC, useEffect, useState } from "react";
import { AvatarProps } from ".";
import { useApi } from "../../hooks";
import defaultAvatar from "../../assets/avatar.svg";
import { Loader } from "..";
import "./avatar.scss";

export const AvatarComponent: FC<AvatarProps> = (props) => {
  const { src, size = "medium", className = "", ...rest } = props;

  const api = useApi();
  const [imageSrc, setImageSrc] = useState<string>();

  useEffect(() => {
    /* if (!src) {
      setImageSrc(defaultAvatar);
      return;
    }

    api.storage.fetchAvatar(src, {
      onSuccess: (src: Blob) => setImageSrc(URL.createObjectURL(src)),
      onFailure: () => setImageSrc(defaultAvatar),
    }); */

    // For debugging only.
    setImageSrc(defaultAvatar);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  const classes = ["avatar", `avatar-${size}`, className];

  // Apply filter if default.
  if (imageSrc === defaultAvatar) {
    classes.push("avatar-filtered");
  }

  return (
    <div {...rest} className={classes.join(" ")}>
      {imageSrc ? <img src={imageSrc} alt="" /> : <Loader />}
    </div>
  );
};
