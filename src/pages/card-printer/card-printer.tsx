import * as React from "react";
import { CardData } from "../../helpers";
import { BusinessCard } from "../../modules";
import { getBucketUrl } from "../../config/database";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button, Loader } from "../../components";
import { useToast } from "../../hooks";
import html2canvas from "html2canvas";
import { routes } from "../../config";

function CardPrinter() {
  const makeToast = useToast();
  const navigate = useNavigate();
  const card: CardData = useLocation().state;
  const [canvas, setCanvas] = React.useState<HTMLCanvasElement>();

  React.useEffect(() => {
    if (card) {
      const cardNode = document.getElementById("cardPreview");

      if (!cardNode) {
        makeToast({
          variant: "invalid",
          title: "Failed to print the card",
        });

        return;
      }

      html2canvas(cardNode, {
        useCORS: true,
        scale: 1,
        width: cardNode.clientWidth,
        height: cardNode.clientHeight,
      }).then((canvas) => setCanvas(canvas));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card]);

  function getSrc(): string {
    if (card) {
      const srcKey = card.isVertical ? "/vertical/" : "/";

      return `${getBucketUrl("cards")}${srcKey}${card.fileName}`;
    }

    return "";
  }

  function onShare() {
    if (canvas) {
      canvas.toBlob((blob) => {
        if (!blob) {
          makeToast({
            variant: "invalid",
            title: "Failed to share the card",
          });
          return;
        }

        try {
          navigator.share({ files: [new File([blob], card.name)] });
        } catch (error) {
          makeToast({
            variant: "invalid",
            title: "Failed to share the card",
          });
          console.error(error);
        }
      });
    }
  }

  return !card ? (
    <Navigate to={"/error"} />
  ) : !canvas ? (
    <>
      <Loader
        className="d-flex justify-content-center align-items-center p-md-3 position-absolute top-0 end-0 bottom-0 start-0"
        style={{
          background: "var(--theme-color-background-subtle)",
          zIndex: 1000,
        }}
      />
      <BusinessCard
        src={getSrc()}
        id="cardPreview"
        fields={card.fields}
        qrCode={card.qrCode || ""}
        qrCodeStyles={card.qrCodeStyles}
        complexFields={card.complexFields}
        style={{
          height: card?.isVertical ? "1050px" : "603px",
          width: card?.isVertical ? "603px" : "1050px",
          position: "absolute",
          right: "1000",
        }}
      />
    </>
  ) : (
    <div
      className="d-flex justify-content-center align-items-center p-md-3 position-fixed top-0 end-0 bottom-0 start-0"
      style={{
        zIndex: 125,
        background: "var(--theme-color-background-subtle)",
      }}
    >
      <div
        className="rounded overflow-hidden p-sm-4"
        style={{
          maxHeight: "100vh",
          overflowY: "auto",
          background: "var(--theme-color-background)",
        }}
      >
        <img
          src={canvas.toDataURL()}
          style={{
            maxHeight: "70vh",
            objectFit: "contain",
          }}
          className="rounded w-100"
          alt=""
        />
        <div className="p-4 p-sm-0 mt-sm-4 d-flex flex-column flex-sm-row gap-3">
          <div className="flex-grow-1">
            <Button variant="tertiary" onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>
          <Button variant="primary" onClick={onShare}>
            Share
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              navigate(routes.cardPrinterOutput.PATH, {
                state: {
                  imgSrc: canvas.toDataURL(),
                  isVertical: card.isVertical,
                },
              })
            }
          >
            Print
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardPrinter;
