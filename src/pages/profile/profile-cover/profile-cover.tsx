import { BREAKPOINTS } from "../../../config";
import { profileConfig } from "..";
import { CoverProps } from ".";
import "./profile-cover.scss";

function ProfileCoverComponent({
  src = profileConfig.DEFAULT_COVER,
}: CoverProps) {
  const dirName = "assets/backgrounds";

  return (
    <div className="profile__cover" aria-hidden>
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
}

export default ProfileCoverComponent;
