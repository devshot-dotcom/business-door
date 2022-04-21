import { ModalComponent } from "./modal";
import { ModalFooter } from "./modal-footer";
import { ModalHeader } from "./modal-header";

// Header can now be accessed using Modal.Header
export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Footer: ModalFooter,
});

export type { ModalProps } from "./modal-types";
