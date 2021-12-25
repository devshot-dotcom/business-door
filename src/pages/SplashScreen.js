import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Gradient, Logo, Absolute, Flexbox } from "../components/components";
import { isAccessToken } from "../helpers/functions";
import { durationLong } from "../helpers/integers";

function SplashScreen() {
  const navigate = useNavigate();

  // Navigate away from splash screen.
  useEffect(() => {
    const timeout = setTimeout(() => {
      // If the app is launched in response to email verification.
      if (isAccessToken("signup")) navigate("auth/login", { replace: true });

      // If the app is launched in response to password reset email.
      if (isAccessToken("signup"))
        navigate("auth/reset-password/renew", { replace: true });

      // For now, redirecting to login as the homepage isn't ready.
      // TODO: Redirect to homepage.
      navigate("/auth", { replace: true });
    }, durationLong);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="viewport">
      <Gradient type="linear" orientation="vertical" variant="primary">
        <Absolute placement="center">
          <Flexbox direction="column" align="center" gap="0">
            <Logo size="large" />
            <div className="preTitle">Loading ...</div>
          </Flexbox>
        </Absolute>
        <Absolute placement="bottom-right" className="padding-medium">
          {process.env.REACT_APP_VERSION_NAME}
        </Absolute>
      </Gradient>
    </div>
  );
}

export default SplashScreen;
