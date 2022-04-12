import { FC } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../../../components";
import khaby from "../../../assets/gifs/khaby.gif";
import "./profile-additional.scss";
import { AdditionalInfo, profileConfig } from "..";

const EmptyAdditionalInfo = () => {
  return (
    <div className="profile__empty">
      <img src={khaby} alt="" />
      <div className="text-paragraph text-bold">
        Nothing here.{" "}
        <Link to="/error" className="text-paragraph text-link">
          Add?
        </Link>
      </div>
    </div>
  );
};

type Props = {
  data: string;
};

export const ProfileAdditional: FC<Props> = (props) => {
  const info: AdditionalInfo[] = JSON.parse(props.data);

  return (
    <Menu title="Additional Information">
      {info.length === 0 ? (
        <EmptyAdditionalInfo />
      ) : (
        info.map((value, i) => {
          return i + 1 > profileConfig.MAX_ADDITIONAL_INFOS ? null : (
            <Menu.Item key={i} direction="column">
              <div>
                <div className="text-paragraph text-bold">{value.label}</div>
                <a className="text-paragraph text-link" href={value.url}>
                  {value.url}
                </a>
              </div>
            </Menu.Item>
          );
        })
      )}
    </Menu>
  );
};
