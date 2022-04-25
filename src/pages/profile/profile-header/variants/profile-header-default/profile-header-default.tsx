import { FC } from "react";
import { ProfileHeaderDefaultProps } from "../..";
import { Profile } from "../../..";
import { NextToNav, Avatar, Badge } from "../../../../../components";
import { getPropsOfLevel } from "../../../../../config";
import "./profile-header-default.scss";

export const ProfileHeaderDefault: FC<ProfileHeaderDefaultProps> = ({
  isLogged,
  data,
}) => {
  const levelProps = getPropsOfLevel(data.level);

  return (
    <header className="profile__header" data-editable="false">
      <Profile.Cover src={data.cover} />
      <NextToNav className="profile__intro-wrapper">
        <div className="profile__intro">
          <Avatar.Profile
            src={data.avatar}
            className={`bd-${levelProps?.COLOR}`}
          />
          <div className="profile__hero">
            {levelProps && (
              <Badge className={`profile__badge bg-${levelProps.COLOR}`}>
                {levelProps.LABEL}
              </Badge>
            )}
            <h1 className="text-h3">{isLogged ? "Welcome" : "Stalkin, eh?"}</h1>
            <div className="text-sub-title text-subtle">{data.fullName}</div>
          </div>
        </div>
      </NextToNav>
    </header>
  );
};
