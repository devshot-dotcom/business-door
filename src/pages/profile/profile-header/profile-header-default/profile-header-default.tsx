import { Profile } from "../../..";
import { ProfileHeaderDefaultProps } from "..";
import { NextToNav, Badge, Button } from "../../../../components";
import { getPropsOfLevel, routes } from "../../../../config";
import { useLogout, useToast } from "../../../../hooks";
import { useNavigate } from "react-router";
import { copyText } from "../../../../helpers";
import "./profile-header-default.scss";

function ProfileHeaderDefault({ isLogged, data }: ProfileHeaderDefaultProps) {
  const logout = useLogout();
  const makeToast = useToast();
  const navigate = useNavigate();
  const levelProps = getPropsOfLevel(data.level);

  return (
    <header className="profile__header" data-editable="false">
      <Profile.Cover src={data.cover} />
      <NextToNav className="profile__intro-wrapper">
        {/* Logout and Login buttons */}
        {isLogged ? (
          <Button
            size="small"
            variant="tertiary"
            onClick={() => logout()}
            className="position-absolute w-auto top-0 end-0 mt-3 me-3"
          >
            Log out
          </Button>
        ) : (
          <Button
            size="small"
            variant="primary"
            onClick={() => navigate(routes.login.PATH)}
            className="position-absolute w-auto top-0 end-0 mt-3 me-3"
          >
            Log in
          </Button>
        )}

        {/* Share profile button */}
        {isLogged && (
          <Button
            size="small"
            variant="tertiary"
            onClick={() => {
              if (copyText(window.location.href)) {
                makeToast({
                  variant: "valid",
                  title: "Link to profile copied to clipboard",
                });
              } else
                makeToast({
                  variant: "invalid",
                  title: "Failed to share profile!",
                });
            }}
            className="position-absolute w-auto top-0 start-0 mt-3 ms-3"
          >
            Share
          </Button>
        )}

        <div className="profile__intro">
          <Profile.Avatar
            src={data.avatar}
            className={`bd-${levelProps?.COLOR}`}
          />
          {isLogged && (
            <Button
              as="Link"
              variant="primary"
              to={routes.editProfile.PATH}
              style={{ width: "auto" }}
              className="profile__button show hide-when-vertical-nav-appears"
            >
              Edit
            </Button>
          )}
          <div className="profile__hero">
            {levelProps && (
              <Badge className={`profile__badge bg-${levelProps.COLOR}`}>
                {levelProps.LABEL}
              </Badge>
            )}
            <h1 className="text-h3">
              {isLogged ? "Welcome" : "Stalking, eh?"}
            </h1>
            <div className="text-sub-title text-subtle">{data.fullName}</div>
          </div>
        </div>
      </NextToNav>
    </header>
  );
}

export default ProfileHeaderDefault;
