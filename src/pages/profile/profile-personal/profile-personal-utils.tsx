import {
  faEnvelope,
  faMapMarkerAlt,
  faBriefcase,
  faCreditCard,
  faPlusCircle,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { PersonalInfo, PersonalInfoProps } from ".";
import { Icon, Badge } from "../../../components";
import { getPropsOfLevel, routes } from "../../../config";
import { isArrayValid } from "../../../helpers";

/**
 * Parse and retrieve a list of personal information items, ready to be displayed.
 */
export function getPersonalInfo({
  isLogged,
  data,
}: PersonalInfoProps): PersonalInfo[] {
  const { email, city, country, profession, organization, cards, level } = data;

  const levelProps = getPropsOfLevel(level);

  // Right, the API is a hypocrite.
  // It returns an array of cards, but
  // it's not clear what the actual data is.
  // If I set the data type to an array of objects,
  // it returns a JSON string. If I set the data type
  // as a JSON string, it returns an array of objects.
  const cardsLength = isArrayValid(cards) ? cards!.length : 0;

  return [
    {
      title: "Email",
      labels: [email],
      icon: faEnvelope,
      href: `mailto://${email}`,
    },
    {
      title: "Location",
      labels: [city, country],
      icon: faMapMarkerAlt,
    },
    {
      title: "Workspace",
      labels: [profession, organization],
      icon: faBriefcase,
    },
    {
      title: "Cards",
      icon: faCreditCard,
      rightNodes: (
        <>
          <span className="text-button text-brand">{cardsLength}</span>
          {isLogged && (
            <Link
              to={routes.cardTemplates.PATH}
              className="menu__link"
              title="Create a new card"
            >
              <Icon src={faPlusCircle} size="small" />
            </Link>
          )}
        </>
      ),
    },
    {
      title: "Badge",
      labels: [`User level: ${levelProps?.CODE}`],
      icon: faCertificate,
      rightNodes: (
        <Badge className={`bg-${levelProps?.COLOR}`}>{levelProps?.LABEL}</Badge>
      ),
    },
  ];
}

/**
 * Opens a URL in the browser.
 * @param url The URL to be opened.
 */
export function openURL(url: string | undefined) {
  if (url) {
    // If it's an email link.
    if (url.split("://")[0] === "mailto") {
      window.open(url);
      return;
    }

    // A web link otherwise.
    window.open(url, "_blank")?.focus();
  }
}
