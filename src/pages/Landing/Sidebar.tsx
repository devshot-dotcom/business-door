export const Sidebar = () => {
  // https://www.designhill.com/design-blog/the-pros-cons-of-paper-vs-digital-business-cards/
  const quotes = [
    "About 80% of the customers are unable to realize the location of a    business from the address imprinted on it's business card.",
    "A study has pointed out that in the US; nearly 77% of small and medium businesses believe that digital presence helps them in customer acquisition.",
    "You can easily share digital business cards with your clients and people. All you need to do is to send the card to them via email, social media, text [SMS], and other ways.",
    "Digital cards allow you to attach a variety of media. You can add videos, pictures, subscription lists, sign up forms, etc. This is next-gen marketing at its absolute best.",
    "Digital business cards eliminate the need to cut tree for the paper. This helps in keeping the environment safe and secure for healthy breathing of pure air. It also helps in preventing deforestation.",
  ];

  return (
    <aside id="sidebar" className="root__sidebar">
      <div className="spaced-for-nav">
        <article>
          <h3 className="text-paragraph text-bold">💡 Fun Fact</h3>
          <p className="text-paragraph text-subtle">
            {/* https://stackoverflow.com/a/5915122 */}
            {quotes[Math.floor(Math.random() * quotes.length)]}
          </p>
        </article>
      </div>
    </aside>
  );
};
