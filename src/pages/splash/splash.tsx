import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components";
import {
  duration,
  getUserMetaData,
  routes,
  SUPABASE,
  UserAction,
  UserMeta,
} from "../../config";
import { useMetaData } from "../../hooks";
import styles from "./splash.module.scss";

export const Splash = () => {
  const navigate = useNavigate();
  const userMeta = useMetaData();

  useEffect(() => {
    const timeout = setTimeout(
      () => navigate(userMeta.getPathForUserAction(), { replace: true }),
      duration.SPLASH_SCREEN
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
