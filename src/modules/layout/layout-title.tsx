type Props = {
  /**
   * The title to display.
   *
   * @type {string}
   */
  children: React.ReactNode;

  /**
   * The smaller title below the main title.
   *
   * @type {string}
   */
  subtitle?: string;

  /**
   * Whether to show an underline between the title or not.
   *
   * @type {boolean}
   */
  isUnderlined?: boolean;
};

/**
 * The title of a layout.
 * @param {Props} props The properties required by the title.
 * @returns {JSX.Element} The title.
 * @version 1.0.0
 * @author [kashan-ahmad](https://github.com/kashan-ahmad)
 */
const LayoutTitle = ({
  children,
  subtitle,
  isUnderlined,
}: Props): JSX.Element => (
  <div className="d-flex flex-column gap-1">
    <h1 className="text-heading">{children}</h1>
    {subtitle && <div className="text-small text-subtle">{subtitle}</div>}
    {isUnderlined && (
      <div
        style={{
          width: "5rem",
          height: "2px",
          background: "red",
        }}
      />
    )}
  </div>
);

export default LayoutTitle;
