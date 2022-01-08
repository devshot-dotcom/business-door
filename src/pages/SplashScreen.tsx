import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  LinearGradient,
  Logo,
  Absolute,
  Flexbox,
} from "../components/components";
import { durationLong } from "../helpers/integers";

function SplashScreen() {
  const navigate = useNavigate();

  // Navigate away from splash screen.
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Redirect to homepage.
      navigate("/home", { replace: true });
    }, durationLong);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="viewport">
      <LinearGradient angle="to-bottom">
        <Absolute placement="center">
          <Flexbox direction="column" align="center" gap="none">
            <Logo size="larger" />
            <div className="preTitle">Loading ...</div>
          </Flexbox>
        </Absolute>
        <Absolute placement="bottom-right" className="padding-medium">
          {process.env.REACT_APP_VERSION_NAME}
        </Absolute>
      </LinearGradient>
    </div>
  );
}

export default SplashScreen;
