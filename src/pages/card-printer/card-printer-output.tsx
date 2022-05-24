import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  imgSrc: string;
  isVertical?: boolean;
};

function CardPrinterOutput() {
  const { imgSrc, isVertical } = useLocation().state as Props;

  React.useEffect(() => {
    window.print();
  }, []);

  return !imgSrc || isVertical === undefined ? (
    <Navigate to="/error" />
  ) : (
    <div
      style={{
        zIndex: 1000,
        width: "1123.2px",
        height: "100vh",
        background: "white",
        position: "absolute",
      }}
    >
      <img
        src={imgSrc}
        alt=""
        style={{
          height: isVertical ? "336px" : "192px",
          width: isVertical ? "192px" : "336px",
        }}
      />
    </div>
  );
}

export default CardPrinterOutput;
