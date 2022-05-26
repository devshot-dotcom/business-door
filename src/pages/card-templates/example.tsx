import * as React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBucketUrl } from "../../config/database";
import "./card-templates.scss";

function Example() {
  type CardData = {
    name: string;
    tags?: string[];
    fileName: string;
    isVertical?: boolean;
    width: number;
    height: number;
    fonts?: {
      family: string;
      source: string;
    }[];
    qrCodeStyles: React.CSSProperties;
    fields: {
      attributes?: JSX.IntrinsicElements["div"];
      label: string;
      text: string;
    }[];
    complexFields?: {
      attributes?: JSX.IntrinsicElements["div"];
      icon?: {
        src: IconProp;
        styles?: React.CSSProperties;
      };
      title?: {
        text: string;
        attributes?: JSX.IntrinsicElements["div"];
      };
      field: {
        attributes?: JSX.IntrinsicElements["div"];
        label: string;
        text: string;
      };
    }[];
  };

  const cardData: CardData = {
    name: "Aesthetic Business",
    tags: ["Sleek", "Classic"],
    fileName: "card-07.png",
    isVertical: true,
    width: 603,
    height: 1050,
    fonts: [
      {
        family: "EB Garamond",
        source:
          "url(https://fonts.gstatic.com/s/ebgaramond/v25/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-6_RkBI9_.woff2)",
      },
      {
        family: "Work Sans",
        source:
          "url(https://fonts.gstatic.com/s/worksans/v17/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8Jpg.woff2)",
      },
    ],
    qrCodeStyles: {
      position: "absolute",
      width: "120px",
      height: "120px",
      left: "159.41px",
      bottom: "40px",
      overflow: "hidden",
      border: "5px solid #D0C99B",
    },
    fields: [
      {
        attributes: {
          style: {
            position: "absolute",
            overflow: "hidden",
            width: "246px",
            left: "57.8px",
            top: "255.31px",
            fontFamily: "EB Garamond",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "32.0803px",
            lineHeight: "42px",
            textAlign: "center",
            color: "#000000",
            textTransform: "uppercase",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          },
        },
        label: "Card Title",
        text: "",
      },
      {
        attributes: {
          style: {
            position: "absolute",
            overflow: "hidden",
            width: "410px",
            height: "63px",
            left: "156.8px",
            top: "477.31px",
            fontFamily: "EB Garamond",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "48.1205px",
            lineHeight: "63px",
            color: "#D0C99B",
            fontVariant: "small-caps",
          },
        },
        label: "Secondary title",
        text: "",
      },
      {
        attributes: {
          style: {
            position: "absolute",
            overflow: "hidden",
            width: "410px",
            height: "63px",
            left: "156.8px",
            top: "520.36px",
            fontFamily: "EB Garamond",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "63px",
            color: "#D0C99B",
            textTransform: "uppercase",
          },
        },
        label: "Secondary title",
        text: "",
      },
    ],
    complexFields: [
      // Logo
      {
        attributes: {
          style: {
            position: "absolute",
            width: "93.23px",
            height: "93.23px",
            left: "133.34px",
            top: "129.32px",
            borderRadius: "50%",
            border: "2px solid #000000",
          },
        },
        field: {
          text: "",
          label: "Card logo",
          attributes: {
            style: {
              position: "absolute",
              width: "64.1606px",
              letterSpacing: "64.1606px",
              overflow: "hidden",
              height: "74px",
              left: "26.07px",
              top: "9.02px",
              fontFamily: "Times New Roman",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "64.1606px",
              lineHeight: "74px",
              textAlign: "center",
              color: "#000000",
              display: "inline-block",
              transform: "translateX(-2px)",
            },
          },
        },
      },
      {
        // Location
        attributes: {
          style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
            position: "absolute",
            width: "410px",
            left: "156.8px",
            top: "776.94px",
            color: "#D0C99B",
          },
        },
        field: {
          attributes: {
            style: {
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20.0502px",
              lineHeight: "24px",
              color: "inherit",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            },
          },
          label: "Location",
          text: "",
        },
        title: {
          text: "L.",
          attributes: {
            style: {
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20.0502px",
              lineHeight: "24px",
              color: "inherit",
              width: "24px",
            },
          },
        },
      },
      {
        // Email
        attributes: {
          style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
            position: "absolute",
            width: "410px",
            left: "156.8px",
            top: "672.69px",
            color: "#D0C99B",
          },
        },
        field: {
          attributes: {
            style: {
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20.0502px",
              lineHeight: "24px",
              color: "inherit",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
            },
          },
          label: "Email address",
          text: "",
        },
        title: {
          text: "L.",
          attributes: {
            style: {
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20.0502px",
              lineHeight: "24px",
              color: "inherit",
              width: "24px",
            },
          },
        },
      },
      {
        // Website
        attributes: {
          style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
            position: "absolute",
            width: "410px",
            left: "156.8px",
            top: "724.83px",
            color: "#D0C99B",
          },
        },
        field: {
          attributes: {
            style: {
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20.0502px",
              lineHeight: "24px",
              color: "inherit",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
            },
          },
          label: "Website",
          text: "",
        },
        title: {
          text: "W.",
          attributes: {
            style: {
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20.0502px",
              lineHeight: "24px",
              color: "inherit",
              width: "24px",
            },
          },
        },
      },
    ],
  };

  React.useEffect(() => {
    if (!cardData.fonts) return;

    cardData.fonts.forEach(async (font) => {
      const fontFace = new FontFace(font.family, font.source);
      document.fonts.add(await fontFace.load());
    });
  }, [cardData.fonts]);

  //console.log(JSON.stringify(cardData.fields));
  //console.log(JSON.stringify(cardData.qrCodeStyles));
  //console.log(JSON.stringify(cardData.fonts));
  //console.log(JSON.stringify(cardData.complexFields));

  const parsedData: CardData = JSON.parse(JSON.stringify(cardData));

  const [state, setState] = React.useState(parsedData.fields);
  const [complexState, setComplexState] = React.useState(
    parsedData.complexFields
  );

  const src = cardData.isVertical ? "/vertical/" : "/";

  return (
    <>
      <div
        style={{
          width: cardData.width,
          height: cardData.height,
          transform: "scale(.6) translateX(10rem)",
          position: "relative",
        }}
      >
        <img
          src={`${getBucketUrl("cards")}${src}${cardData.fileName}`}
          alt=""
        />
        {
          //cardData.fields.map((field, key) => (
          state.map((field, key) => (
            <div
              key={key}
              {...field.attributes}
              style={{ ...field.attributes?.style, position: "absolute" }}
            >
              {field.text || field.label}
            </div>
          ))
        }
        {
          //cardData.complexFields?.map((field, key) => (
          complexState?.map((field, key) => (
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
          ))
        }
        <div style={cardData.qrCodeStyles}>
          <img
            src="https://i.stack.imgur.com/YLy3V.png"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* Form */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 10rem",
        }}
      >
        {state.map((field, key) => (
          <input
            type="text"
            key={key}
            value={field.text}
            placeholder={field.label}
            style={{ color: "black" }}
            onChange={(e) => {
              const newState = state.slice();
              newState[key].text = e.target.value;
              setState(newState);
            }}
          />
        ))}
        {complexState?.map((field, key) => (
          <input
            type="text"
            key={key}
            value={field.field.text}
            placeholder={field.field.label}
            style={{ color: "black" }}
            onChange={(e) => {
              const newState = complexState.slice();
              newState[key].field.text = e.target.value;
              setComplexState(newState);
            }}
          />
        ))}
      </div>
    </>
  );
}

export default Example;
