import { BlobCard } from "../../components/Layout/BlobCard/BlobCard";
import { Vector } from "../../components/Vector/Vector";
import wave from "../../assets/vectors/abstract/wave.svg";
import shoppingIllustration from "../../assets/illustrations/monochrome/lady-shopping.png";
import shoppingIllustrationX2 from "../../assets/illustrations/monochrome/@x2/lady-shopping.png";
import discussionIllustration from "../../assets/illustrations/monochrome/boy-girl-discussing.png";
import discussionIllustrationX2 from "../../assets/illustrations/monochrome/@x2/boy-girl-discussing.png";
import giftingIllustration from "../../assets/illustrations/monochrome/woman-gift-man.png";
import giftingIllustrationX2 from "../../assets/illustrations/monochrome/@x2/woman-gift-man.png";
import qrIllustration from "../../assets/illustrations/monochrome/lady-qr.png";
import qrIllustrationX2 from "../../assets/illustrations/monochrome/@x2/lady-qr.png";

export const Intro = () => {
  return (
    <section id="intro">
      <header>
        <Vector src={wave} color="brand" />
      </header>
      <article>
        <h1 className="h2">How does the door work?</h1>
        <div role="grid" className="intro__grid">
          <BlobCard
            role="gridcell"
            variant="1.0"
            cover={shoppingIllustration}
            coverForDesktop={shoppingIllustrationX2}
            caption="Set up your profile to display cool stuff about you."
          />
          <BlobCard
            role="gridcell"
            variant="1.1"
            cover={discussionIllustration}
            coverForDesktop={discussionIllustrationX2}
            caption="Choose a card template from a wide variety of free and premium designs."
          />
          <BlobCard
            role="gridcell"
            variant="1.2"
            cover={giftingIllustration}
            coverForDesktop={giftingIllustrationX2}
            caption="Add information, links, images, addresses, and show your card to the world!"
          />
          <BlobCard
            role="gridcell"
            variant="1.0"
            cover={qrIllustration}
            coverForDesktop={qrIllustrationX2}
            caption="Ask the customers to scan the QR code on the card to open your profile anywhere & anytime."
          />
        </div>
      </article>
    </section>
  );
};
