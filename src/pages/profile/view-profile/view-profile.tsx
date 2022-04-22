import { Navigate, useOutletContext } from "react-router-dom";
import { SUPABASE } from "../../../config";
import { isObjectValid } from "../../../helpers";
import { Profile, ProfileState } from "..";
import { NextToNav } from "../../../components";
import "../profile.scss";

export const ViewProfile = () => {
  const { data } = useOutletContext<ProfileState>();

  if (!data) return <Navigate to="/error" />;

  const isLogged = isObjectValid(SUPABASE.auth.user());

  return (
    <>
      <Profile.Header data={data} isLogged={isLogged} />
      <NextToNav>
        <div className="profile__data">
          <h2 className="profile__title">
            {isLogged ? "Your Profile" : "User's Profile"}
          </h2>
          {data.aboutMe && <Profile.Bio bio={data.aboutMe} />}
          <div className="profile__grid">
            <Profile.PersonalInformation isLogged={isLogged} data={data} />
            <Profile.AdditionalInformation data={data.additionalInfo} />
          </div>
        </div>
      </NextToNav>
    </>
  );
};
