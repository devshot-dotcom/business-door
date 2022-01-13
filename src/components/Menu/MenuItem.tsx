import iconValid from "../../assets/vectors/state/check-valid.svg";
import iconInvalid from "../../assets/vectors/state/check-invalid.svg";

interface MenuItemProps extends React.ComponentPropsWithoutRef<"li"> {
  tabIndex?: number;
  isValid: boolean;
  label: string;
}

function MenuItem({
  tabIndex,
  isValid,
  label,
  className,
  ...rest
}: MenuItemProps) {
  const classes = ["menu-item", isValid ? "valid" : "", className ?? ""];

  return (
    <li className={classes.join(" ")} tabIndex={tabIndex} {...rest}>
      <img
        src={isValid ? iconValid : iconInvalid}
        alt={isValid ? "Valid" : "Invalid"}
        className="menu-icon"
      />
      <p className="menu-label paragraph">{label}</p>
    </li>
  );
}

export { MenuItem };
