import { FC } from "react";
import ReactModal from "react-modal";
import { ModalProps } from ".";
import { CloseButton } from "..";
import "./modal.scss";

export const ModalComponent: FC<ModalProps> = ({
  children,
  onRequestClose,
  ...rest
}) => {
  return (
    <ReactModal
      {...rest}
      className="modal__content"
      onRequestClose={onRequestClose}
      overlayClassName="modal__overlay"
      appElement={document.getElementById("root")!}
      parentSelector={() => document.getElementById("root")!}
    >
      {children}
      <CloseButton
        title="Close Modal"
        id="modalCloseButton"
        onClick={onRequestClose}
      />
    </ReactModal>
  );
};
