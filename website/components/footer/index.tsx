export function Footer() {
  return (
    <>
      <footer id="footer" className="ud-footer wow fadeInUp" data-wow-delay=".15s" style={{background:"#081c15"}}>
        <div className="ud-footer-widgets">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="ud-widget">
                  <img
                    src="/logo-white.png"
                    alt="Logo"
                    height={40}
                    className="mb-3"
                  />
                  <p className="ud-widgetbg-light-desc">
                    The farmers marketplace
                  </p>
                  <ul className="ud-widget-socials">
                    <li>
                      <a href="https://twitter.com/Gonanafarm">
                        <i className="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://medium.com/@gonana_farm">
                        <i className="lni lni-medium"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/gonanafarm">
                        <i className="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                <div className="ud-widget">
                  <h5 className="ud-widget-title">About Us</h5>
                  <ul className="ud-widget-links">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="#features">Features</a>
                    </li>
                    <li>
                      <a href="about">About</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                <div className="ud-widget">
                  <h5 className="ud-widget-title">Quick Links</h5>
                  <ul className="ud-widget-links">
                    <li>
                      <a href="#">Ecosystem</a>
                    </li>
                    {/* <li>
                      <a href="#tokens">Tokens</a>
                    </li> */}
                    <li>
                      <a href="#roadmap">Roadmaps</a>
                    </li>
                    <li>
                      <a href="#faq">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                <div className="ud-widget">
                  <h5 className="ud-widget-title">Our Products</h5>
                  <ul className="ud-widget-links">
                    <li>
                      <a
                        href="https://gona-ten.vercel.app/"
                        rel="nofollow noopner"
                        target="_blank"
                      >
                        Gonana DeFi
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="#"
                        rel="nofollow noopner"
                        target="_blank"
                      >
                        Gonana Marketplace
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        rel="nofollow noopner"
                        target="_blank"
                      >
                        Gonana Logistics
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-8 col-sm-10">
                <div className="ud-widget" id="marketplace">
                  <h5 className="ud-widget-title">MarketPlace</h5>
                  <div>

                    <div>
                      <a
                        href="https://play.google.com/store/apps/details?id=farm.gonana.gonana"
                        rel="nofollow noopner"
                        target="_blank"
                      >
                        <img
                          height={70}
                          src="https://miro.medium.com/max/300/1*nZu0dsnlCQltPT1QMCHFAA.png"
                          alt="ayroui"
                        />
                      </a>
                    </div>
{/* 
                    <div className="my-2">
                      <a
                        href="#"
                        rel="nofollow noopner"
                        target="_blank"
                      >
                        <img
                          height={70}
                          src="https://miro.medium.com/max/300/1*xqT83bMEz92IBYxS9UQNow.png"
                          alt="ecommerce-html"
                        />
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ud-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <ul className="ud-footer-bottom-left">
                  <li>
                    <a href="javascript:void(0)">Privacy policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Support policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Terms of service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="javascript:void(0)" className="back-to-top">
        <i className="lni lni-chevron-up"> </i>
      </a>
    </>
  );
}
