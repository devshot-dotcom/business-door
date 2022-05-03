import { User } from "@supabase/supabase-js";
import { Dispatch, useState } from "react";
import { EditProfileActions } from "../../edit-profile";
import { Button, Menu, Modal, TextField } from "../../../components";
import { SUPABASE } from "../../../config";
import { useApi, useEmail } from "../../../hooks";
import { AuthApi } from "../../../hooks/use-api";

type Props = {
  dispatchProfile: Dispatch<EditProfileActions>;
};

export const ProfileConfidential = ({ dispatchProfile }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmail, dispatchNewEmail, isNewEmailValid] = useEmail();
  const [newEmailConfirm, dispatchNewEmailConfirm, isNewEmailConfirmValid] =
    useEmail();

  const api = useApi("auth") as AuthApi;
  const currentEmail = SUPABASE.auth.user()?.email;

  /**
   * Reset the email states to their initial values.
   */
  function resetForm() {
    dispatchNewEmail({ type: "reset" });
    dispatchNewEmailConfirm({ type: "reset" });
  }

  /**
   * Handle the email change.
   * A function that checks if the existing email
   * entered by the user is the same as the current email.
   *
   * If it isn't, it invalidates the existing email and returns.
   *
   * If it is, it proceeds to check if the new email
   * and the confirmed new email are equal.
   *
   * If they are not, it invalidates both of the new emails and returns.
   *
   * If they are, it requests an email change.
   */
  function changeEmail() {
    let errors = 0;

    // Check if the new email is equal to the current email
    // If it isn't, invalidate the new email.
    if (newEmail.value === currentEmail) {
      ++errors;
      dispatchNewEmail({
        type: "invalid",
        tooltip: {
          isShownForever: true,
          label: "New email cannot be the same as the current email.",
        },
      });
    }

    // Check if the new email is syntactically valid.
    // If it isn't, invalidate the new email.
    if (!isNewEmailValid()) {
      ++errors;
      dispatchNewEmail({
        type: "invalid",
        tooltip: {
          isShownForever: true,
          label: "Invalid email, please enter a valid email address.",
        },
      });
    }

    // Check if the confirmed new email is syntactically valid.
    // If it isn't, invalidate the confirmed new email.
    if (!isNewEmailConfirmValid()) {
      ++errors;
      dispatchNewEmailConfirm({
        type: "invalid",
        tooltip: {
          isShownForever: true,
          label: "Invalid email, please enter a valid email address.",
        },
      });
    }

    // Check if the new email and the confirmed new email are equal.
    // If they aren't, invalidate both of the new emails.
    if (newEmail.value !== newEmailConfirm.value) {
      ++errors;

      dispatchNewEmail({
        type: "invalid",
        tooltip: {
          isShownForever: true,
          label: "Email addresses don't match.",
        },
      });
      dispatchNewEmailConfirm({
        type: "invalid",
        tooltip: {
          isShownForever: true,
          label: "Email addresses don't match.",
        },
      });
    }

    // If there are no errors, request an email change.
    if (errors === 0) {
      api.changeEmail(newEmail.value, {
        onSuccess: (user: User) => {
          console.log(user);

          dispatchProfile({
            type: "updateEmail",
            email: user.email,
          });

          resetForm();
          setIsModalOpen(false);
        },
      });
    }
  }

  return (
    <>
      <Menu title="Confidential Information">
        <Button
          type="button"
          variant="tertiary"
          style={{ width: "100%" }}
          onClick={() => setIsModalOpen(true)}
        >
          Edit Confidentials
        </Button>
      </Menu>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <Modal.Header title="Edit Confidentials" />

        {/* Existing Email. */}
        <div className="v-gap-small">
          <label htmlFor="existingEmail" className="text-paragraph">
            Existing email address
          </label>
          <TextField
            as="input"
            readOnly
            type="email"
            id="existingEmail"
            placeholder="Enter your existing email address"
            state={{
              value: currentEmail || "Email not found!",
              variant: "default",
            }}
          />
        </div>

        {/* New Email */}
        <div className="v-gap-small">
          <label htmlFor="newEmail" className="text-paragraph">
            New email address
          </label>
          <TextField
            as="input"
            type="email"
            id="newEmail"
            placeholder="Enter your new email address"
            state={newEmail}
            onChange={(e) =>
              dispatchNewEmail({
                type: "update",
                value: e.target.value,
              })
            }
            onFocus={() => dispatchNewEmail({ type: "default" })}
          />
        </div>

        {/* New Email Confirm */}
        <div className="v-gap-small">
          <label htmlFor="newEmailConfirm" className="text-paragraph">
            Confirm new email address
          </label>
          <TextField
            as="input"
            type="email"
            id="newEmailConfirm"
            placeholder="Confirm your new email address"
            state={newEmailConfirm}
            onChange={(e) =>
              dispatchNewEmailConfirm({
                type: "update",
                value: e.target.value,
              })
            }
            onFocus={() => dispatchNewEmailConfirm({ type: "default" })}
          />
        </div>
        <Modal.Footer
          okButton={{
            type: "button",
            children: "Change",
            onClick: changeEmail,
            disabled: newEmail.value === "" || newEmailConfirm.value === "",
          }}
          cancelButton={{
            type: "button",
            children: "Cancel",
            onClick: () => setIsModalOpen(false),
          }}
        />
      </Modal>
    </>
  );
};
