type variants = "default" | "valid" | "invalid";

interface Props extends React.ComponentPropsWithoutRef<"li"> {
  icon?: {
    /** The source of the icon. */
    src: "string";

    /** The alternative text of the icon. */
    alt: "string";
  };
  variant?: variants;
  title: string;
}

function MenuItem(props: Props) {
  const { icon, variant = "default", title, className = "", ...rest } = props;

  return (
    <li className={`menu__item menu__item-${variant} ${className}`} {...rest}>
      {icon && <img src={icon.src} alt={icon.alt} className="menu__icon" />}
      <div className="menu__label text-paragraph">{title}</div>
    </li>
  );
}

export { MenuItem };
