import { ChangeEvent, Dispatch } from "react";
import { EditProfileActions } from "..";
import { profileConfig } from "../..";
import { Menu, TextField } from "../../../../components";

type BioProps = {
  bio?: string;
  dispatchProfile: Dispatch<EditProfileActions>;
};

/**
 * A component that renders a textarea element with a character counter.
 * @param bio - The user's bio
 * @param dispatchProfile - The dispatch function for the profile reducer.
 */
export const Bio = ({ bio, dispatchProfile }: BioProps) => {
  if (bio === undefined) return null;

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let value = e.target.value;

    // Trim the value to the max length.
    if (value.length > profileConfig.BIO_MAX_LENGTH) {
      value = value.substring(0, profileConfig.BIO_MAX_LENGTH);
    }

    // Update the bio.
    dispatchProfile({
      type: "updateBio",
      aboutMe: value,
    });
  };

  // Classes for the character counters.
  const counterClasses = `text-paragraph ${
    bio.length >= profileConfig.BIO_MAX_LENGTH ? "text-brand" : "text-default"
  }`;

  return (
    <Menu title="About me">
      <div>
        <TextField
          as="textarea"
          state={{
            value: bio,
            variant: "default",
          }}
          onChange={onChange}
          placeholder="Tell us about yourself"
        />
        {/* Render the character counter */}
        <div style={{ textAlign: "right" }}>
          {/* Accessibility requires different labels 
          for the different counters */}
          <span
            className={counterClasses}
            aria-label="Number of characters in your about me"
          >
            {bio.length}
          </span>
          <span className={counterClasses} aria-hidden>
            /
          </span>
          <span
            className={counterClasses}
            aria-label="Number of characters allowed in about me"
          >
            {profileConfig.BIO_MAX_LENGTH}
          </span>
        </div>
      </div>
    </Menu>
  );
};
