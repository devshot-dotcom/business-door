import React from "react";
import {
  Viewport,
  LinearGradient,
  HeaderLogo,
  Flexbox,
  AbsolutePosition,
} from "../components/components";
import "../sass/_spacers.scss";

function SplashScreen() {
  return (
    <Viewport>
      <LinearGradient orientation="vertical" variant="primary">
        <Flexbox styles={{ height: "100vh" }} align="center">
          <HeaderLogo />
          <AbsolutePosition placement="bottom-right" className="padding-medium">
            {process.env.REACT_APP_VERSION_NAME}
          </AbsolutePosition>
        </Flexbox>
      </LinearGradient>
    </Viewport>
  );
}

export default SplashScreen;
