import { Dispatch } from "react";
import { profileConfig } from "../..";
import { Menu, TextCounter, TextField } from "../../../../components";
import { EditProfileActions } from "../../../edit-profile";

type Props = {
  bio?: string;
  dispatchProfile: Dispatch<EditProfileActions>;
};

/**
 * A component that renders a textarea element with a character counter.
 * @param bio - The user's bio
 * @param dispatchProfile - The dispatch function for the profile reducer.
 */
export const ProfileBioEditable = ({ bio, dispatchProfile }: Props) => {
  if (bio === undefined) return null;

  return (
    <Menu title="About me">
      <div>
        <TextField
          as="textarea"
          state={{
            value: bio || "",
            variant: "default",
          }}
          onChange={(e) =>
            dispatchProfile({
              type: "updateBio",
              aboutMe: e.target.value,
            })
          }
          placeholder="Tell us about yourself"
        />
        {/* Render the character counter */}
        <TextCounter
          value={bio || ""}
          maxLength={profileConfig.BIO_MAX_LENGTH}
        />
      </div>
    </Menu>
  );
};
