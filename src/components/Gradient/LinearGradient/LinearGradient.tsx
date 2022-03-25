import * as React from "react";
import "./LinearGradient.scss";

interface LinearGradientProps {
  angle?: "to-bottom" | "to-top" | "to-right" | "to-left";
  variant?: "primary" | "secondary" | "tertiary";
}

const LinearGradient: React.FC<LinearGradientProps> = ({
  children,
  angle = "to-bottom",
  variant = "primary",
}) => {
  return (
    <div className={`gradient gradient-${variant} gradient-${angle}`}>
      {children}
    </div>
  );
};

export { LinearGradient };
