import { ComponentPropsWithoutRef } from "react";

export interface BlobProps extends ComponentPropsWithoutRef<"figure"> {
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
