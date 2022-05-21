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
import { getBucketUrl } from "../../config/database";
import { CardData } from "../../helpers";
import { useApi } from "../../hooks";
import { CardsApi } from "../../hooks/use-api";
import "./card-templates.scss";

function CardTemplates() {
  const api = useApi("cards") as CardsApi;
  const navigate = useNavigate();
  const [cards, setCards] = React.useState<CardData[]>();
  const [isVertical, setIsVertical] = React.useState(false);
  const [selected, setSelected] = React.useState<CardData>();

  const tabStyles = "border border-2 bd-link";

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
            <div className="d-flex flex-column gap-1">
              <h1 className="text-heading">Card Templates</h1>
              <div className="text-small text-subtle">
                Select a template to proceed.
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
            <div className="hstack gap-2">
              <Button
                variant="tertiary"
                onClick={() => setIsVertical(true)}
                className={isVertical ? tabStyles : ""}
              >
                Vertical
              </Button>
              <Button
                variant="tertiary"
                onClick={() => setIsVertical(false)}
                className={isVertical ? "" : tabStyles}
              >
                Horizontal
              </Button>
            </div>
            {isVertical ? (
              <div className="row">
                {cards.map((card, key) =>
                  !card.isVertical ? null : (
                    <div
                      key={key}
                      className="col-12 col-sm-6 col-lg-4 text-center text-sm-start mt-5"
                    >
                      <h3 className="text-h3">{card.name}</h3>
                      <button onClick={() => setSelected(card)}>
                        <img
                          src={`${getBucketUrl("cards")}/vertical/previews/${
                            card.fileName
                          }`}
                          alt=""
                          className={`${
                            selected === card ? tabStyles : ""
                          } w-100 mt-3 rounded`}
                        />
                      </button>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className="row">
                {cards.map((card, key) =>
                  card.isVertical ? null : (
                    <div
                      key={key}
                      className="col-12 col-sm-6 text-center text-sm-start mt-5"
                    >
                      <h3 className="text-h3">{card.name}</h3>
                      <button onClick={() => setSelected(card)}>
                        <img
                          src={`${getBucketUrl("cards")}/previews/${
                            card.fileName
                          }`}
                          alt=""
                          className={`${
                            selected === card ? tabStyles : ""
                          } w-100 mt-3 rounded`}
                        />
                      </button>
                    </div>
                  )
                )}
              </div>
            )}
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
