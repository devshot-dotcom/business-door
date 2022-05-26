import { PostgrestError } from "@supabase/supabase-js";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { SUPABASE } from "../../config";
import { BoolBacks, CardData } from "../../helpers";
import Api from "./api";

/**
 * API that handles the cards endpoint.
 * @version 1.0.0
 * @author (kashan-ahmad)[https://github.com/kashan-ahmad]
 */
class CardsApi extends Api {
  /**
   * Handler method for the API's response.
   * @version 1.0.0
   * @author (kashan-ahmad)[https://github.com/kashan-ahmad]
   */
  handleCards(
    cards: CardData[] | null,
    error: PostgrestError | null,
    boolBacks: BoolBacks,
    shouldToast: boolean = true
  ) {
    // Network error, or database errors.
    if (error) {
      shouldToast &&
        this.makeToast({
          subTitle: error.message,
          variant: "invalid",
        });

      boolBacks.onFailure?.(error);
      console.error(error);
      return;
    }

    // When cards aren't found, data is empty.
    if (!cards || cards?.length === 0) {
      shouldToast &&
        this.makeToast({
          title: ReasonPhrases.NOT_FOUND,
          variant: "invalid",
        });

      boolBacks.onFailure?.({
        message: ReasonPhrases.NOT_FOUND,
        code: StatusCodes.NOT_FOUND,
      });

      console.error(`${StatusCodes.NOT_FOUND} - ${ReasonPhrases.NOT_FOUND}`);
      return;
    }

    boolBacks.onSuccess?.(cards);
  }

  /**
   * Method that retrives all the cards from the API.
   * @version 1.0.0
   * @author (kashan-ahmad)[https://github.com/kashan-ahmad]
   */
  async getCards(boolBacks: BoolBacks) {
    const { data: cards, error } = await SUPABASE.from("cards").select("*");
    this.handleCards(cards, error, boolBacks);
  }

  /**
   * Method that retrives all the vertical cards from the API.
   * @version 1.0.0
   * @author (kashan-ahmad)[https://github.com/kashan-ahmad]
   */
  async getVerticalCards(boolBacks: BoolBacks) {
    const { data: cards, error } = await SUPABASE.from("cards")
      .select("*")
      .eq("isVertical", true);
    this.handleCards(cards, error, boolBacks);
  }

  /**
   * Method that retrives all the horizontal cards from the API.
   * @version 1.0.0
   * @author (kashan-ahmad)[https://github.com/kashan-ahmad]
   */
  async getHorizontalCards(boolBacks: BoolBacks) {
    const { data: cards, error } = await SUPABASE.from("cards")
      .select("*")
      .eq("isVertical", false);
    this.handleCards(cards, error, boolBacks);
  }
}

export default CardsApi;
