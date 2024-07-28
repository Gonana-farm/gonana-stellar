import { Footer } from "../components/footer";
import { AppHeader } from "../components/header";

export default function Screen() {
  return (
    <div>
      <AppHeader />
      <section className="ud-page-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-banner-content">
                <h1>404 Page</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
