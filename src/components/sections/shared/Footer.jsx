import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/DanzelAquino",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/danzelaquino",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:danzel21.aquino@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const companies = [
    "Knowles Training Institute",
    "The Umonics Method", 
    "UIP Incorporated",
    "Aureal Industry Corp."
  ];

  const educationalInstitutions = [
    "Polytechnic University of the Philippines",
  ];

  return (
    <footer className="bg-[#1e1a17] text-[#edeeef] border-t border-[#545454]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#c5cddf] mb-4">Danzel Aquino</h3>
            <p className="text-[#c5cddf] leading-relaxed">
              Crafting digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#545454] rounded-lg text-[#edeeef] hover:bg-[#c5cddf] hover:text-[#1e1a17] transition-all duration-300 transform hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#c5cddf] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#edeeef] hover:text-[#c5cddf] transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#c5cddf] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#c5cddf] mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:danzel21.aquino@gmail.com"
                className="flex items-center text-[#edeeef] hover:text-[#c5cddf] transition-colors duration-200 group"
              >
                <svg className="w-5 h-5 mr-3 text-[#c5cddf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                danzel21.aquino@gmail.com
              </a>
              <div className="flex items-center text-[#edeeef]">
                <svg className="w-5 h-5 mr-3 text-[#c5cddf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Shine Residences, Renaissance Center, Meralco Ave, Pasig City, Metro Manila
              </div>
            </div>
          </div>
        </div>

        {/* Trademark Disclaimer */}
        <div className="border-t border-[#545454] pt-6 mb-6">
          <div className="text-center">
            <p className="text-sm text-[#c5cddf] mb-2">
              All logos displayed on this site are trademarks of their respective owners.
            </p>
            <p className="text-xs text-[#c5cddf] opacity-80 max-w-2xl mx-auto mb-4">
              The display of company logos is for informational purposes only to indicate my professional internship 
              experience. Institutional logos represent my educational background. Their use does not imply endorsement 
              or promotional affiliation.
            </p>
            
            {/* Company Trademarks */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-[#c5cddf] opacity-90 mb-2">COMPANY TRADEMARKS</h4>
              <div className="flex flex-wrap justify-center gap-3 text-xs text-[#c5cddf] opacity-70">
                {companies.map((company, index) => (
                  <span key={index} className="px-3 py-1 bg-[#2a2a2a] rounded-lg border border-[#545454]">
                    {company}®
                  </span>
                ))}
              </div>
            </div>

            {/* Educational Institution Trademarks */}
            <div>
              <h4 className="text-xs font-semibold text-[#c5cddf] opacity-90 mb-2">EDUCATIONAL INSTITUTION</h4>
              <div className="flex flex-wrap justify-center gap-3 text-xs text-[#c5cddf] opacity-70">
                {educationalInstitutions.map((institution, index) => (
                  <span key={index} className="px-3 py-1 bg-[#2a2a2a] rounded-lg border border-[#3a3a3a]">
                    {institution}®
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#545454] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#c5cddf] mb-4 md:mb-0">
            &copy; {currentYear} Danzel Aquino. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-[#c5cddf]">
            <span>Made with</span>
            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;