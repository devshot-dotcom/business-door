import { ComponentPropsWithoutRef } from "react";
import { CardData } from "../../../helpers";

export type BusinessCardGridProps = {
  /**
   * The list of cards to display.
   *
   * @type {CardData[]}
   */
  cards: CardData[];

  /**
   * The callback that is called when a card is selected.
   *
   * @type {(card: CardData) => void}
   */
  onSelect: (card: CardData) => void;
};

export type BusinessCardGridDeleteableProps = {
  /**
   * The callback that is called when a card is deleted.
   *
   * @type {(card: CardData) => void}
   */
  onDelete: (card: CardData) => void;
} & BusinessCardGridProps;

export type GridcellProps = {
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;
