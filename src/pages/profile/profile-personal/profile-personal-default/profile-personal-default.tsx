import {
  PersonalInfoProps,
  getPersonalInfo,
  openURL,
  getBetterLabels,
} from "..";
import { Menu, Icon } from "../../../../components";
import { hasEmptyIndex } from "../../../../helpers";

export const ProfilePersonalDefault = (props: PersonalInfoProps) => {
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
            <div className="menu__text-underlined">
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
