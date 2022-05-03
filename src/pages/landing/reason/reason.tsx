import { Card, NextToNav } from "../../../components";
import { CardTitle } from "../../../components/card";
import { reasons } from "./reason-items";
import styles from "./reason.module.scss";

export const Reason = () => {
  return (
    <section id="reason" className={styles.reason}>
      <NextToNav>
        <header>
          <h2 className="text-h3">Why Business Door?</h2>
          <p className="text-paragraph text-subtle">
            <span className="text-paragraph text-subtle text-bold">
              Business Cards
            </span>{" "}
            were greatly used in the past but, the introduction to mobile phones
            made them go extinct (almost).
          </p>
        </header>

        <div className={styles.cards}>
          {reasons.map((reason, index) => {
            return (
              <Card
                key={index}
                gap="small"
                shadow="smaller"
                background="default-subtle"
              >
                <CardTitle src={reason.icon} size="small">
                  {reason.title}
                </CardTitle>
                <p className="text-paragraph text-subtle">{reason.paragraph}</p>
              </Card>
            );
          })}
        </div>
      </NextToNav>
    </section>
  );
};
