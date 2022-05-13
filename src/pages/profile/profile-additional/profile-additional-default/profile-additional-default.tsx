import { Link } from "react-router-dom";
import { routes } from "../../../../config";
import { Menu } from "../../../../components";
import khaby from "../../../../assets/gifs/khaby.gif";
import { isStringValid } from "../../../../helpers/functions";
import { AdditionalInfo, profileConfig } from "../..";

const EmptyAdditionalInfo = () => (
  <div className="profile__empty">
    <img src={khaby} alt="" />
    <div className="text-paragraph text-bold">
      Nothing here.{" "}
      <Link to={routes.editProfile.PATH} className="text-paragraph text-link">
        Add?
      </Link>
    </div>
  </div>
);

function ProfileAdditionalDefault({ data }: { data?: string }) {
  if (!isStringValid(data)) {
    return (
      <Menu title="Additional Information">
        <EmptyAdditionalInfo />
      </Menu>
    );
  }

  const info: AdditionalInfo[] = JSON.parse(data!);

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
                <a
                  className="text-paragraph text-link text-ellipsis-1"
                  target="_blank"
                  rel="noreferrer"
                  href={value.url}
                >
                  {value.url}
                </a>
              </div>
            </Menu.Item>
          );
        })
      )}
    </Menu>
  );
}

export default ProfileAdditionalDefault;
