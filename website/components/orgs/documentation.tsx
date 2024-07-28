import React from "react";



export function GonanaDoc() {
    return <React.Fragment>
          <section className="bg-light py-5" id="documents">
          <div className="container-fluid">
            <div className="section-head text-center wide-auto">
              <h2
                className=""
              >
                Documentation
              </h2>
            </div>

            <div className="my-5">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div
                    className="card card-lg animated  py-5 px-4"
                
                  >
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="nk-block-img px-4 pb-4 pb-md-0">
                          <img src="/gonana/app.png" alt="doc" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="nk-block-text">
                          <h4 className="my-2">
                            Read the documentation
                          </h4>
                          <p>
                          Gonana is a well structured marketplace that gives commodity traders/users access to an account on signup. The account helps the traders to have full access and control of the marketplace where they can list their products for the entire Gonana ecosystem and also sell those products to other users of the marketplace. The marketplace gives traders/users a complete social media experience where they can chat with other users and possible investors that would like to collaborate with them on production or other future business engagements. Also this gives the traders a multimedia option to upload images of their products and under the images, interested clients can comment and like products the traders uploaded.
                          </p>
                          <p className="mt-3">
                          Gona (token) is an integral component of the marketplace and the DEX that will be integrated and this will contribute to the expansion and efficiency of our ecosystem. Traders have the option of receiving payment in Gona, participating in Defi-related activities. The total supply of Gona tokens is permanently capped at 1 billion. This means that no minting will be possible through the smart contract, and the total supply will remain constant. Therefore, token burning won't be necessary in the future.
                          </p>
                          <a
                            href="https://gonana.gitbook.io/gonana/"
                            className="btn mt-2 ud-main-btn ud-white-btn"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
}