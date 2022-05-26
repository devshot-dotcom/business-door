import BusinessCardGridModule from "./business-card-grid";
import BusinessCardGridDeleteable from "./business-card-grid-deleteable";

const BusinessCardGrid = Object.assign(BusinessCardGridModule, {
  Deleteable: BusinessCardGridDeleteable,
});

export default BusinessCardGrid;
