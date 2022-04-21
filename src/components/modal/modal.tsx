import { FC } from "react";
import ReactModal from "react-modal";
import { ModalProps } from ".";
import { Badge } from "..";
import "./modal.scss";

export const ModalComponent: FC<ModalProps> = ({
  children,
  onRequestClose,
  ...rest
}) => {
  return (
    <ReactModal
      {...rest}
      onRequestClose={onRequestClose}
      className="modal__content"
      overlayClassName="modal__overlay"
      parentSelector={() => document.getElementById("app")!}
    >
      {children}
      <Badge
        title="Close Modal"
        className="bg-brand"
        id="modalCloseButton"
        onClick={onRequestClose}
        style={{ cursor: "pointer" }}
      >
        x
      </Badge>
    </ReactModal>
  );
};
