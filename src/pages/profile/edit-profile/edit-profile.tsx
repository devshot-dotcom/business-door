import { Navigate, useOutletContext } from "react-router-dom";
import { Profile, ProfileState } from "..";
import { useEditProfileState } from ".";
import { Button, TextField, Menu, NextToNav } from "../../../components";
import { updateProfile } from "./edit-profile-utils";
import { Fieldset } from "./fieldset";
import "./edit-profile.scss";

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
            <h2 className="text-h2">Edit Profile</h2>
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
          <div className="profile__grid">
            <Fieldset.Bio
              bio={profileState.aboutMe}
              dispatchProfile={dispatchProfile}
            />
            <Menu title="Confidential Information">
              <TextField
                as="input"
                state={{
                  value: profileState.aboutMe!,
                  variant: "default",
                }}
              />
            </Menu>
            <Menu title="Personal Information">
              <TextField
                as="input"
                state={{
                  value: data.aboutMe!,
                  variant: "default",
                }}
              />
              <TextField
                as="input"
                state={{
                  value: data.aboutMe!,
                  variant: "default",
                }}
              />
              <TextField
                as="input"
                state={{
                  value: data.aboutMe!,
                  variant: "default",
                }}
              />
              <TextField
                as="input"
                state={{
                  value: data.aboutMe!,
                  variant: "default",
                }}
              />
            </Menu>
            <Menu title="Additional Information">
              <TextField
                as="input"
                state={{
                  value: data.aboutMe!,
                  variant: "default",
                }}
              />
              <TextField
                as="input"
                state={{
                  value: data.aboutMe!,
                  variant: "default",
                }}
              />
              <TextField
                as="input"
                state={{
                  value: data.aboutMe!,
                  variant: "default",
                }}
              />
              <TextField
                as="input"
                state={{
                  value: data.aboutMe!,
                  variant: "default",
                }}
              />
            </Menu>
          </div>
        </div>
      </NextToNav>
    </form>
  );
};

export default EditProfile;
