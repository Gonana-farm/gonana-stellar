export function AppPricing() {
  return (
    <section id="pricing" className="ud-pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title mx-auto text-center">
              <span>Pricing</span>
              <h2>Our Pricing Plans</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-0 align-items-center justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing first-item wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div className="ud-pricing-header">
                <h3>STARTING FROM</h3>
                <h4>$ 0.00/mo</h4>
              </div>
              <div className="ud-pricing-body">
                <ul>
                  <li>Unlimited users</li>
                  <li>Live feed updates</li>
                  <li>Online Store</li>
                  <li>Resource management</li>
                  <li>Live chat support</li>
                </ul>
              </div>
              <div className="ud-pricing-footer">
                <a
                  href="javascript:void(0)"
                  className="ud-main-btn ud-border-btn"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing active wow fadeInUp"
              data-wow-delay=".1s"
            >
              <span className="ud-popular-tag">POPULAR</span>
              <div className="ud-pricing-header">
                <h3>STARTING FROM</h3>
                <h4>$ 20.99/mo</h4>
              </div>
              <div className="ud-pricing-body">
                <ul>
                  <li>All in Starter plan</li>
                  <li>Android mobile app setup</li>
                  <li>Events management</li>
                  <li>Custom domain setup</li>
                  <li>Dedicated customer support</li>
                </ul>
              </div>
              <div className="ud-pricing-footer">
                <a
                  href="javascript:void(0)"
                  className="ud-main-btn ud-white-btn"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing last-item wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div className="ud-pricing-header">
                <h3>STARTING FROM</h3>
                <h4>$ 0.00/mo</h4>
              </div>
              <div className="ud-pricing-body">
                <ul>
                  <li>All in Starter plan</li>
                  <li>Android & iOs mobile app setup</li>
                  <li>Mobile application/Website custization</li>
                  <li>Custom UI/UX Design</li>
                  <li>Events management</li>
                </ul>
              </div>
              <div className="ud-pricing-footer">
                <a
                  href="javascript:void(0)"
                  className="ud-main-btn ud-border-btn"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PartnershipRates() {
  return (
    <section id="pricing" className="ud-pricing">
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h6>Partnership Rates</h6>
                <h3>Become a partner</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row  align-items-stretch ">
          {[
            {
              title: "Platinum",
              items: [
                "Keynote Address",
                "Fireside Chat",
                "Exhibition stand",
                "Opportunity to pitch brand (available time slot, 20M)",
                "Advert placement on brochure (cover, center or opening page)",
                "Accessible backstage event pass ",
                "Co-branding of event",
                "Exclusive interview ",
                "Award/trophy as platinum sponsor ",
              ],
              price: "$4,000",
              color: "#E5E4E2",
            },
            {
              title: "Gold",
              color: "#FFD700",
              items: [
                "Keynote Address",
                "Exhibition stand",
                "Opportunity to pitch brand (available time slot, 15M)",
                "Media inclusion ",
                "Co-branding of event ",
                "Advert placement on brochure (full page)",
                "3 backstage passes ",
              ],
              price: "$3,000",
            },
            {
              title: "Silver",
              color: "#C0C0C0",
              items: [
                "Opportunity to pitch brand (available time slot, 10M)",
                "Exhibition stand",
                "Advert placement on brochure ",
                "Co-branding of event",
                "Backstage passes",
              ],
              price: "$2,000",
            },
            {
              title: "Bronze",
              color: "#CD7F32",
              items: [
                "Opportunity to pitch event (available time slot, 5M)",
                "Advert placement on brochure ",
                "Backstage passes",
              ],
              price: "$1,500",
            },
          ].map((e, i) => {
            return (
              <div
                className="col-12 col-md-6 p-2"
                style={{ position: "relative" }}
              >
                <div
                  className="p-3 d-flex  flex-column justify-content-between"
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 3px 20px 0px",
                    background: "white",
                    // borderRadius: 8,
                    borderTop: `3px solid ${e.color}`,
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom mb-4">
                      <div>{e.title}</div>
                      <div style={{ fontSize: 30, color: "black" }}>
                        {e.price}
                      </div>
                    </div>

                    <div>
                      {e.items.map((e, i) => {
                        return (
                          <div className="d-flex mb-2">
                            <div style={{ marginRight: 16 }}>
                              <span
                                style={{
                                  height: 10,
                                  width: 10,
                                  background: "green",
                                }}
                              ></span>
                            </div>
                            <div>{e}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary btn-md">Commit</button>
                  </div>

                  <div
                    style={{
                      fontSize: "100px",
                      position: "absolute",
                      fontWeight: "bold",
                      bottom: 24,
                      right: 24,
                      color: "rgba(200,200,200,.2)",
                    }}
                  >
                    {i + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
