import Profile from "../..";
import { useState } from "react";
import { Button, NextToNav } from "../../../../components";
import { getPropsOfLevel } from "../../../../config";
import { EditProfileSubscriber } from "../../../edit-profile";
import "./profile-header-editable.scss";

function ProfileHeaderEditable({
  profileState,
  dispatchProfile,
}: EditProfileSubscriber) {
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
          <Profile.Avatar.Editable
            src={profileState.avatar}
            dispatchProfile={dispatchProfile}
            className={`bd-${levelProps?.COLOR}`}
          />
          <Button
            aria-hidden
            type="submit"
            variant="primary"
            className="profile__button show hide-when-vertical-nav-appears"
          >
            Save
          </Button>
        </div>
      </NextToNav>
    </header>
  );
}

export default ProfileHeaderEditable;
