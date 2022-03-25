import { FC, ReactNode } from "react";
import { Icon } from "../..";
import { IconProps } from "../../icon";
import styles from "./card-title.module.scss";

type Props = {
  icon?: IconProps;
  children?: ReactNode;
};

const CardTitle: FC<Props> = (props) => {
  const { icon } = props;

  if (icon) {
    return (
      <div className={styles["title-icon"]}>
        <Icon {...icon} />
        <h2 data-gap-none className="text-button text-brand">
          {props.children}
        </h2>
      </div>
    );
  }

  return (
    <h2 className={`${styles.title} text-button text-brand`}>
      {props.children}
    </h2>
  );
};

export { CardTitle };
