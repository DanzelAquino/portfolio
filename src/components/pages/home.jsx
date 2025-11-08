import Greeting from "../sections/home/Greeting";
import About from "../sections/home/About";
import Skills from "../sections/home/Skills";
import CallToAction from "../sections/home/CTA";
import Footer from "../sections/shared/Footer";
import { useScrollLock } from "./useScrollLock";

const Home = () => {
  useScrollLock(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#edeeef] to-[#c5cddf] overflow-x-hidden">
      <Greeting />
      <About />
      <Skills />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;