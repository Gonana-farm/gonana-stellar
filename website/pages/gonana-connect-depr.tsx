import { Footer } from "../components/footer";
import { AppHeader } from "../components/header";
import { HomeAboutUs } from "../components/home/sections";
import { PartnershipRates } from "../components/orgs/pricing";

export default function () {
  return (
    <div>
      <AppHeader />
      <HomeHero1 />

      <div className="container mt-5 pt-3">
        <div className="row">
          <div className="col-12 col-md-6">
            <div
              className="section-title-five"
              style={{ textAlign: "left", margin: 0 }}
            >
              <div className="row">
                <div className="col-12">
                  <div className="conten">
                    <h6>About Gonana</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className=" text-justify" style={{ textAlign: "justify" }}>
              <p className="my-2">
                Gonana is a Blockchain-based project that aims to create a fully
                transparent, cross-chain, and scalable marketplace that connects
                farmers and allows them to trade their agricultural products on
                the global market.
              </p>

              <p className="my-4">
                Gonana is a unique and easy-to-use marketplace for farmers
                worldwide, its innovative technology stack enables seamless
                interaction for local and international farmers to connect and
                conduct business transparently by leveraging the power of
                Blockchain technology.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="/farmerv2.jpg"
              alt="about"
              className=""
              style={{ borderRadius: 12 }}
            />
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-3">
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              src="/connect.jpg"
              alt="about"
              className=""
              style={{ borderRadius: 12 }}
            />
          </div>
          <div className="col-12 col-md-6">
            <div
              className="section-title-five"
              style={{ textAlign: "left", margin: 0 }}
            >
              <div className="row mt-3">
                <div className="col-12">
                  <div className="content">
                    <h6>Why Gonana Connect</h6>
                  </div>
                </div>
              </div>
            </div>
            <p className="my-2">
              There is a growing interest for blockchain and cryptocurrency
              adoption in the Northern part of Nigeria and there has been little
              attention given to it. Gonana Connect is a conference that aims to
              bridge the gap and also satisfy the curiosity and quest for
              knowledge by bringing ecosystem key stakeholders to Jos, Nigeria
              for an engagement with these enthusiasts in the conference.
            </p>

            <p className="my-4">
              Kusuconsult’s (www.kusuconsult.com) CEO Mr. Stephen Sunday
              (Founder Gonana and Gonana Connect convener) has in the last 5
              years led the adoption of blockchain technology and cryptocurrency
              in this part of Nigeria, now wants to partner with you to bring
              these communities together in a conference where they will hear
              more insights from industry expects and also listen to your
              solutions from your company representatives and also from your
              marketing materials.
            </p>
          </div>
        </div>
      </div>

      <Partners />

      <PartnershipRates />

      <div className="container mb-5">
        <div style={{}}>
          <div className="row justify-content-center">
            {[
              { icon: "lni lni-timer", value: "9AM WAT" },
              { icon: "lni lni-calendar", value: "2nd December, 2022" },
              {
                icon: "lni lni-map",
                value: "Sarau Centre, Jiyep Road, Behind NTA, Jos, Nigeria.",
              },
            ].map((e) => {
              return (
                <div className="col-12 col-md-4 col-lg-3 mb-2">
                  <div  className="p-2 border" style={{ background: "white", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", borderTop:"3px solid gray" }}>
                    <div
                      className="d-flex align-items-center "
                      style={{ fontSize: 46 }}
                    >
                      <div>
                        <i className={e.icon} style={{ color: "green" }}></i>
                      </div>
                      <p style={{ color: "black", paddingLeft: 12 }}>
                        {e.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export function HomeHero1() {
  return (
    <div>
      <section
        id="hero-area"
        className="header-area header-eight"
        style={{ background: "#1d3557" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 ">
              <div className="header-content">
                <h1>Gonana Connect</h1>
                <p>
                  Join us on the 2nd of December to connect with other
                  blockchain enthusiasts, get the latest updates on blockchain
                  and learn more about how it is shaping the future.
                </p>

                <div className="my-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfSHsez_IIw9bYRwPt8LakATh1suZkBc3VR9aOrLTx7AmrNBg/viewform?vc=0&c=0&w=1&flr=0&gxid=-8203364"
                    className="btn primary-btn"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6  ">
              <img
                src="/assets/images/coo.jpg"
                alt="about"
                className=""
                style={{ borderRadius: 12 }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Partners() {
  return (
    <div id="clients" className="brand-area section" style={{background:'white'}}>
      <div className="section-title-five">
        <div className="container">
          <div className="row  py-0">
            <div className="col-12  my-0">
              <div className="content ">
                <h6 py-0>Meet our Partners</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {[
            "assets/images/33.jpg",
            "assets/images/watr.jpg",
            // "assets/images/binance.jpg",
            "assets/images/platec.jpg",
            "assets/images/alpha.jpg",
            "assets/images/siban.jpg",
            "assets/images/jay.jpg",
            "assets/images/rest.jpg",
          ].map((e) => {
            return (
              <div className="col-6 col-sm-4 col-md-3">
                <div className="single-image">
                  <img src={e} alt="Brand Logo Images" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
