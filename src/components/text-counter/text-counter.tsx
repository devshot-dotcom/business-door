import { TextCounterProps } from ".";

export const TextCounter = ({ value = "", maxLength }: TextCounterProps) => {
  // Classes for the character counters.
  const counterClasses = `text-paragraph ${
    value.length >= maxLength ? "text-brand" : "text-default"
  }`;

  return (
    <div style={{ textAlign: "right" }}>
      {/* Accessibility requires different 
      labels for the different counters */}
      <span className={counterClasses} aria-label="Number of characters">
        {value.length}
      </span>
      <span className={counterClasses} aria-hidden>
        /
      </span>
      <span
        className={counterClasses}
        aria-label="Maximum number of characters allowed"
      >
        {maxLength}
      </span>
    </div>
  );
};
