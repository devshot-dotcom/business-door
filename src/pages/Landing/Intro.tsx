import { BlobCard } from "../../components/Layout/BlobCard/BlobCard";
import { Vector } from "../../components/Vector/Vector";
import waveX1 from "../../assets/vectors/abstract/wave/wave@x1.svg";
import waveX2 from "../../assets/vectors/abstract/wave/wave@x2.svg";
import shoppingIllustration from "../../assets/illustrations/monochrome/lady-shopping.png";
import shoppingIllustrationX2 from "../../assets/illustrations/monochrome/@x2/lady-shopping.png";
import discussionIllustration from "../../assets/illustrations/monochrome/boy-girl-discussing.png";
import discussionIllustrationX2 from "../../assets/illustrations/monochrome/@x2/boy-girl-discussing.png";
import giftingIllustration from "../../assets/illustrations/monochrome/woman-gift-man.png";
import giftingIllustrationX2 from "../../assets/illustrations/monochrome/@x2/woman-gift-man.png";
import qrIllustration from "../../assets/illustrations/monochrome/lady-qr.png";
import qrIllustrationX2 from "../../assets/illustrations/monochrome/@x2/lady-qr.png";

export const Intro = () => {
  const tagLines = [
    "What's another word for business door? Adoorable.",
    "Being a door, we're open to new things.",
  ];

  return (
    <section id="intro">
      <header>
        <Vector
          src={waveX1}
          srcForMobile={waveX2}
          color="brand"
          className="vector-wave"
        />
      </header>
      <div className="spaced-for-nav">
        <article>
          <div className="intro__title">
            <h2 className="text-h3 hide-on-mobile">How does the door work?</h2>
            <h2 className="text-h2 show-on-mobile" aria-hidden="true">
              How does the door work?
            </h2>
            <div className="text-paragraph text-subtle hide-on-mobile">
              {/* https://stackoverflow.com/a/5915122 */}
              {tagLines[Math.floor(Math.random() * tagLines.length)]}
            </div>
            <div
              className="text-sub-title text-subtle show-on-mobile"
              aria-hidden="true"
            >
              {tagLines[Math.floor(Math.random() * tagLines.length)]}
            </div>
          </div>
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
      </div>
    </section>
  );
};
