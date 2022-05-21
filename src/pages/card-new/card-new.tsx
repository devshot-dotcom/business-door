import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import QRCode from "react-qr-code";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  CardTitle,
  Footer,
  NextToNav,
  Sidebar,
  TextField,
} from "../../components";
import { TOAST_UPTIME } from "../../components/toast";
import { BREAKPOINTS, routes, SUPABASE } from "../../config";
import { getBucketUrl } from "../../config/database";
import {
  CardData,
  getRandomBackground,
  isArrayValid,
  isObjectValid,
  isStringValid,
} from "../../helpers";
import { useApi, useToast } from "../../hooks";
import { ProfileApi } from "../../hooks/use-api";
import { ProfileData } from "../profile";
import "./card-new.scss";

function CardNew(): JSX.Element {
  const makeToast = useToast();
  const navigate = useNavigate();
  const card: CardData = useLocation().state;
  const [cardStyle, setCardStyle] = React.useState(calculateStyle());
  const [cardHeight, setCardHeight] = React.useState(calculateHeight());
  const [fields, setFields] = React.useState(card.fields);
  const [qrCode, setQrCode] = React.useState("");
  const [complexFields, setComplexFields] = React.useState(card.complexFields);
  const api = useApi("profile") as ProfileApi;
  const user = SUPABASE.auth.user();

  function calculateStyle() {
    if (window.matchMedia(`(min-width: ${BREAKPOINTS.MOBILE.px})`).matches) {
      return card.isVertical
        ? "scale(.6) translate(-12.6rem, -21rem)"
        : "scale(.49) translate(-34rem, -19rem)";
    }

    return card.isVertical
      ? "scale(0.5) translate(-19rem, -33rem)"
      : "scale(.3) translate(-77rem, -44rem)";
  }

  function calculateHeight() {
    if (window.matchMedia(`(min-width: ${BREAKPOINTS.MOBILE.px})`).matches)
      return card.isVertical ? "41rem" : "19rem";

    return card.isVertical ? "33rem" : "11.5rem";
  }

  React.useEffect(() => {
    if (!isObjectValid(user)) {
      makeToast({
        title: "Please log in to continue",
        variant: "invalid",
      });

      navigate(routes.login.PATH);
    }

    if (!isObjectValid(card)) {
      makeToast({
        title: "Please select a template to continue",
        variant: "invalid",
      });

      navigate(routes.cardTemplates.PATH);
    }

    window.addEventListener("resize", () => {
      setCardStyle(calculateStyle());
      setCardHeight(calculateHeight());
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const src = `${getBucketUrl("cards")}${card.isVertical ? "/vertical/" : "/"}${
    card.fileName
  }`;

  return (
    <>
      <NextToNav
        style={{
          minHeight: "100vh",
          background: "var(--theme-color-background)",
        }}
      >
        <div style={{ padding: "var(--layout-gap)" }} className="v-gap">
          <div className="d-flex flex-column gap-1">
            <h1 className="text-heading">Create a card</h1>
            <div className="text-small text-subtle">
              Each template has it's own perks.
            </div>
            <div
              style={{
                width: "5rem",
                height: "2px",
                background: "red",
              }}
            />
          </div>
          <Card gap="small" data-theme-inverted>
            <CardTitle src={faTerminal} size="small">
              Selected template
            </CardTitle>
            <ul className="v-gap-small">
              <li className="text-paragraph">
                <strong className="text-paragraph text-bold">Name: </strong>
                {card.name}
              </li>
              <li className="text-paragraph">
                <strong className="text-paragraph text-bold">Tags: </strong>
                {card.tags?.map((tag) => (
                  <Badge className={getRandomBackground()}>{tag}</Badge>
                ))}
              </li>
              <li className="text-paragraph">
                <strong className="text-paragraph text-bold">
                  Fonts used:{" "}
                </strong>
                {
                  /* Map over the array with a comma between each iteration. */
                  card.fonts?.map((font) => (
                    <>
                      <a
                        href={font.source.split("'")[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-paragraph text-link"
                      >
                        {font.family.split("'")}
                      </a>
                      {font === card.fonts?.[card.fonts.length - 1]
                        ? null
                        : ", "}
                    </>
                  ))
                }
              </li>
            </ul>
          </Card>
          <div
            style={{
              maxWidth: `calc(${window.innerWidth}px - 3rem)`,
              height: cardHeight,
              position: "relative",
            }}
          >
            <div
              style={{
                height: `${card.height}px`,
                width: `${card.width}px`,
                transform: cardStyle,
                position: "absolute",
              }}
            >
              <img src={src} alt="" />
              {fields.map((field, key) => (
                <div
                  key={key}
                  {...field.attributes}
                  style={{ ...field.attributes?.style, position: "absolute" }}
                >
                  {field.text || field.label}
                </div>
              ))}
              {complexFields?.map((field, key) => (
                <div key={key} {...field.attributes}>
                  {field.icon && (
                    <FontAwesomeIcon
                      icon={field.icon.src}
                      style={field.icon.styles}
                    />
                  )}
                  {field.title && (
                    <div {...field.title.attributes}>{field.title.text}</div>
                  )}
                  {field.field && (
                    <div {...field.field.attributes}>
                      {field.field.text || field.field.label}
                    </div>
                  )}
                </div>
              ))}
              <div
                style={{
                  background: "white",
                  ...card.qrCodeStyles,
                }}
              >
                <QRCode
                  value={qrCode}
                  size={+(card.qrCodeStyles.width as string).split("px")[0]}
                />
              </div>
            </div>
          </div>
          <form className="row gx-4 gy-4">
            {fields.map((field, key) => (
              <div className="v-gap-small col-12 col-md-6">
                <label className="text-paragraph" htmlFor={`field-${key}`}>
                  {field.label}
                </label>
                <TextField
                  as="input"
                  type="text"
                  key={key}
                  id={`field-${key}`}
                  state={{
                    value: field.text,
                    variant: "default",
                  }}
                  placeholder={field.label}
                  onChange={(e) => {
                    const newState = fields.slice();
                    newState[key].text = e.target.value;
                    setFields(newState);
                  }}
                />
              </div>
            ))}
            {complexFields?.map((field, key) => (
              <div className="v-gap-small col-12 col-md-6">
                <label
                  className="text-paragraph"
                  htmlFor={`complexField-${key}`}
                >
                  {field.field.label}
                </label>
                <TextField
                  as="input"
                  type="text"
                  id={`complexField-${key}`}
                  key={key}
                  state={{
                    value: field.field.text,
                    variant: "default",
                  }}
                  placeholder={field.field.label}
                  onChange={(e) => {
                    const newState = complexFields.slice();
                    newState[key].field.text = e.target.value;
                    setComplexFields(newState);
                  }}
                />
              </div>
            ))}
            <div className="col-12 v-gap-small">
              <label htmlFor="qrCode" className="text-paragraph">
                QR Code
              </label>
              <div className="text-small text-subtle">
                Anything you write here will be encoded into the QR code on the
                card.
              </div>
              <TextField
                as="input"
                placeholder="e.g. https://www.google.com"
                state={{
                  value: qrCode,
                  variant: "default",
                }}
                onChange={(e) => setQrCode(e.target.value)}
              />
            </div>
            <div className="text-end">
              <Button
                type="button"
                variant="primary"
                onClick={() => {
                  if (
                    window.confirm("Are you sure you want to create this card?")
                  ) {
                    makeToast({
                      title: "Creating card...",
                      subTitle: "This may take a while...",
                      variant: "loading",
                      upTime: TOAST_UPTIME.REMOVE_ON_PUSH,
                    });

                    api.fetchById(user!.id, {
                      onSuccess: (profile: ProfileData) => {
                        makeToast({
                          title: "Existing cards found",
                          subTitle: "Adding the new member to the family...",
                          variant: "loading",
                          upTime: TOAST_UPTIME.REMOVE_ON_PUSH,
                        });

                        function updateProfile(profile: ProfileData) {
                          api.update(
                            profile,
                            {
                              onSuccess: () =>
                                makeToast({
                                  title: "Card created successfully",
                                  subTitle:
                                    "Visit your cards by clicking the cards section at Personal Information > Cards on your profile.",
                                }),
                            },
                            false
                          );
                        }

                        if (isStringValid(profile.cards)) {
                          updateProfile({
                            ...profile,
                            cards: JSON.stringify([
                              ...JSON.parse(profile.cards!),
                              card,
                            ]),
                          });
                          return;
                        }

                        // @ts-ignore
                        if (isArrayValid(profile.cards)) {
                          updateProfile({
                            ...profile,
                            cards: JSON.stringify([
                              // @ts-ignore
                              ...profile.cards,
                              card,
                            ]),
                          });
                          return;
                        }

                        updateProfile({
                          ...profile,
                          cards: JSON.stringify([card]),
                        });
                      },
                      onFailure: () =>
                        makeToast({
                          title: "Card creation failed!",
                          subTitle: "Please retry again or contact support.",
                          variant: "invalid",
                        }),
                    });
                  }
                }}
              >
                Create this card
              </Button>
            </div>
          </form>
        </div>
      </NextToNav>
      <Sidebar className="hide show-when-sidebar-appears" />
      <Footer />
    </>
  );
}

export default CardNew;
