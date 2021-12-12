import React, { useState } from "react";
import Input from "./Input/Input";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import { patterns } from "../utils";
import "../sass/PasswordCriteria.scss";

function PasswordCriteria(props) {
  const [menuItemProp, setMenuItemProp] = useState({
    leastChars: false,
    lowerCase: false,
    upperCase: false,
    numbers: false,
  });

  const applyPasswordChecks = (password) => {
    setMenuItemProp({
      leastChars: password.length >= 8,
      lowerCase: patterns.LOWERCASE.test(password),
      upperCase: patterns.UPPERCASE.test(password),
      numbers: patterns.NUMBERS.test(password),
    });
  };

  return (
    <section className="flex column PasswordCriteria">
      <Input
        type="password"
        size={props.size}
        state={props.state}
        setState={props.setState}
        onChange={(password) => {
          props.onChange(password);
          applyPasswordChecks(password);
        }}
        placeholder={props.placeholder}
      />
      <div className="MenuWrapper">
        <Menu>
          <MenuItem
            isValid={menuItemProp.leastChars}
            label="At least 8 characters"
          />
          <MenuItem
            isValid={menuItemProp.lowerCase}
            label="Lower case letters (a-z)"
          />
          <MenuItem
            isValid={menuItemProp.upperCase}
            label="Upper case letters (A-Z)"
          />
          <MenuItem isValid={menuItemProp.numbers} label="Numbers (0-9)" />
        </Menu>
      </div>
    </section>
  );
}

export default PasswordCriteria;
