import { Link } from "react-router-dom";
import { routes } from "../../../../config";
import { Loader, Menu } from "../../../../components";
import { isStringValid } from "../../../../helpers/functions";
import { AdditionalInfo, profileConfig } from "../..";

const EmptyAdditionalInfo = ({ isLogged }: { isLogged: boolean }) => (
  <Loader.Khaby className="profile__empty">
    <div className="text-paragraph text-bold">
      Nothing here.{" "}
      {isLogged && (
        <Link to={routes.editProfile.PATH} className="text-paragraph text-link">
          Add?
        </Link>
      )}
    </div>
  </Loader.Khaby>
);

type Props = {
  data?: string;
  isLogged: boolean;
};

function ProfileAdditionalDefault({ data, isLogged }: Props) {
  if (!isStringValid(data)) {
    return (
      <Menu title="Additional Information">
        <EmptyAdditionalInfo isLogged={isLogged} />
      </Menu>
    );
  }

  //console.log(data);

  let info: AdditionalInfo[] = JSON.parse(data!);

  return (
    <Menu title="Additional Information">
      {info.length === 0 ? (
        <EmptyAdditionalInfo isLogged={isLogged} />
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
