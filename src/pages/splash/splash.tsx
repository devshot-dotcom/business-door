import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components";
import { routes } from "../../config";
import styles from "./splash.module.scss";

export const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(
      () => navigate(routes.landing.path, { replace: true }),
      5000
    );
    return () => clearTimeout(timeout);
  });

  return (
    <div className={styles.splash}>
      <div>
        <Logo size="large" />
        <p className="text-paragraph">Loading...</p>
      </div>
    </div>
  );
};
