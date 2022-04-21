import { ModalHeaderProps } from ".";
import "./modal-header.scss";

export const ModalHeader = ({ title, subTitle }: ModalHeaderProps) => {
  return (
    <header className="modal__header">
      <h1 className="text-h3">{title}</h1>
      {subTitle && <div className="text-small text-subtle">{subTitle}</div>}
    </header>
  );
};
