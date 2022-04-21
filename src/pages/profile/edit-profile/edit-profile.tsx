import { Navigate, useOutletContext } from "react-router-dom";
import { Profile, ProfileState } from "..";
import { useEditProfileState } from ".";
import "./edit-profile.scss";

const EditProfile = () => {
  const { data } = useOutletContext<ProfileState>();

  if (!data) return <Navigate to="/error" />;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [profileState, dispatchProfile] = useEditProfileState(data);

  return (
    <div className="profile">
      <Profile.Header.Editable
        profileState={profileState}
        dispatchProfile={dispatchProfile}
      />
    </div>
  );
};

export default EditProfile;
