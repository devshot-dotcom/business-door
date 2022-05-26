import { GridcellProps } from "./types";
import styles from "./styles.module.scss";

/**
 * Basic gridcells specific to the business card grid module.
 * @author [kashan-ahmad](https://github.com/kashan-ahmad)
 * @version 1.0.2
 * @changelog
 * - 1.0.1 - Added `cursor: pointer`.
 * - 1.0.2 - Added SCSS module and applied the `styles.column` rule.
 */

/**
 * A gridcell wrapper for a vertical card.
 * @returns {JSX.Element}
 */
const VerticalGridcell = ({
  children,
  ...rest
}: GridcellProps): JSX.Element => (
  <div
    {...rest}
    role="gridcell"
    className={`${styles.column} col-12 col-sm-6 col-lg-4 text-center text-sm-start mt-5`}
  >
    {children}
  </div>
);

/**
 * A gridcell wrapper for a horizontal card.
 * @returns {JSX.Element}
 */
const HorizontalGridcell = ({
  children,
  ...rest
}: GridcellProps): JSX.Element => (
  <div
    {...rest}
    role="gridcell"
    className={`${styles.column} col-12 col-sm-6 text-center text-sm-start mt-5`}
  >
    {children}
  </div>
);

export { VerticalGridcell, HorizontalGridcell };
