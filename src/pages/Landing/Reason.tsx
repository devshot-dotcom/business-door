import {
  faFile,
  faHeart,
  faMapMarkerAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../components/components";

export const Reason = () => {
  return (
    <section id="reason">
      <div className="spaced-for-nav">
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
        <article>
          <header>
            <Icon src={faFile} size="small" />
            <h3 className="text-button text-brand">More than paper</h3>
          </header>
          <p className="text-small text-subtle">
            A business card is considered nothing more than a piece of paper,
            thanks to mobile phones (no hate towards the phones though, we all{" "}
            <Icon src="❤" size="small" color="brand" /> them).
          </p>
          <p className="text-small text-subtle">
            Our cards, on the other hand, have a{" "}
            <span className="text-small text-subtle text-bold">QR code</span> on
            them that leads to the owner's profile upon a single scan, removing
            the “Just paper” problem.
          </p>
        </article>
        <article>
          <header>
            <Icon src={faTrashAlt} size="small" />
            <h3 className="text-button text-brand">Cards aren't useless</h3>
          </header>
          <p className="text-small text-subtle">
            Let's be honest, how do we treat a business card that someone
            respectfully passes on to us? Either we throw it in the trash or
            hide it in the deepest hole of our wallet, never to be seen again.
          </p>
          <p className="text-small text-subtle">
            Our cards, on the other hand, look elegant enough to impress the
            eyes and hold the “special ingredient” that anyone would want to
            scan atleast once.
          </p>
        </article>
        <article>
          <header>
            <Icon src={faMapMarkerAlt} size="small" />
            <h3 className="text-button text-brand">Where's this address</h3>
          </header>
          <p className="text-small text-subtle">
            Once in a lifetime, we face the necessity to reach out to a
            business, only to see their phone hanging up, and their address
            feeling like it exists on Mars.
          </p>
          <p className="text-small text-subtle">
            Our cards, on the other hand, show the address on the maps of your
            mobile after a single scan of the card's QR code.
          </p>
        </article>
      </div>
    </section>
  );
};
