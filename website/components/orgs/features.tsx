export function AppFeatures() {
  return (
    <section id="features" className="ud-features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title">
              <span>Features</span>
              <h2>What We Offer</h2>
            </div>
          </div>
        </div>
        <div className="row">

          {[{
            icon:"lni-bolt",
            title: "Simple and Fast",
            description: `The design and development of Gonana was made in a way that fits the web3 idea such that any non-tech savvy farmer can find their way around it regardless of educational level or exposure they can use Gonana effectively with a few clicks. Also, Gonana has a very simple and fast payment system for settlement that leverages the blockchain for better efficiency with cross-chain capabilities. It also has a fiat feature to help traders perform smooth and easy onramp/off-ramp functions seamlessly.`
          }, {
            icon:"lni-revenue",
            title: 'Low-cost',
            description: `Using the Gonana application for commodity traders to sell their products is almost completely free. This is to help the traders take as much profit as possible as a reward for the hard work they put on production/processing; also to encourage them to boost production and take advantage of the Defi suit we have.`
          }, {
            icon:"lni-world",
            title: 'Decentralized Exchange',
            description: `We will be integrating a DEX that is easy to use and also help traders to swap their token for another. This also means that they can stake, swap, lend, and borrow while earning some profit for their Defi activities and this will be integrated as the need arises. This is to help the traders have a holistic approach to Defi and Cefi. Also, traders will get a multi-chain exchange where they can use assets from other blockchain protocols alike.`
          }, {
            icon:"lni-bus",
            title: 'Supply chain',
            description: `Gonana has partnered with some logistics companies to make sure that every customer using the Gonana marketplace for purchases and other related activities gets what they order and it is delivered as seen. The supply chain companies will take full responsibility for any damage or loss of produce that are handled by them. The customer can be guaranteed quality, safety and also on time delivery.`
          }, {
            icon:"lni-credit-cards",
            title: 'Escrow Service ',
            description: `In the bid to make sure we have a very transparent system where all parties are served as they should, we have integrated an escrow service that requires both parties confirming that all requirements were met and services were delivered as promised.`
          }].map(element => {
            return <div className="col-xl-4 col-lg-4 col-sm-6">
              <div
                className="ud-single-feature wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="ud-feature-icon">
                  <i className={`lni ${element.icon}`}></i>
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">{element.title}</h3>
                  <p className="ud-feature-desc">
                    {element.description}
                  </p>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  );
}
