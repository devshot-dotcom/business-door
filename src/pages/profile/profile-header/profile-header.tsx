import { Avatar, Badge, NextToNav } from "../../../components";
import { Profile, ProfileData } from "..";
import "./profile-header.scss";
import { FC } from "react";
import { getPropsOfLevel } from "../../../config";

type Props = {
  isLogged: boolean;
  data: ProfileData;
};

export const ProfileHeader: FC<Props> = ({ isLogged, data }) => {
  const badgeProps = getPropsOfLevel(data.level);

  return (
    <header className="profile__header">
      <Profile.Cover src={data.cover} />
      <NextToNav className="profile__intro-wrapper">
        <div className="profile__intro">
          <Avatar.Profile src={data.avatar} />
          <div className="profile__hero">
            {badgeProps && (
              <Badge
                backgroundColor={badgeProps.COLOR}
                className="profile__badge"
              >
                {badgeProps.LABEL}
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
