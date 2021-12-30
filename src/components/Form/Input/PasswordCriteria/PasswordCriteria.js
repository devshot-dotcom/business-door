import React from "react";
import { Flexbox, Menu, MenuItem } from "../../../components";
import { patterns } from "../../../../helpers/regex";
import "./PasswordCriteria.scss";

function PasswordCriteria({ style, className, password, children }) {
  const leastChars = password.length >= 8;
  const lowerCase = patterns.LOWERCASE.test(password);
  const upperCase = patterns.UPPERCASE.test(password);
  const numbers = patterns.NUMBERS.test(password);

  return (
    <Flexbox
      direction="column"
      align="stretch"
      gap="0"
      className={`criteria-wrapper ${className}`}
      style={style}
    >
      {children}
      <div className="menu-wrapper">
        <Menu>
          <MenuItem isValid={leastChars} label="At least 8 characters" />
          <MenuItem isValid={lowerCase} label="Lower case letters (a-z)" />
          <MenuItem isValid={upperCase} label="Upper case letters (A-Z)" />
          <MenuItem isValid={numbers} label="Numbers (0-9)" />
        </Menu>
      </div>
    </Flexbox>
  );
}

export { PasswordCriteria };
