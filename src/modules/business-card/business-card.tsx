import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardComplexField, CardField } from "../../helpers";
import QRCode from "react-qr-code";

type Props = {
  /**
   * The id of the card.
   *
   * @type {string}
   */
  id?: string;

  /**
   * The source to the card's image.
   *
   * @param {string}
   */
  src: string;

  /**
   * The QR code's value to be displayed on the card.
   *
   * @param {string}
   */
  qrCode: string;

  /**
   * The editable fields of the card.
   *
   * @param {CardField[]}
   */
  fields: CardField[];

  /**
   * The styles of the very wrapper of the card.
   *
   * @param {React.CSSProperties}
   */
  style?: React.CSSProperties;

  /**
   * The styles for the QR code.
   *
   * @param {React.CSSProperties}
   */
  qrCodeStyles: React.CSSProperties;

  /**
   * The complex fields of the card.
   *
   * @param {CardComplexField[]}
   */
  complexFields?: CardComplexField[];
};

/**
 * A renderer to render a business card.
 * @returns {JSX.Element}
 * @version 1.0.0
 * @author [kashan-ahmad](https://github.com/kashan-ahmad)
 */
const BusinessCard = ({
  id,
  src,
  qrCode,
  fields,
  style,
  qrCodeStyles,
  complexFields,
}: Props): JSX.Element => (
  <div id={id} style={style}>
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
          <FontAwesomeIcon icon={field.icon.src} style={field.icon.styles} />
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
        ...qrCodeStyles,
      }}
    >
      <QRCode
        value={qrCode}
        size={+(qrCodeStyles.width as string).split("px")[0]}
      />
    </div>
  </div>
);

export default BusinessCard;
