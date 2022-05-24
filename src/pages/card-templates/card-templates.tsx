import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardTitle,
  Footer,
  Loader,
  NextToNav,
  Sidebar,
} from "../../components";
import { routes } from "../../config";
import { CardData } from "../../helpers";
import { useApi } from "../../hooks";
import { CardsApi } from "../../hooks/use-api";
import { Layout, BusinessCard } from "../../modules";
import "./card-templates.scss";

function CardTemplates() {
  const navigate = useNavigate();
  const api = useApi("cards") as CardsApi;
  const [cards, setCards] = React.useState<CardData[]>();
  const [selected, setSelected] = React.useState<CardData>();

  React.useEffect(() => {
    api.getCards({
      onSuccess: (cards: CardData[]) => setCards(cards),
      onFailure: () => navigate("/error"),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NextToNav
        style={{
          minHeight: "100vh",
          background: "var(--theme-color-background)",
        }}
      >
        {cards === undefined ? (
          <Loader style={{ height: "100vh" }} />
        ) : (
          <div
            style={{ padding: "var(--layout-gap)", gap: "var(--layout-gap)" }}
            className="v-gap"
          >
            <Layout.Title subtitle="Select a template to proceed." isUnderlined>
              Card Templates
            </Layout.Title>
            <Card gap="small" data-theme-inverted>
              <CardTitle src="😉" size="small">
                Pro tip
              </CardTitle>
              <p className="text-paragraph">
                We allow you to create cards in two major variants;{" "}
                <em className="text-paragraph">Vertical</em> and{" "}
                <em className="text-paragraph">Horizontal</em>.
              </p>
              <ul>
                <li className="text-paragraph">
                  <strong className="text-paragraph text-bold">
                    Vertical cards
                  </strong>{" "}
                  are suitable for digital-only interactions.
                </li>
                <li className="text-paragraph">
                  <strong className="text-paragraph text-bold">
                    Horizontal cards
                  </strong>{" "}
                  can be printed out and used as paper cards as well.
                </li>
              </ul>
            </Card>
            <BusinessCard.Grid
              cards={cards}
              onSelect={(card: CardData) => setSelected(card)}
            />
            <div className="text-end">
              <Button
                disabled={selected === undefined}
                className="mt-5"
                onClick={() =>
                  navigate(routes.cardNew.PATH, { state: selected })
                }
              >
                Proceed to create card
              </Button>
              {selected === undefined && (
                <div className="text-small text-brand mt-2">
                  Please select a template to proceed!
                </div>
              )}
            </div>
          </div>
        )}
      </NextToNav>
      <Sidebar className="hide show-when-sidebar-appears" />
      <Footer />
    </>
  );
}

export default CardTemplates;
