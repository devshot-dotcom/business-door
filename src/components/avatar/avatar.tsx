import "./avatar.scss";
import { Loader } from "..";
import { AvatarProps } from ".";
import { useApi } from "../../hooks";
import { useEffect, useState } from "react";
import { StorageApi } from "../../hooks/use-api";
import defaultAvatar from "../../assets/avatar/avatar.png";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * A configurable avatar component.
 * Automatically requests the API's storage bucket to request the provided avatar.
 * @param props
 * @returns {JSX.Element}
 * @version 1.0.1
 * @author kashan-ahmad
 */
function Avatar(props: AvatarProps): JSX.Element {
  const {
    file,
    src,
    editbutton,
    size = "medium",
    className = "",
    ...rest
  } = props;

  const api = useApi("storage") as StorageApi;
  const [imageSrc, setImageSrc] = useState<string>();

  useEffect(() => {
    // In case the file is manually set.
    if (file) {
      setImageSrc(URL.createObjectURL(file));
      return;
    }

    if (!src) {
      setImageSrc(defaultAvatar);
      return;
    }

    api.fetchAvatar(src, {
      onSuccess: (src: Blob) => setImageSrc(URL.createObjectURL(src)),
      onFailure: () => setImageSrc(defaultAvatar),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, file]);

  const classes = ["avatar", `avatar-${size}`, className];

  return (
    <div {...rest} className={classes.join(" ")} aria-hidden>
      {imageSrc ? <img src={imageSrc} alt="" /> : <Loader />}
      {editbutton && (
        <button {...editbutton} id="avatarEditButton">
          <FontAwesomeIcon icon={faEdit} />
        </button>
      )}
    </div>
  );
}

export default Avatar;
