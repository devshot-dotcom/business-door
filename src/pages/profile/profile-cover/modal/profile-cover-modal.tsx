import { useState } from "react";
import { ProfileCoverModalProps } from ".";
import { profileConfig } from "../..";
import { Modal } from "../../../../components";
import { backgrounds } from "./profile-cover-modal-utils";
import "./profile-cover-modal.scss";

export const ProfileCoverModal = ({
  cover = profileConfig.DEFAULT_COVER,
  onRequestClose,
  dispatchProfile,
  ...rest
}: ProfileCoverModalProps) => {
  const [selectedCover, setSelectedCover] = useState(cover);

  const getCover = (cover: string) =>
    require(`../../../../assets/backgrounds/@small/${cover}`).default;

  const updateCover = () => {
    dispatchProfile({
      type: "updateCover",
      cover: selectedCover,
    });

    onRequestClose?.();
  };

  return (
    <Modal {...rest} onRequestClose={onRequestClose}>
      <Modal.Header title="Select Cover" />
      <div className="cover-modal__grid" role="grid">
        {backgrounds.map((background, i) => {
          return (
            <button
              key={i}
              role="gridcell"
              onClick={() => setSelectedCover(background.fileName)}
              data-selected={selectedCover === background.fileName}
            >
              <img src={getCover(background.fileName)} alt={background.label} />
              <div className="text-paragraph">{background.label}</div>
            </button>
          );
        })}
      </div>
      <Modal.Footer
        okButton={{
          onClick: updateCover,
          children: "Update",
        }}
        cancelButton={{ children: "Cancel", onClick: onRequestClose }}
      />
    </Modal>
  );
};
