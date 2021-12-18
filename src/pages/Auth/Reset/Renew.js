import React, { useContext, useState } from "react";
import Form from "../../../components/Auth/Form";
import Header from "../../../components/Auth/Header";
import PasswordCriteria from "../../../components/PasswordCriteria";
import { testPasswords } from "../../../components/Auth/Validator";
import { AuthContext, ToastContext } from "../../../config/Context";
import { updateAccount } from "../../../components/Auth/api";
import { useNavigate } from "react-router-dom";

function Renew() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const { toasts, setToasts } = useContext(ToastContext);

  const [passwordState, setPasswordState] = useState({
    value: "",
    style: "Default",
  });

  const [rePasswordState, setRePasswordState] = useState({
    value: "",
    style: "Default",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const isFormValid = testPasswords(
      passwordState,
      setPasswordState,
      rePasswordState,
      setRePasswordState
    );

    if (isFormValid) {
      updateAccount({
        password: passwordState.value,
        toasts: toasts,
        setToasts: setToasts,
        onSuccess: (user) => {
          setUser(user);
          sessionStorage.setItem("doorUser", JSON.stringify(user));
          navigate("/dashboard", { replace: true });
        },
      });
    }
  }

  function handlePasswordChange(value) {
    setPasswordState({
      value: value,
      style: passwordState.style,
    });
  }

  function handleRePasswordChange(value) {
    setRePasswordState({
      value: value,
      style: rePasswordState.style,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Header
        title="Reset Password"
        subtitle="Finally, time to get you a new one, don’t forget it this time."
      />
      <PasswordCriteria
        state={passwordState}
        setState={setPasswordState}
        onChange={handlePasswordChange}
        placeholder="Enter New Password"
      />
      <PasswordCriteria
        state={rePasswordState}
        setState={setRePasswordState}
        onChange={handleRePasswordChange}
        placeholder="Re-enter Password"
      />
      <button
        type="submit"
        className="buttonPrimary"
        disabled={passwordState.value === "" || rePasswordState.value === ""}
      >
        Reset Password
      </button>
    </Form>
  );
}

export { Renew };
