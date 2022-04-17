import { FC } from "react";
import { ProfileHeaderEditableProps } from "../..";
import { Profile } from "../../..";
import { NextToNav, Avatar, Badge, Modal } from "../../../../../components";
import { getPropsOfLevel } from "../../../../../config";
import "./profile-header-editable.scss";

export const ProfileHeaderEditable: FC<ProfileHeaderEditableProps> = ({
  state,
  dispatch,
}) => {
  const levelProps = getPropsOfLevel(state.level);

  return (
    <header className="profile__header">
      <Profile.Cover src={state.cover} />
      <Modal isOpen />
      <Badge id="coverEditButton" className="bg-tertiary">
        Change
      </Badge>
      <NextToNav className="profile__intro-wrapper">
        <div className="profile__intro">
          <Avatar.Profile
            src={state.avatar}
            className={`bd-${levelProps?.COLOR}`}
          />
          {/* <div className="profile__hero">
            {levelProps && (
              <Badge className={`profile__badge bg-${levelProps.COLOR}`}>
                {levelProps.LABEL}
              </Badge>
            )}
            <h1 className="text-h3">{isLogged ? "Welcome" : "Stalkin, eh?"}</h1>
            <div className="text-sub-title text-subtle">{state.fullName}</div>
          </div> */}
        </div>
      </NextToNav>
    </header>
  );
};
