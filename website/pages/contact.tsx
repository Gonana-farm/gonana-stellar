import { Footer } from "../components/footer";
import { AppHeader } from "../components/header";
import { HomeHero1 } from "../components/home/sections";
import { ContactArea } from "../components/orgs/contact";

export default function () {
  return (
    <div>
      <AppHeader />
      <section className="ud-page-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-banner-content">
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactArea />
      <Footer />
    </div>
  );
}
