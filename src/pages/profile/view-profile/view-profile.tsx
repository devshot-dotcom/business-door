import { Navigate, useOutletContext } from "react-router-dom";
import { SUPABASE } from "../../../config";
import { isObjectValid } from "../../../helpers";
import { Profile, ProfileState } from "..";
import "../profile.scss";

export const ViewProfile = () => {
  const { data } = useOutletContext<ProfileState>();

  if (!data) return <Navigate to="/error" />;

  const isLogged = isObjectValid(SUPABASE.auth.user());

  return (
    <div className="profile">
      <Profile.Header data={data} isLogged={isLogged} />
    </div>
  );
};
