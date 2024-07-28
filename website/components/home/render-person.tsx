
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import React from "react";

export function RenderPersonHome({
    linkedin,
    bio,
    twitter,
    name,
    image,
    position,
}: {
    twitter: string;
    linkedin: string;
    bio: React.ReactNode;
    image: string;
    name: React.ReactNode;
    position: string;
}) {
    return (
        <div className="nk-wrap">
            <main className="nk-pages">
                <section className="section section-team bg-light" id="team">
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
                                        <img src={image} alt="team" />


                                    </div>
                                    <h5 className="team-featured-inf mt-3">{name}</h5>
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
                                            {position}
                                        </h2>
                                        {bio}
                                        <p>Social media handle</p>
                                        <ul className="team-soc d-flex">
                                            <li>
                                                <a href={linkedin}>
                                                    <em
                                                        className="fab fa-linkedin-in"
                                                        style={{ fontSize: 24 }}

                                                    />

                                                </a>
                                            </li>
                                            <li>
                                                <a href={twitter}>
                                                    <em
                                                        className="fab fa-twitter"
                                                        style={{ fontSize: 24, marginLeft: 24 }}
                                                    />
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
            </main>
        </div>
    );
}
