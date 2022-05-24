import BusinessCardComponent from "./business-card";
import BusinessCardGrid from "./business-card-grid";

const BusinessCard = Object.assign(BusinessCardComponent, {
  Grid: BusinessCardGrid,
});

export default BusinessCard;
