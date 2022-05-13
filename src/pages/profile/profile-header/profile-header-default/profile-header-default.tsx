import { Profile } from "../../..";
import { ProfileHeaderDefaultProps } from "..";
import { NextToNav, Badge, Button } from "../../../../components";
import { getPropsOfLevel, routes } from "../../../../config";
import "./profile-header-default.scss";

function ProfileHeaderDefault({ isLogged, data }: ProfileHeaderDefaultProps) {
  const levelProps = getPropsOfLevel(data.level);

  return (
    <header className="profile__header" data-editable="false">
      <Profile.Cover src={data.cover} />
      <NextToNav className="profile__intro-wrapper">
        <div className="profile__intro">
          <Profile.Avatar
            src={data.avatar}
            className={`bd-${levelProps?.COLOR}`}
          />
          <Button
            as="Link"
            variant="primary"
            to={routes.editProfile.PATH}
            style={{ width: "auto" }}
            className="profile__button show hide-when-vertical-nav-appears"
          >
            Edit
          </Button>
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
}

export default ProfileHeaderDefault;
