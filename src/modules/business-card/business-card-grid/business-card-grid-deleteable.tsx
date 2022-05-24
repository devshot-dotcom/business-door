import * as React from "react";
import { Button, CloseButton, Loader } from "../../../components";
import { getBucketUrl } from "../../../config/database";
import {
  HorizontalGridcell,
  VerticalGridcell,
} from "./business-card-grid-gridcell";
import { BusinessCardGridDeleteableProps } from "./types";

/**
 * A variant of the business card grid that allows the user to delete cards.
 * Each card's image has a simple `close` button in the top right corner.
 * @returns {JSX.Element}
 * @version 1.0.0
 * @author [kashan-ahmad](https://github.com/kashan-ahmad)
 * @changelog
 * - 1.0.0 - Variant initialized from parent module@1.0.1
 */
function BusinessCardGrid({
  cards,
  onSelect,
  onDelete,
}: BusinessCardGridDeleteableProps): JSX.Element {
  const [isVertical, setIsVertical] = React.useState(false);

  const selectedTabStyle = "border border-2 bd-link";
  const unselectedTabStyle = "border border-2 bd-default";

  return (
    <div>
      <div className="hstack gap-2">
        <Button
          variant="tertiary"
          onClick={() => setIsVertical(true)}
          className={isVertical ? selectedTabStyle : unselectedTabStyle}
        >
          Vertical
        </Button>
        <Button
          variant="tertiary"
          onClick={() => setIsVertical(false)}
          className={isVertical ? unselectedTabStyle : selectedTabStyle}
        >
          Horizontal
        </Button>
      </div>
      {isVertical ? (
        <div className="row" role="grid">
          {cards.filter((card) => card.isVertical).length === 0 ? (
            <Loader.Khaby style={{ height: "80vh" }}>
              Nothing here yet.
            </Loader.Khaby>
          ) : (
            cards.map((card, key) =>
              !card.isVertical ? null : (
                <VerticalGridcell key={key}>
                  <h3 className="text-h3">{card.name}</h3>
                  <div
                    onClick={() => onSelect(card)}
                    tabIndex={0}
                    className="position-relative"
                  >
                    <img
                      src={`${getBucketUrl("cards")}/vertical/previews/${
                        card.fileName
                      }`}
                      alt=""
                      className="w-100 mt-3 rounded"
                    />
                    <CloseButton
                      className="protrude-top-right"
                      onClick={() => onDelete(card)}
                    />
                  </div>
                </VerticalGridcell>
              )
            )
          )}
        </div>
      ) : (
        <div className="row">
          {cards.filter((card) => !card.isVertical).length === 0 ? (
            <Loader.Khaby style={{ height: "80vh" }}>
              Nothing here yet.
            </Loader.Khaby>
          ) : (
            cards.map((card, key) =>
              card.isVertical ? null : (
                <HorizontalGridcell key={key}>
                  <h3 className="text-h3">{card.name}</h3>
                  <div
                    onClick={() => onSelect(card)}
                    tabIndex={0}
                    className="position-relative"
                  >
                    <img
                      src={`${getBucketUrl("cards")}/previews/${card.fileName}`}
                      alt=""
                      className="w-100 mt-3 rounded"
                    />
                    <CloseButton
                      className="protrude-top-right"
                      onClick={() => onDelete(card)}
                    />
                  </div>
                </HorizontalGridcell>
              )
            )
          )}
        </div>
      )}
    </div>
  );
}

export default BusinessCardGrid;
