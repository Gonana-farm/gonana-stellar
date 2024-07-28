import { Footer } from "../components/footer";
import { AppHeader } from "../components/header";
import { HomeAboutUs, HomeHero1 } from "../components/home/sections";
import { ContactArea } from "../components/orgs/contact";
import { GonanaDoc } from "../components/orgs/documentation";
import { AppFaq } from "../components/orgs/faq";
import { AppFeatures } from "../components/orgs/features";
import { AppPricing } from "../components/orgs/pricing";
import { AppTeam } from "../components/orgs/teams";
import { AppTestimonials } from "../components/orgs/testimonials";
import AppTimeline from "../components/orgs/timeline";

export default function () {
  return (
    <div>
      <AppHeader />
      <HomeHero1 />
      <HomeAboutUs />
      <AppFeatures />
   
      <GonanaDoc />
      {/* <AppTestimonials /> */}
      {/* <AppTeam /> */}
      <AppFaq />
      <ContactArea />
      <Footer />
    </div>
  );
}
