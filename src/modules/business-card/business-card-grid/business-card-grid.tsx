import * as React from "react";
import { Button, Loader } from "../../../components";
import { getBucketUrl } from "../../../config/database";
import {
  HorizontalGridcell,
  VerticalGridcell,
} from "./business-card-grid-gridcell";
import { BusinessCardGridProps } from "./types";

/**
 * A simple component to display a list of cards in an organized grid.
 * The grid is parented by a tab-based layout.
 * The layout allows the user to select between vertical or horizontal cards by clicking on the tabs.
 * @returns {JSX.Element}
 * @version 1.0.1
 * @author [kashan-ahmad](https://github.com/kashan-ahmad)
 * @changelog
 * - 1.0.1 - Added notifier that shows if a card tab is empty.
 */
function BusinessCardGrid({
  cards,
  onSelect,
}: BusinessCardGridProps): JSX.Element {
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
                  <button onClick={() => onSelect(card)}>
                    <img
                      src={`${getBucketUrl("cards")}/vertical/previews/${
                        card.fileName
                      }`}
                      alt=""
                      className="w-100 mt-3 rounded"
                    />
                  </button>
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
                  <button onClick={() => onSelect(card)}>
                    <img
                      src={`${getBucketUrl("cards")}/previews/${card.fileName}`}
                      alt=""
                      className="w-100 mt-3 rounded"
                    />
                  </button>
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
