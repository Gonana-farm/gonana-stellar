import React from "react";
import ReactHtmlParser from 'react-html-parser';
import { Footer } from "../../components/footer";
import { AppHeader } from "../../components/header";
import { ContactArea } from "../../components/orgs/contact";
import { AppFaq } from "../../components/orgs/faq";
import { appData } from "../../data/index";

export default function Post({ postData }) {
    return <React.Fragment>
        <AppHeader />
        <div>
            <section id="hero-area" className="header-area header-eight">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div>
                                <h2 style={{ textAlign: 'center', color: "white" }}>Team</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div className="container my-5">

            <div style={{textAlign:'center'}} className="my-5">
                <h2 style={{}} className="mt-3">{postData.name}</h2>
                <p>{postData.title}</p>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-12 col-12 mb-5">
                    <div>
                        <div className="header-image ">
                            <img src={postData.image} alt="#" />
                        </div>

                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 ">
                    <div>
                        {ReactHtmlParser(postData.bio)}
                    </div>
                </div>
            </div>
        </div>

        <AppFaq />
        <ContactArea />
        <Footer />
    </React.Fragment>;
}

export async function getStaticPaths() {
    const paths = appData.team.map(element => {
        return {
            params: {
                person: element.handle,
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
}


export async function getStaticProps({ params }) {
    const postData = appData.team.find(element => {
        console.log(params)
        return element.handle == params.person
    });
    return {
        props: {
            postData,
        },
    };
}