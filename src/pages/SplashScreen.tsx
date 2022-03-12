import { useEffect } from "react";
import { useNavigate } from "react-router";
import { LinearGradient } from "../components";
import { durationLong } from "../helpers/integers";
import { versionName } from "../helpers/meta";

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
      <LinearGradient>
        <div className="layout-absolute center">
          <div>
            <div className="pre-title">Loading ...</div>
          </div>
        </div>
        <div className="layout-absolute bottom-right">v{versionName}</div>
      </LinearGradient>
    </div>
  );
}

export { SplashScreen };
