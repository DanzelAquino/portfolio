import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./Card";
import ProjectModal from "./Modal";
import * as projectAssets from "../../../assets/images/project/index";

const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Portfolio with Admin Control",
      description:
        "A portfolio system with admin access built using Vue, Firebase, and Cloudinary.",
      image: projectAssets.portfoliofb.thumbnail,
      year: "2025",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "Firebase",
        "Cloudinary",
        "EmailJS",
      ],
      features: [
        "Page transition animations",
        "Firebase login authentication",
        "Admin dashboard for project uploads",
        "Contact form integrated with Gmail",
        "Dynamic project management system",
        "Real-time content updates",
      ],
      status: "on-hold",
      longDescription:
        "A self-built portfolio system with admin access for updating the portfolio's project section when new projects are available. Built using Vue, Firebase, Cloudinary, and EmailJS, this system features dynamic project management, secure user authentication, and seamless project uploads through an intuitive admin interface. The contact form sends messages directly to the admin's email, ensuring prompt communication with potential clients and collaborators. The platform maintains a professional appearance while providing powerful backend capabilities for content management.",
      videos: [
        { src: projectAssets.portfoliofb.demo1, title: "Demo Video1" },
        { src: projectAssets.portfoliofb.demo2, title: "Demo Video2"},
        { src: projectAssets.portfoliofb.demo3, title: "Demo Video3"},
        { src: projectAssets.portfoliofb.demo4, title: "Demo Video4"},
        { src: projectAssets.portfoliofb.demo5, title: "Demo Video5"},
        { src: projectAssets.portfoliofb.demo6, title: "Demo Video6"},
        { src: projectAssets.portfoliofb.demo7, title: "Demo Video7"},
        { src: projectAssets.portfoliofb.demo8, title: "Demo Video8"},
        { src: projectAssets.portfoliofb.demo9, title: "Demo Video9"},
        { src: projectAssets.portfoliofb.demo10, title: "Demo Video10"},
        { src: projectAssets.portfoliofb.demo11, title: "Demo Video11"},
        { src: projectAssets.portfoliofb.demo12, title: "Demo Video12"},
        { src: projectAssets.portfoliofb.demo13, title: "Demo Video13"},
      ],
    },
    {
      id: 2,
      title: "SolarDry+",
      description:
        "A thesis project automating fish drying using Raspberry Pi, Arduino, and sensors.",
      image: projectAssets.solardry.logo,
      year: "2025",
      technologies: [
        "Raspberry Pi",
        "Arduino",
        "ESP32",
        "Arduino Nano",
        "Python",
        "AI/ML",
        "GSM",
        "IoT",
      ],
      features: [
        "Automated cover and fish flipping",
        "Real-time environment adjustments",
        "Text message alerts via GSM",
        "Solar-powered weather-resistant design",
        "AI-powered drying time prediction",
        "Dual-function rain protection",
        "Manual and automatic operation modes",
        "Real-time system status display",
      ],
      status: "finished",
      longDescription:
        "SOLARDRY+: A DUAL-FUNCTION AUTOMATED FISH DRYING RACK AND RAIN PROTECTION SYSTEM WITH INTEGRATED AI-POWERED DRYING TIME PREDICTION. This innovative capstone project, developed by a team of five, features a sophisticated multi-microcontroller architecture with advanced environmental intelligence. The Raspberry Pi powers the camera module for continuous weather monitoring, analyzing cloud formations to predict rain before it occurs, ensuring fish remain protected. It stores comprehensive datasets of cloud formations for pattern recognition and handles the OLED display for real-time system status while indicating manual/automatic modes via LED indicators. The system features automatic time adjustment that dynamically modifies drying duration based on real-time environmental factors like humidity, temperature, and UV Index. The ESP32 manages all environmental sensors and the rotary encoder module for adjusting fish drying duration, plus controls the system buttons (start, stop, toggle, and mode). The toggle function is exclusively available in manual mode for cover control and is disabled during automatic operation. Arduino microcontrollers control the DSServo Motors for mechanical operations, while an Arduino Nano specifically manages the GSM module to send real-time text alerts for system events including pauses, resumes, starts, and status changes. This intelligent distributed architecture ensures optimal drying results while providing proactive weather protection.",
      images: [
        projectAssets.solardry.solar1,
        projectAssets.solardry.solar2,
        projectAssets.solardry.solar3,
        projectAssets.solardry.solar4,
        projectAssets.solardry.solar5,
      ],
      videos: [
        { src: projectAssets.solardry.demo, title: "System Demonstration" },
      ],
    },
    {
      id: 3,
      title: "Knowles WordPress",
      description:
        "A multi-page website using WordPress with booking, form, and security plugins.",
      image: projectAssets.knowles.knowles1,
      year: "2025",
      technologies: ["WordPress", "Wordfence", "SSA", "WPForms"],
      features: [
        "Wordfence for security",
        "SSA for booking functionality",
        "WPForms for contact forms",
        "Fully managed via WordPress plugins",
        "Event management system",
        "Secure payment processing",
      ],
      status: "lost",
      longDescription:
        "An internship project creating a multi-page website using WordPress, integrating booking, form, and security plugins. The site provides a comprehensive platform for event management with advanced booking capabilities using the SSA Booking Plugin and a fully functional contact page powered by WPForms Plugin. The platform features robust security measures through Wordfence protection, ensuring safe user interactions and data handling. The intuitive interface allows for easy event creation, registration management, and customer communication.",
      images: [
        projectAssets.knowles.knowles1,
        projectAssets.knowles.knowles2,
        projectAssets.knowles.knowles3,
        projectAssets.knowles.knowles4,
        projectAssets.knowles.knowles5,
        projectAssets.knowles.knowles6,
        projectAssets.knowles.knowles7,
        projectAssets.knowles.knowles8,
        projectAssets.knowles.knowles9,
      ],
    },
    {
      id: 4,
      title: "UIP Portfolio Task",
      description:
        "A single-page portfolio website built using only TailwindCSS and JavaScript.",
      image: projectAssets.uip.uip1,
      year: "2024",
      technologies: ["HTML", "TailwindCSS", "JavaScript"],
      features: [
        "Built-in resume viewer",
        "Hover-reveal project info",
        "Project modals with image previews",
        "Entirely designed using TailwindCSS",
        "Responsive design",
        "Downloadable resume",
      ],
      demoUrl: "https://danzelaquino.github.io/UIP_Portfolio",
      githubUrl: "https://github.com/DanzelAquino/UIP_Portfolio",
      status: "live",
      longDescription:
        "A single-page portfolio website built using only TailwindCSS and JavaScript during internship training to adapt to the company's design framework. This project demonstrates mastery of utility-first CSS frameworks with features including responsive design, built-in resume viewer with download functionality, and interactive project showcases—all achieved without any custom CSS. The portfolio showcases clean navigation, and professional presentation while maintaining optimal performance and cross-browser compatibility. The implementation highlights the efficiency of TailwindCSS for rapid prototyping and consistent design systems in modern web development.",
      images: [
        projectAssets.uip.uip1,
        projectAssets.uip.uip2,
        projectAssets.uip.uip3,
        projectAssets.uip.uip4,
        projectAssets.uip.uip5,
        projectAssets.uip.uip6,
        projectAssets.uip.uip7,
      ],
      videos: [{ src: projectAssets.uip.demo, title: "Component Demo" }],
    },
    {
      id: 5,
      title: "Event Management System",
      description:
        "A Java-based event management system with admin and client access levels.",
      image: projectAssets.event.event1,
      year: "2024",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Java",
        "Apache Derby",
        "Eclipse IDE",
      ],
      features: [
        "Admin and client access levels",
        "Sign-in and registration validation",
        "CRUD operations for events",
        "Animated carousel and footer",
        "Functioning contact form",
        "Event request system",
      ],
      status: "archived",
      longDescription:
        "A Java-based event management system built in Eclipse IDE with Apache Derby database, developed in a team of two. The system provides comprehensive event management capabilities including user registration, event request processing, functioning contact form, and a complete admin webapp CRUD system. The platform features separate admin and client pages with appropriate access controls, ensuring secure data management while providing an intuitive user experience. The robust backend handles complex event operations while the frontend delivers smooth interactions through animated elements and responsive design. This project demonstrates full-stack development capabilities with particular emphasis on database integration and user role management.",
      images: [
        projectAssets.event.event1,
        projectAssets.event.event2,
        projectAssets.event.event3,
        projectAssets.event.event4,
        projectAssets.event.event5,
        projectAssets.event.event6,
        projectAssets.event.event7,
        projectAssets.event.event8,
        projectAssets.event.event9,
        projectAssets.event.event10,
      ],
      videos: [
        { src: projectAssets.event.home, title: "Home Features" },
        { src: projectAssets.event.footer, title: "Footer Features" },
        { src: projectAssets.event.login, title: "Login Process" },
        { src: projectAssets.event.adminControl, title: "Admin Control" },
        { src: projectAssets.event.demonstration, title: "System Demo" },
      ],
    },
    {
      id: 6,
      title: "Comffee Shop",
      description:
        "An e-commerce school project for a coffee brand with user authentication and CRUD operations.",
      image: projectAssets.comffee.comffee1,
      year: "2023",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Java",
        "MySQL",
        "NetBeans IDE",
      ],
      features: [
        "User sign-in and registration system",
        "Form validation",
        "CRUD operations linked to MySQL",
        "Bootstrap-based responsive layout",
        "Database synchronization",
        "Secure authentication",
      ],
      status: "lost",
      longDescription:
        "An e-commerce school project for a coffee brand, developed in a team of three using HTML, CSS, JS, Bootstrap, Java, and MySQL. The platform features comprehensive form validation, web application CRUD operations synchronized with the MySQL database, and robust user sign-in authentication. Built using NetBeans IDE, this project demonstrates full-stack development capabilities with a focus on database integration and user experience. The responsive Bootstrap-based layout ensures optimal viewing across devices while the backend Java components handle business logic and data persistence efficiently. This project served as an excellent introduction to enterprise-level web application development and team collaboration.",
      images: [
        projectAssets.comffee.comffee1,
        projectAssets.comffee.comffee2,
        projectAssets.comffee.comffee3,
        projectAssets.comffee.comffee4,
        projectAssets.comffee.comffee5,
      ],
    },
    {
      id: 7,
      title: "Danz CyberTech",
      description:
        "A 5-page informational website showcasing a fictional company's background, products, and services.",
      image: projectAssets.danz.danz1,
      year: "2022",
      technologies: ["HTML", "CSS", "JavaScript", "VSCode"],
      features: [
        "Fully front-end setup",
        "Hover-to-view product specifications",
        "Tabbed About page layout",
        "Static Partners and Contact pages",
        "Interactive product showcases",
        "Multi-page navigation",
      ],
      demoUrl: "https://danzcybertech.netlify.app",
      status: "live",
      longDescription:
        "A 5-page informational website showcasing a fictional company's background, products, partners, and contact information. Built entirely with pure HTML, CSS, and JavaScript as one of my first web projects, this site demonstrates foundational web development skills. The most defining feature is the interactive product showcases with hover-to-view specifications, providing an engaging user experience. The tabbed About page layout organizes company information efficiently, while static Partners and Contact pages complete the professional presentation. This project represents the beginning of my web development journey, showcasing clean code practices, responsive design principles, and attention to user interface details that would become hallmarks of my later work.",
      images: [
        projectAssets.danz.danz1,
        projectAssets.danz.danz2,
        projectAssets.danz.danz3,
        projectAssets.danz.danz4,
        projectAssets.danz.danz5,
      ],
    },
  ];

  // Sort projects from latest to oldest based on year
  const sortedProjects = [...projects].sort((a, b) => {
    const getLatestYear = (yearStr) => {
      if (yearStr.includes("-")) {
        return parseInt(yearStr.split("-")[1]);
      }
      return parseInt(yearStr);
    };

    return getLatestYear(b.year) - getLatestYear(a.year);
  });

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="showcase"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#edeeef] to-[#c5cddf]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1a17] mb-3 sm:mb-4">
            Project Gallery
          </h2>
          <p className="text-lg sm:text-xl text-[#545454] max-w-2xl mx-auto px-4">
            A collection of projects from{" "}
            {sortedProjects[sortedProjects.length - 1].year} to{" "}
            {sortedProjects[0].year} that demonstrate my skills and passion for
            development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {sortedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onProjectClick={openModal}
            />
          ))}
        </div>

        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
