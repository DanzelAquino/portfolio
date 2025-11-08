import ContactForm from "../sections/contact/Form";
import ContactInfo from "../sections/contact/Info";
import ContactHeader from "../sections/contact/Header";
import Footer from "../sections/shared/Footer";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#edeeef] to-[#c5cddf] text-[#545454] relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <ContactHeader />
        <ContactForm />
        <ContactInfo />
        <Footer />
      </div>
    </section>
  );
};

export default Contact;