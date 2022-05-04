import { AdditionalInfo, ProfileChildProps, profileConfig } from "../..";
import { Button, Menu, TextField } from "../../../../components";

export const ProfileAdditionalEditable = ({
  profileState,
  dispatchProfile,
}: ProfileChildProps) => {
  // A default value for the additional info.
  const defaultAdditionalInfo: AdditionalInfo[] = [
    {
      label: "",
      url: "",
    },
  ];

  // Either the state gives us the additional info,
  // or we use the default value.
  const additionalInfo: AdditionalInfo[] = profileState.additionalInfo
    ? JSON.parse(profileState.additionalInfo)
    : defaultAdditionalInfo;

  /**
   * Handles the change of the additional info text fields.
   * @param index The number of the text field from the list.
   * @param newInfo The new value of the text field.
   */
  const handleChange = (index: number, newInfo: AdditionalInfo) => {
    // Immutability is maintained by using a new array.
    const newAdditionalInfo = additionalInfo.slice();

    // Update the text field.
    newAdditionalInfo[index] = newInfo;

    dispatchProfile({
      type: "updateAdditionalInfo",
      additionalInfo: JSON.stringify(newAdditionalInfo),
    });
  };

  return (
    <Menu title="Additional Information">
      {additionalInfo.map((info, i) => {
        return i > profileConfig.MAX_ADDITIONAL_INFOS - 1 ? null : (
          <Menu.Item direction="column" key={i} className="v-gap-small gap-0">
            <label htmlFor={`additionalInfo-${i}`} className="text-paragraph">
              New information
            </label>
            <TextField
              as="input"
              id={`additionalInfo-${i}`}
              placeholder="e.g. YouTube, Vimeo"
              state={{
                value: info.label,
                variant: "default",
              }}
              onChange={(e) =>
                handleChange(i, {
                  label: e.target.value,
                  url: info.url,
                })
              }
            />
            <TextField
              as="input"
              placeholder="e.g. youtube.com/channel"
              state={{
                value: info.url,
                variant: "default",
              }}
              onChange={(e) =>
                handleChange(i, {
                  label: info.label,
                  url: e.target.value,
                })
              }
            />
          </Menu.Item>
        );
      })}
      {/* The button appends a new additionalInfo to the list
      if the maximum items are lesser than the allowed limit. */}
      {additionalInfo.length < profileConfig.MAX_ADDITIONAL_INFOS && (
        <Button
          type="button"
          variant="tertiary"
          style={{ width: "100%" }}
          onClick={() => {
            dispatchProfile({
              type: "updateAdditionalInfo",
              additionalInfo: JSON.stringify([
                ...additionalInfo,
                defaultAdditionalInfo,
              ]),
            });
          }}
        >
          Add Another
        </Button>
      )}
    </Menu>
  );
};
