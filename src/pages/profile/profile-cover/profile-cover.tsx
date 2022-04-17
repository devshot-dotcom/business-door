import { FC } from "react";
import { BREAKPOINTS } from "../../../config";
import { CoverProps } from ".";
import "./profile-cover.scss";

export const ProfileCover: FC<CoverProps> = ({
  src = "background-05.png",
  onClick,
}) => {
  const dirName = "assets/backgrounds";

  return (
    <div className="profile__cover" onClick={onClick}>
      <picture>
        <source
          media={`(min-width: ${BREAKPOINTS.DESKTOP.px})`}
          srcSet={require(`../../../${dirName}/@large/${src}`).default}
        />
        <source
          media={`(min-width: ${BREAKPOINTS.TABLET.px})`}
          srcSet={require(`../../../${dirName}/${src}`).default}
        />
        <img
          src={require(`../../../${dirName}/@small/${src}`).default}
          alt=""
        />
      </picture>
    </div>
  );
};
