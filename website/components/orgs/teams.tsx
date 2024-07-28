import { appData } from "../../data";

export function AppTeam() {
  return (
    <section id="team" className="ud-team">
      <Founder />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title mx-auto text-center">
              <span>Our Team</span>
              <h2>Meet The Team</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {appData.team.map((element, index) => {
            return <TeamCard element={element} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="" id="team">
      <div className="container">
        {/* Block @s */}
        <div className="nk-block nk-block-team-featured team-featured">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div
                className="team-featured-photo tc-light animated"
                data-animate="fadeInUp"
                data-delay=".1"
              >
                <img src="/core/boss.jpeg" alt="team" />
              </div>
              <h5 className="team-featured-inf mt-4">
                Stephen Sunday <br />
                <span style={{ fontWeight: "normal" }}>Founder</span>
              </h5>
            </div>
            <div className="col-lg-7">
              <div className="team-featured-cont">
                <h6
                  className="title title-xs title-light animated"
                  data-animate="fadeInUp"
                  data-delay=".2"
                >
                  behind the idea
                </h6>
                <h2
                  className="title title-lg title-dark animated"
                  data-animate="fadeInUp"
                  data-delay=".3"
                >
                  The Founder
                </h2>
                <p className="animated" data-animate="fadeInUp" data-delay=".4">
                  He's a Blockchain Consultant, founder and CEO of Kusuconsult,
                  the first Blockchain consulting firm in Northern Nigeria (
                  <a href="www.kusuconsult.com">Kusuconsult</a>). He is also
                  into community building, Blockchain content creation, and a
                  Blockchain developer with a wide range of knowledge and
                  experience in designing and deploying blockchain Decentralized
                  applications.
                </p>
                <p className="animated" data-animate="fadeInUp" data-delay=".4">
                  He has worked with reputable Blockchain tech projects like
                  Algorand, Polkadot, and an EVM compatible protocol like like
                  Moonbeam among others.
                </p>
                <div className="mt-3"></div>
                <a href={"/team/steven-sunday"}>Read more</a>
                <p>Social media handle</p>
                <ul className="team-soc d-flex mt-2">
                  <li>
                    <a href={"https://twitter.com/steviekusu"}>
                      <i className="lni lni-twitter-filled"></i>
                    </a>
                  </li>
                  <li style={{ paddingLeft: 12 }}>
                    <a href={"https://www.linkedin.com/in/stephensundaykusu/"}>
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* .row */}
        </div>
        {/* Block @e */}
      </div>
    </section>
  );
}

function TeamCard({ element }: { element: any }) {
  return (
    <div
      className="col-xl-4 col-lg-4 col-sm-6"
      key={element.handle}
      style={{ display: element.handle == "steven-sunday" ? "none" : "block" }}
    >
      <div className="ud-single-team wow fadeInUp" data-wow-delay=".1s">
        <div className="ud-team-image-wrapper">
          <div className="ud-team-image">
            <img src={element.image} alt="team" />
          </div>

          <img
            src="assets/images/team/dotted-shape.svg"
            alt="shape"
            className="shape shape-1"
          />
          <img
            src="assets/images/team/shape-2.svg"
            alt="shape"
            className="shape shape-2"
          />
        </div>
        <div className="ud-team-info">
          <h5>{element.name}</h5>
          <h6>{element.title}</h6>
        </div>
        <ul className="ud-team-socials">
          <li>
            <a
              onClick={() => {
                window.open(element.twitter);
              }}
            >
              <i className="lni lni-twitter-filled"></i>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                window.open(element.linkedin);
              }}
            >
              <i className="lni lni-linkedin-original"></i>
            </a>
          </li>
          <li
            onClick={() => {
              window.open(element.github);
            }}
          >
            <a>
              <i className="lni lni-github-original"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
