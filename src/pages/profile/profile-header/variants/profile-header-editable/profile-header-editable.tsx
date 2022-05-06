import { useState } from "react";
import { Profile, ProfileChildProps } from "../../..";
import { getPropsOfLevel } from "../../../../../config";
import { NextToNav, Avatar, Button } from "../../../../../components";
import "./profile-header-editable.scss";

export const ProfileHeaderEditable = ({
  profileState,
  dispatchProfile,
}: ProfileChildProps) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const hideCoverModal = () => setIsModalShown(false);
  const showCoverModal = () => setIsModalShown(true);

  const levelProps = getPropsOfLevel(profileState.level);

  return (
    <header className="profile__header" data-editable="true">
      <Profile.Cover src={profileState.cover} />
      <Profile.Cover.Modal
        isOpen={isModalShown}
        cover={profileState.cover}
        onRequestClose={hideCoverModal}
        dispatchProfile={dispatchProfile}
      />
      <Button
        size="small"
        type="button"
        variant="tertiary"
        id="coverEditButton"
        onClick={showCoverModal}
      >
        Change
      </Button>
      <NextToNav className="profile__intro-wrapper">
        <div className="profile__intro">
          <Avatar.Profile
            src={profileState.avatar}
            className={`bd-${levelProps?.COLOR}`}
          />
          <Button
            aria-hidden
            type="submit"
            variant="primary"
            data-id="editProfileSaveButton"
            className="show hide-when-vertical-nav-appears"
          >
            Save
          </Button>
        </div>
      </NextToNav>
    </header>
  );
};
