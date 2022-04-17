import { FC } from "react";
import ReactModal from "react-modal";
import { ModalProps } from ".";
import "./modal.scss";

export const Modal: FC<ModalProps> = ({ children, ...rest }) => {
  return (
    <ReactModal
      {...rest}
      className="modal__content"
      overlayClassName="modal__overlay"
      parentSelector={() => document.getElementById("app")!}
    >
      {children}
    </ReactModal>
  );
};
