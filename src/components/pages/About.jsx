import AboutHero from "../sections/about/Hero";
import AboutDetails from "../sections/about/Details";
import AboutEducation from "../sections/about/Education";
import AboutExperience from "../sections/about/Experience";
import Footer from "../sections/shared/Footer";
import { useScrollLock } from "./useScrollLock";

const About = () => {
  // Enable scroll on this page (shouldLock = false)
  useScrollLock(false);

  return (
    <section className="bg-gradient-to-br from-[#edeeef] to-[#c5cddf] text-gray-900">
      <AboutHero />
      <AboutDetails />
      <AboutEducation />
      <AboutExperience />
      <Footer />
    </section>
  );
};

export default About;