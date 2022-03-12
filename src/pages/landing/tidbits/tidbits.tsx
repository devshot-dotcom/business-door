import { Card } from "../../../components";
import { quotes } from "./tidbits-quotes";
import styles from "./tidbits.module.scss";

const Tidbits = () => {
  return (
    <div className={styles.tidbits}>
      <Card outline="brand" padding="medium" gap="small">
        <h3 className="text-paragraph text-bold">💡 Fun Fact</h3>
        <p className="text-paragraph text-subtle">
          {/* https://stackoverflow.com/a/5915122 */}
          {quotes[Math.floor(Math.random() * quotes.length)]}
        </p>
      </Card>
    </div>
  );
};

export { Tidbits };
