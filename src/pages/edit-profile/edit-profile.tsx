import { Navigate, useOutletContext } from "react-router-dom";
import { Profile, ProfileState } from "../profile";
import { useEditProfileState, useEditProfileForm } from ".";
import { NextToNav, Button } from "../../components";
import "./edit-profile.scss";

const EditProfile = () => {
  const form = useEditProfileForm();
  const { data } = useOutletContext<ProfileState>();

  if (!data) return <Navigate to="/error" />;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [profileState, dispatchProfile] = useEditProfileState(data);

  const fieldsetProps = {
    profileState: profileState,
    dispatchProfile: dispatchProfile,
  };

  return (
    <form onSubmit={(e) => form.onSubmit(e, profileState)}>
      <Profile.Header.Editable {...fieldsetProps} />
      <NextToNav>
        <div className="profile__data">
          <div>
            <h2 className="text-h2">Edit Profile</h2>
            <div className="text-small text-subtle">
              All fields are optional, leave empty fields to remove them.
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
          <div className="profile__grid">
            <Profile.Bio.Editable
              bio={profileState.aboutMe}
              dispatchProfile={dispatchProfile}
            />
            <Profile.Confidential dispatchProfile={dispatchProfile} />
            <Profile.Personal.Editable {...fieldsetProps} />
            <Profile.Additional.Editable {...fieldsetProps} />
          </div>
        </div>
      </NextToNav>
    </form>
  );
};

export default EditProfile;
