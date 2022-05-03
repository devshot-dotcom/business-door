import { useState } from "react";
import { Profile, ProfileChildProps } from "../../..";
import { NextToNav, Avatar, Badge, Button } from "../../../../../components";
import { getPropsOfLevel } from "../../../../../config";
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
      <Badge
        id="coverEditButton"
        className="bg-tertiary"
        style={{ cursor: "pointer" }}
        onClick={showCoverModal}
      >
        Change
      </Badge>
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
