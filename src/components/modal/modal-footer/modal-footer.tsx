import { ModalFooterProps } from ".";
import { Button } from "../..";
import "./modal-footer.scss";

export const ModalFooter = ({ okButton, cancelButton }: ModalFooterProps) => {
  return (
    <div className="modal__footer">
      <Button {...cancelButton} variant="secondary" />
      <Button {...okButton} variant="primary" />
    </div>
  );
};
