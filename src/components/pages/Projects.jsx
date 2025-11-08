import ProjectsHero from "../sections/projects/hero";
import ProjectsShowcase from "../sections/projects/Showcase";
import Footer from "../sections/shared/Footer";
import { useScrollLock } from "./useScrollLock";

const Projects = () => {
  useScrollLock(false);

  return (
    <section className="bg-gradient-to-br from-[#edeeef] to-[#c5cddf] text-gray-900 min-h-screen">
      <ProjectsHero />
      <ProjectsShowcase />
      <Footer />
    </section>
  );
};

export default Projects;