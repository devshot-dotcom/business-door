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
import { trimByConfig } from "..";
import { Icon, Badge } from "../../../components";
import { getPropsOfLevel, routes } from "../../../config";

/**
 * Parse and retrieve a list of personal information items, ready to be displayed.
 */
export function getPersonalInfo({
  isLogged,
  data,
}: PersonalInfoProps): PersonalInfo[] {
  const { email, city, country, profession, organization, cards, level } = data;

  const levelProps = getPropsOfLevel(level);

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
      title: "Profession",
      labels: [profession, organization],
      icon: faBriefcase,
    },
    {
      title: "Cards",
      icon: faCreditCard,
      rightNodes: (
        <>
          <span className="text-button text-brand">
            {cards && cards !== "" ? JSON.parse(cards).length : 0}
          </span>
          {isLogged && (
            <Link
              to={routes.editProfile.PATH}
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

/**
 * Trims the labels from the array and suffixes the resulting string with ellipsis in case of length exceedings.
 * @param labels The array of labels.
 * @returns {string | null} The trimmed label. Null in case the array is empty.
 */
export function getBetterLabels(labels: string[] | undefined): string | null {
  if (!labels) return null;

  return trimByConfig(labels.join(", "));
}
