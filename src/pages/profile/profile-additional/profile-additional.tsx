import ProfileAdditionalDefault from "./profile-additional-default";
import ProfileAdditionalEditable from "./profile-additional-editable";
import "./profile-additional.scss";

const AdditionalInfo = Object.assign(ProfileAdditionalDefault, {
  Editable: ProfileAdditionalEditable,
});

export default AdditionalInfo;
