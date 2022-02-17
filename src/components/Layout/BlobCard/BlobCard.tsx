import {
  ComponentPropsWithoutRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { breakpoints } from "../../../config/breakpoints";
import { ThemeContext } from "../../../config/context/ThemeContext";
import { DynamicModule } from "../../../helpers/types";
import "./BlobCard.scss";

interface Props extends ComponentPropsWithoutRef<"figure"> {
  /** The source of the image inside the blob. */
  cover?: string;

  /** The variant of the blob, each differs in shape. */
  variant?: "1.0" | "1.1" | "1.2";

  /** The caption beneath the blob. */
  caption?: string;

  /** Responsive cover source. Will be shown on
   * the written screen size and greater. */
  coverForMobile?: string;

  /** Responsive cover source. Will be shown on
   * the written screen size and greater. */
  coverForTablet?: string;

  /** Responsive cover source. Will be shown on
   * the written screen size and greater. */
  coverForLaptop?: string;

  /** Responsive cover source. Will be shown on
   * the written screen size and greater. */
  coverForDesktop?: string;
}

/**
 * A card that features a blob
 * instead of a traditional cover image.
 * The blob then can contain a cover image
 * just for formality, or... for formality.
 */
const BlobCard = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  const {
    cover,
    variant = "1.0",
    caption,
    className = "",
    coverForMobile,
    coverForTablet,
    coverForLaptop,
    coverForDesktop,
    ...rest
  } = props;

  // To update the component on dynamic import.
  const [blob, setBlob] = useState<DynamicModule>();

  useEffect(() => {
    // Dynamically import the correct blob.
    import(
      `../../../assets/vectors/abstract/blobs/@${theme}/blob@${variant}.svg`
    ).then((blob: DynamicModule) => setBlob(blob));
  }, [theme, variant]);

  return (
    <figure
      aria-label="A card with a blob. Nothing special though."
      className={`coffee-blob-card ${className}`}
      {...rest}
    >
      <div role="group" className="blob-card__cover" aria-hidden="true">
        <img
          src={blob?.default}
          alt="Used to be a blob here."
          className="blob-card__blob"
        />
        {cover && (
          <picture>
            {coverForMobile && (
              <source
                media={`(min-width: ${breakpoints.mobile.px})`}
                srcSet={coverForMobile}
              />
            )}
            {coverForTablet && (
              <source
                media={`(min-width: ${breakpoints.tablet.px})`}
                srcSet={coverForTablet}
              />
            )}
            {coverForLaptop && (
              <source
                media={`(min-width: ${breakpoints.laptop.px})`}
                srcSet={coverForLaptop}
              />
            )}
            {coverForDesktop && (
              <source
                media={`(min-width: ${breakpoints.desktop.px})`}
                srcSet={coverForDesktop}
              />
            )}
            <img
              src={cover}
              alt="Used to be an illustration here."
              className="blob-card__illustration"
            />
          </picture>
        )}
      </div>
      {caption && (
        <figcaption className="blob-card__caption text-paragraph">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export { BlobCard };
