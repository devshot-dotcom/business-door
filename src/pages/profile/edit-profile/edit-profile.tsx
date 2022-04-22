import { Navigate, useOutletContext } from "react-router-dom";
import { Profile, ProfileState } from "..";
import { useEditProfileState } from ".";
import { Button, NextToNav } from "../../../components";
import "./edit-profile.scss";
import { updateProfile } from "./edit-profile-utils";

const EditProfile = () => {
  const { data } = useOutletContext<ProfileState>();

  if (!data) return <Navigate to="/error" />;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [profileState, dispatchProfile] = useEditProfileState(data);

  return (
    <form onSubmit={(e) => updateProfile(e, profileState)}>
      <Profile.Header.Editable
        profileState={profileState}
        dispatchProfile={dispatchProfile}
      />
      <NextToNav>
        <div className="profile__data">
          <div>
            <h2 className="profile__title">Edit Profile</h2>
            <div className="text-small text-subtle">
              Leave empty fields to remove them.
            </div>
          </div>
          <Button
            type="submit"
            variant="primary"
            data-id="editProfileSaveButton"
            className="hide show-when-vertical-nav-appears"
          >
            Save
          </Button>
          <div className="profile__grid"></div>
        </div>
      </NextToNav>
    </form>
  );
};

export default EditProfile;
