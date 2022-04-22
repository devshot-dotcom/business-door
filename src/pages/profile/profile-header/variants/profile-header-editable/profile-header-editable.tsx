import { FC, useState } from "react";
import { ProfileHeaderEditableProps } from "../..";
import { Profile } from "../../..";
import {
  NextToNav,
  Avatar,
  Badge,
  Modal,
  Button,
} from "../../../../../components";
import { getPropsOfLevel } from "../../../../../config";
import "./profile-header-editable.scss";

export const ProfileHeaderEditable: FC<ProfileHeaderEditableProps> = ({
  profileState,
  dispatchProfile,
}) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const hideCoverModal = () => setIsModalShown(false);
  const showCoverModal = () => setIsModalShown(true);

  const levelProps = getPropsOfLevel(profileState.level);

  return (
    <header className="profile__header">
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
