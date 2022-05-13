import { Dispatch } from "react";
import { ModalProps } from "../../../../components/modal";
import { EditProfileActions } from "../../../edit-profile";

export type ProfileCoverModalProps = {
  /** The name of the cover image. */
  cover?: string;

  /** Dispatcher to update the state per need. */
  dispatchProfile: Dispatch<EditProfileActions>;
} & ModalProps;
