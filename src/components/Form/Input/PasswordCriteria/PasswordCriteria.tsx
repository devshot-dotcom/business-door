import * as React from "react";
import { Menu, MenuItem } from "../../../";
import { patterns } from "../../../../helpers/regex";
import "./PasswordCriteria.scss";

interface CriteriaProps extends React.ComponentPropsWithoutRef<"div"> {
  password: string;
}

const PasswordCriteria: React.FC<CriteriaProps> = ({
  password,
  className = "",
  children,
  ...rest
}) => {
  const leastChars = password.length >= 8;
  const lowerCase = patterns.LOWERCASE.test(password);
  const upperCase = patterns.UPPERCASE.test(password);
  const numbers = patterns.NUMBERS.test(password);

  const classes = [
    "criteria-wrapper",
    "layout-flex",
    "flex-column",
    "align-stretch",
    className,
  ];

  return (
    <div className={classes.join(" ")} {...rest}>
      {children}
      <div className="menu-wrapper">
        <Menu>
          <MenuItem
            variant={leastChars ? "valid" : "invalid"}
            title="At least 8 characters"
          />
          <MenuItem
            variant={lowerCase ? "valid" : "invalid"}
            title="Lower case letters (a-z)"
          />
          <MenuItem
            variant={upperCase ? "valid" : "invalid"}
            title="Upper case letters (A-Z)"
          />
          <MenuItem
            variant={numbers ? "valid" : "invalid"}
            title="Numbers (0-9)"
          />
        </Menu>
      </div>
    </div>
  );
};

export { PasswordCriteria };
