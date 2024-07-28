import { appData } from "../../data";

export function AppFaq() {
  return (
    <section id="faq" className="ud-faq">
      <div className="shape">
        <img src="assets/images/faq/shape.svg" alt="shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title text-center mx-auto">
              <span>FAQ</span>
              <h2>Any Questions? Answered</h2>
              <p></p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            {appData.faq.slice(0, 2).map((element, index) => {
              return <RenderQA {...element} key={index} />;
            })}
          </div>
          <div className="col-lg-6">
            {appData.faq.slice(2, 4).map((element, index) => {
              return <RenderQA {...element} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function RenderQA({
  body,
  title,
  id,
}: {
  title: string;
  body: string;
  id: number;
}) {
  return (
    <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
      <div className="accordion">
        <button
          className="ud-faq-btn collapsed"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
        >
          <span className="icon flex-shrink-0">
            <i className="lni lni-chevron-down"></i>
          </span>
          <span>{title}</span>
        </button>
        <div id={`collapse${id}`} className="accordion-collapse collapse">
          <div className="ud-faq-body">{body}</div>
        </div>
      </div>
    </div>
  );
}
