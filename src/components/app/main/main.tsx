import { ComponentPropsWithoutRef, createRef, FC } from "react";
import { MainContext } from ".";
import styles from "./main.module.scss";

const Main: FC<ComponentPropsWithoutRef<"main">> = (props) => {
  const { className, children, ...rest } = props;

  const ref = createRef<HTMLElement>();

  return (
    <main ref={ref} className={`${styles.main} ${className}`} {...rest}>
      <MainContext.Provider value={ref}>{children}</MainContext.Provider>
    </main>
  );
};

export { Main };
