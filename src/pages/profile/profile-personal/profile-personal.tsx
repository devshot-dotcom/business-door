import { FC } from "react";
import { PersonalInfoProps } from ".";
import { Icon, Menu } from "../../../components";
import { hasEmptyIndex } from "../../../helpers";
import {
  getBetterLabels,
  getPersonalInfo,
  openURL,
} from "./profile-personal-utils";
import "./profile-personal.scss";

export const ProfilePersonal: FC<PersonalInfoProps> = (props) => {
  return (
    <Menu title="Personal Information">
      {getPersonalInfo(props).map((info, i) => {
        return hasEmptyIndex(info.labels) ? null : (
          <Menu.Item
            key={i}
            direction="row"
            onClick={() => openURL(info.href)}
            data-linked={info.href !== undefined}
            tabIndex={info.href === undefined ? -1 : 0}
          >
            <div className="underlined">
              <Icon src={info.icon} size="small" />
            </div>
            <div className="menu__text">
              <div className="text-paragraph text-bold">{info.title}</div>
              {getBetterLabels(info?.labels)}
            </div>
            {info.rightNodes && info.rightNodes}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};
