import * as React from "react";
import { profileConfig } from "../..";
import { Avatar, Button, Modal } from "../../../../components";
import { StorageApiResponse } from "../../../../helpers/types";
import { useApi, useToast } from "../../../../hooks";
import { StorageApi } from "../../../../hooks/use-api";
import { EditProfileChildrenProps as Types } from "../../../edit-profile";
import useCustomReducer from "./profile-avatar-editable-utils";
import "./profile-avatar-editable.scss";

function ProfileAvatarEditable({
  dispatchProfile,
  ...rest
}: Types.EditableAvatar) {
  const [state, dispatch] = useCustomReducer();
  const { file, isModalOpen } = state;

  const makeToast = useToast();
  const api = useApi("storage") as StorageApi;
  const ref = React.createRef<HTMLInputElement>();

  function handleSubmission(e?: React.FormEvent<HTMLElement>) {
    e?.preventDefault();

    if (!file) return;

    if (file.size > profileConfig.MAX_AVATAR_SIZE) {
      makeToast({
        title: "File too large",
        subTitle: `File size must be less than ${(
          profileConfig.MAX_AVATAR_SIZE / 1024
        ).toFixed(2)} kB!`,
        variant: "invalid",
      });
      return;
    }

    api.uploadAvatar(file, {
      onSuccess: () =>
        dispatch({
          type: "CLOSE_MODAL",
        }),
    });
  }

  return (
    <>
      <div className="avatar-editable" aria-hidden>
        <Avatar
          {...rest}
          file={file}
          size="larger"
          editbutton={{
            type: "button",
            onClick: () =>
              dispatch({
                type: "OPEN_MODAL",
              }),
          }}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() =>
          dispatch({
            type: "OPEN_MODAL",
          })
        }
      >
        <Modal.Header title="Change avatar" />
        <form name="avatarForm" onSubmit={handleSubmission}>
          <Avatar
            {...rest}
            src={undefined}
            file={file}
            size="larger"
            style={{
              border: "0",
            }}
          />
          <div className="v-gap-small">
            <div className="text-paragraph">
              {file ? file.name : "No file selected"}
            </div>
            {file?.size ? (
              <div
                className={`${
                  file.size >= profileConfig.MAX_AVATAR_SIZE
                    ? "text-brand"
                    : "text-valid"
                } text-paragraph text-bold`}
              >{`${(file.size / 1024).toFixed(2)} kB`}</div>
            ) : null}
            <Button
              size="small"
              type="button"
              variant="tertiary"
              onClick={() => ref.current?.click()}
            >
              Browse
            </Button>
          </div>
          <input
            hidden
            ref={ref}
            type="file"
            accept="image/*"
            onChange={(e) =>
              dispatch({
                type: "SET_FILE",
                file: e.target.files?.[0],
              })
            }
          />
        </form>
        {file && file.size >= profileConfig.MAX_AVATAR_SIZE ? (
          <div className="text-brand text-paragraph">
            {`File size must be less than ${(
              profileConfig.MAX_AVATAR_SIZE / 1024
            ).toFixed(2)} kB!`}
          </div>
        ) : null}
        <Modal.Footer
          okButton={{
            children: "Change",
            onClick: handleSubmission,
            disabled: !file,
          }}
          cancelButton={{
            children: "Cancel",
            onClick: () =>
              dispatch({
                type: "CLOSE_MODAL",
              }),
          }}
        />
      </Modal>
    </>
  );
}

export default ProfileAvatarEditable;
