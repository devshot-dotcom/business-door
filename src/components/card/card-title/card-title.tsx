import { FC, ReactNode } from "react";
import { Icon } from "../..";
import { IconProps } from "../../icon";
import styles from "./card-title.module.scss";

type Props = IconProps & {
  children?: ReactNode;
};

const CardTitle: FC<Props> = (props) => {
  const { children, src, ...rest } = props;

  if (src) {
    return (
      <div className={styles["title-icon"]}>
        <Icon src={src} {...rest} />
        <h2 data-gap-none className="text-button text-brand">
          {children}
        </h2>
      </div>
    );
  }

  return (
    <h2 className={`${styles.title} text-button text-brand`}>{children}</h2>
  );
};

export { CardTitle };
