import * as React from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { Button, Loader } from "../../components";
import { TOAST_UPTIME } from "../../components/toast";
import { routes } from "../../config";
import { CardData, isArrayValid } from "../../helpers";
import { useApi, useToast } from "../../hooks";
import { ProfileApi } from "../../hooks/use-api";
import { BusinessCard } from "../../modules";
import Layout from "../../modules/layout";
import "./cards.scss";

function Cards() {
  const makeToast = useToast();
  const navigate = useNavigate();
  const api = useApi("profile") as ProfileApi;
  const cardsAsProp: CardData[] = useLocation().state;
  const [cards, setCards] = React.useState<CardData[]>();
  const { userId } = useOutletContext<{ userId: string }>();
  const [selectedCard, setSelectedCard] = React.useState<CardData>();

  React.useEffect(() => {
    if (cardsAsProp && isArrayValid(cardsAsProp)) {
      setCards(cardsAsProp);
      return;
    }

    api.fetchColumnById(userId, "cards", {
      onSuccess: ({ cards }) => setCards(cards),
      onFailure: () => navigate(routes.error400.PATH),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsAsProp, userId]);

  /**
   * Method that deletes a card.
   * Serves as a callback for the `onDelete` prop of the grid component.
   * @param {CardData} card The card to be deleted.
   */
  function onDelete(card: CardData) {
    if (window.confirm("Are you sure you want to delete this card?"))
      if (cards && cards.length > 0) {
        // Since the cards have been divided
        // based on their orientations, there are
        // 2 loops that generate their DOMs. Hence,
        // the traditional way of deleting an element
        // by its index is not possible. So we find
        // the index manually, and filter it out.
        const newCards = cards.filter((c) => c !== cards[cards.indexOf(card)]);

        makeToast({
          variant: "loading",
          title: "Deleting the card...",
          upTime: TOAST_UPTIME.REMOVE_ON_PUSH,
        });

        // User's cards are stored in their profile,
        // hence we update the `cards` column with the
        // new cards and viola!
        api.updateColumnById(
          userId,
          "cards",
          newCards,
          {
            onSuccess: () => {
              setCards(newCards);
              makeToast({
                variant: "valid",
                upTime: TOAST_UPTIME.ONE_LINER,
                title: "Card deleted successfully",
              });
            },
            onFailure: () =>
              makeToast({
                variant: "invalid",
                title: "Failed to delete the card",
              }),
          },
          false
        );
      }
  }

  function initEdit() {
    if (selectedCard) {
      navigate(routes.cardEdit.PATH, {
        state: { card: selectedCard, cards: cards },
      });
    }
  }

  return (
    <Layout>
      {cards === undefined ? (
        <Loader style={{ height: "100vh" }} />
      ) : (
        <>
          {cards === null || cards.length === 0 ? (
            <Loader.Khaby style={{ height: "100vh" }}>
              <p className="text-paragraph">
                You don't have any cards yet.{" "}
                <Link
                  to={routes.cardTemplates.PATH}
                  className="text-paragraph text-link"
                >
                  Create?
                </Link>
              </p>
            </Loader.Khaby>
          ) : (
            <>
              <Layout.Title isUnderlined>Your cards</Layout.Title>
              <BusinessCard.Grid.Deleteable
                cards={cards}
                onDelete={onDelete}
                onSelect={(card: CardData) => setSelectedCard(card)}
              />
              <div className="hstack gap-2 justify-content-en">
                <Button
                  variant="primary"
                  disabled={!selectedCard}
                  onClick={() =>
                    navigate(routes.cardPrinter.PATH, {
                      state: selectedCard,
                    })
                  }
                >
                  Print
                </Button>
                <Button
                  variant="primary"
                  disabled={!selectedCard}
                  onClick={initEdit}
                >
                  Edit
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </Layout>
  );
}

export default Cards;
