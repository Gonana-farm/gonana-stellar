import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function AppTimeline() {
  return (
    <React.Fragment>
      <div className="row" id="roadmap">
        <div className="col-lg-12">
          <div className="ud-section-title mx-auto text-center">
            <span>THE ROADMAP TO SUCCESS</span>
            <h2>Development Roadmap</h2>
            <p>
              Our market strategy will prioritise blockchain technology rollout
              to utilities based on their transformation. View our roadmap to
              see how exactly we are making that happen.
            </p>
          </div>
        </div>
      </div>
      <div style={{ background: "#e5e5e5" }}>
        <div className="container-fluid">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022"
              iconStyle={{
                background: "#246935",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={<i className="lni lni-checkmark"></i>}
            >
              <span>Q2 2022</span>
              <h4 className="vertical-timeline-element-subtitle">
                Concept development, website, and other documents for the Gonana
                project.
              </h4>
              <ul className="list list-dot">
                <li>• MVP development marketplace.</li>
                <li>• DEX development.</li>
                <li>
                  • Marketplace/DEX Development and deployment on the
                  blockchain/Integration.
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022"
              iconStyle={{
                background: "#246935",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={<i className="lni lni lni-checkmark"></i>}
            >
              <span>Q3 2022</span>
              <h4 className="vertical-timeline-element-subtitle">
                Community testing of Marketplace.
              </h4>
              <ul className="list list-dot">
                <li>
                  • Bridge with Acala, Near, Evmos, Solana, Celo, Algorand, and
                  XDC.
                </li>
                <li>
                  • Deployment of Marketplace savings/Staking features on the
                  DEX.
                </li>
                <li>
                  • Onboarding of supply chain (logistics companies) partners
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022"
              iconStyle={{
                background: "#246935",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={<i className="lni lni-spinner"></i>}
            >
              <span>Q4 2022 - Q1 2023</span>
              <h4 className="vertical-timeline-element-subtitle">
                Auditing of all written codes
              </h4>
              <ul className="list list-dot">
                <li>
                  • Partnership with farmers' associations and cooperatives.
                </li>
                <li>
                  • Collaboration and partnerships with Blockchain and
                  non-blockchain actors.
                </li>
                <li>• Onboarding farmers and other users.</li>
                <li>• Gonana Launch</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022"
              iconStyle={{
                background: "#246935",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={<i className="lni lni-timer"></i>}
            >
              <span>Q2 2023</span>
              <h4 className="vertical-timeline-element-subtitle">
                Community involvement programs and DAO implementation.
              </h4>
              <ul className="list list-dot">
                <li>
                  • Global partnership and collaborations with other farmers
                  associations.
                </li>
                <li>
                  • More partnerships with supply chain companies and other
                  associations.
                </li>
                <li>
                  • Incorporation in Europe, UAE, and other African countries.
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </React.Fragment>
  );
}
