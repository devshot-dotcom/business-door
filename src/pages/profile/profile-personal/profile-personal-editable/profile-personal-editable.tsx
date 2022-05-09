import { profileConfig } from "../..";
import { EditProfileChildrenProps as Types } from "../../../edit-profile";
import { Menu, TextCounter, TextField } from "../../../../components";
import { EditProfileActions } from "../../../edit-profile";

export const ProfilePersonalEditable = ({
  profileState,
  dispatchProfile,
}: Types.StateSubscriber) => {
  type PersonalInfoField = {
    label: string;
    value?: string;
    placeholder: string;
    action: EditProfileActions["type"];
    prop: string;
  };

  const fields: PersonalInfoField[] = [
    {
      label: "Full name",
      value: profileState.fullName,
      placeholder: "Enter your full name",
      action: "updateName",
      prop: "fullName",
    },
    {
      label: "Profession",
      value: profileState.profession,
      placeholder: "Enter your profession",
      action: "updateProfession",
      prop: "profession",
    },
    {
      label: "Organization",
      value: profileState.organization,
      placeholder: "Enter your organization",
      action: "updateOrganization",
      prop: "organization",
    },
    {
      label: "City",
      value: profileState.city,
      placeholder: "Enter your city",
      action: "updateCity",
      prop: "city",
    },
    {
      label: "Country",
      value: profileState.country,
      placeholder: "Enter your country",
      action: "updateCountry",
      prop: "country",
    },
  ];

  return (
    <Menu title="Personal Information" className="gap-0">
      {fields.map((field, i) => (
        <Menu.Item direction="column" key={i} className="gap-0">
          <div className="v-gap-small">
            <label htmlFor={`field-${field.prop}`} className="text-paragraph">
              {field.label}
            </label>
            <TextField
              as="input"
              id={`field-${field.prop}`}
              placeholder={field.placeholder}
              state={{
                value: field.value || "",
                variant: "default",
              }}
              onChange={(e) =>
                dispatchProfile({
                  type: field.action,
                  [field.prop]: e.target.value,
                })
              }
            />
          </div>
          <TextCounter
            value={field.value || ""}
            maxLength={profileConfig.INFO_MAX_LENGTH}
          />
        </Menu.Item>
      ))}
    </Menu>
  );
};
