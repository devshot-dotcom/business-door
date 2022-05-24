/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QRCode from "react-qr-code";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Footer,
  Loader,
  NextToNav,
  Sidebar,
  TextField,
} from "../../components";
import { TOAST_UPTIME } from "../../components/toast";
import { BREAKPOINTS, routes, SUPABASE } from "../../config";
import { getBucketUrl } from "../../config/database";
import { CardComplexField, CardData, CardField } from "../../helpers";
import { useApi, useToast } from "../../hooks";
import { ProfileApi } from "../../hooks/use-api";
import Layout from "../../modules/layout";
import "./card-edit.scss";

/**
 * This component and the other one is fucked up mate. Better fix these soon :D
 * @returns
 */
function CardEdit(): JSX.Element {
  const makeToast = useToast();
  const navigate = useNavigate();
  const { state } = useLocation();
  if (!state) {
    return <Loader.Khaby />;
  }
  const card: CardData = state.card;
  const [cards, setCards] = React.useState(state.cards);
  const api = useApi("profile") as ProfileApi;
  const [cardStyle, setCardStyle] = React.useState(calculateStyle());
  const [cardHeight, setCardHeight] = React.useState(calculateHeight());
  const [cardName, setCardName] = React.useState("");
  const [fields, setFields] = React.useState<CardField[]>();
  const [qrCode, setQrCode] = React.useState("");
  const [complexFields, setComplexFields] =
    React.useState<CardComplexField[]>();
  const user = SUPABASE.auth.user();

  function calculateStyle() {
    if (!card) return "";

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
    if (!card) return "";

    if (window.matchMedia(`(min-width: ${BREAKPOINTS.MOBILE.px})`).matches)
      return card.isVertical ? "41rem" : "19rem";

    return card.isVertical ? "33rem" : "11.5rem";
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (cards && cards.length > 0) {
      const newCard = { ...card, name: cardName, qrCode: qrCode };

      const newCards = cards.slice();
      newCards[cards.indexOf(card)] = newCard;

      makeToast({
        variant: "loading",
        title: "Updating the card...",
        upTime: TOAST_UPTIME.REMOVE_ON_PUSH,
      });

      api.updateColumnById(user!.id, "cards", newCards, {
        onSuccess: () => {
          setCards(newCards);
          makeToast({
            variant: "valid",
            title: "Card updated successfully",
          });
          navigate(routes.cards.PATH, { state: newCards });
        },
        onFailure: () =>
          makeToast({
            variant: "invalid",
            title: "Failed to update the card",
          }),
      });
    }
  }

  React.useEffect(() => {
    if (!user) {
      makeToast({
        title: "Please log in to continue",
        variant: "invalid",
      });

      navigate(routes.login.PATH);
      return;
    }

    if (!card) {
      makeToast({
        title: "Please select a template to continue",
        variant: "invalid",
      });

      navigate(routes.cardTemplates.PATH);
      return;
    }

    setFields(card.fields);
    setCardName(card.name);
    setComplexFields(card.complexFields);

    window.addEventListener("resize", () => {
      setCardStyle(calculateStyle());
      setCardHeight(calculateHeight());
    });

    // Check if we need to request some fonts.
    if (!card.fonts) return;

    // Request the required fonts and add them to the document.
    card.fonts.forEach(async (font) => {
      const fontFace = new FontFace(font.family, font.source);
      document.fonts.add(await fontFace.load());
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card]);

  if (!card) return <></>;

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
          <Layout.Title isUnderlined>Edit a card</Layout.Title>
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
              {fields?.map((field, key) => (
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
          <form className="row gx-4 gy-4" onSubmit={onSubmit}>
            <div className="v-gap-small col-12 col-md-6">
              <label className="text-paragraph" htmlFor="field-name">
                Card name
              </label>
              <TextField
                as="input"
                type="text"
                id="field-name"
                state={{
                  value: cardName,
                  variant: "default",
                }}
                placeholder={card.name}
                onChange={(e) => setCardName(e.target.value)}
              />
              <p className="text-small text-brand">
                Please name the card to your needs in order to differentiate
                between duplicates with ease.
              </p>
            </div>
            {fields?.map((field, key) => (
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
              <Button type="submit" variant="primary">
                Confirm changes
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

export default CardEdit;
