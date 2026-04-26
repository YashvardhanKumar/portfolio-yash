import k2k from "../assets/k2k.png";
import ncw from "../assets/ncw.png";
import debox from "../assets/debox.png";
import codingal from "../assets/codingal.png";

const experiences = [
  {
    position: "Software Engineer",
    company: "Codingal (YC W21)",
    url: "https://www.codingal.com/",
    type: "EdTech",
    location: "Bangalore, Karnataka",
    duration: {
      start: "Apr 2025",
      end: "Present",
    },
    technologies: ["SEO", "UI/UX", "API Integration", "WordPress"],
    links: [],
    description:
      "• Developed and deployed 30+ SEO pages for coding platforms and programming languages efficiently.\n• Redesigned user dashboard with best UI/UX.\n• Revamped support page and enhanced UI across homepage, and competition pages.\n• Led rapid deployment of subscription UI across home, course, and location pages with API integration.\n• Implemented WordPress shortcode for category-based blog advertisements.",
    lor: "about:blank",
    logo: codingal,
  },
  {
    position: "Flutter Intern",
    company: "Debox Consulting",
    url: "https://debox.co.in/",
    type: "Consultancy",
    location: "Thane, Maharashtra",
    duration: {
      start: "May 2024",
      end: "July 2024",
    },
    technologies: [
      "Flutter",
      "GetX",
      "Firebase",
      "Firebase Cloud Messaging",
      "Applinks",
    ],
    links: [
      {
        name: "Bawarchi",
        playstore: "https://play.google.com/store/apps/details?id=com.bawarchiatlanta.bawarchiatlanta",
        website: "https://bawarchiatlanta.com/",
      },
      {
        name: "InRadius",
        playstore: "https://play.google.com/store/apps/details?id=in.inradius.inradius_app",
        website: "https://www.inradius.in/",
      },
    ],
    description:
      "Completed the Bawarchi application development in just over six weeks, incorporating URL redirection functionality through AppLinks. Enhanced InRadius by resolving interface issues, achieving a 20% performance boost, and introducing additional user interface components. Streamlined codebase by restructuring and condensing to 100 lines of code per file, accomplishing this optimization within a five-day period.\n\n• Developed and optimized features in Flutter, improved architecture, usability, and performance by 20%.\n• Integrated app/universal links for seamless navigation across platforms.\n• Restructured project with <120 LoC per file, ensuring modular and maintainable code.\n• Applied best practices to enhance code reusability, readability, and team workflow efficiency.",
    lor: "https://drive.google.com/file/d/1AiJgj3aFpoDG281I_HvTSkOkVls9LVQC/view?usp=sharing",
    logo: debox,
  },
  {
    position: "Mobile App Developer and UI Designer (Contract-based project)",
    url: "http://ncw.nic.in/",
    company: "National Commission for Woman",
    type: "Woman safety app",
    technologies: ["Flutter", "Firebase", "Kotlin"],
    location: "IIIT Gwalior",
    duration: {
      start: "May 2023",
      end: "December 2023",
    },
    links: [
      {
        name: "Mahika",
        playstore: "https://play.google.com/store/apps/details?id=com.mahikav",
        github: "https://github.com/YashvardhanKumar/mahika",
      },
    ],
    description:
      "Devised the cross-platform mobile applications from scratch using the Flutter framework having light UI and outstanding UX for target users. Employed Firebase for cloud storage, real-time database access, and authenti- cation. Clean Architecture for state management using Provider package.",
    lor: "about:blank",
    logo: ncw,
  },
  {
    position: "Mobile Application Developer Intern",
    company: "Krishi Kutumb",
    type: "Farmer Solutions",
    technologies: ["Flutter", "REST API", "Provider"],
    location: "Work From Home",
    duration: {
      start: "March 2023",
      end: "May 2023",
    },
    links: [
      {
        name: "K2 : Krishi Kutumb",
        playstore: "https://play.google.com/store/apps/details?id=com.ambaokrishikutumb.k2k",
      },
    ],
    description:
      "Used the Flutter Framework to develop a multi-platform app from scratch and Provider as State Management Toolkit. Compiled data from the PHP server on to the application. Developed the fresh UI for the application having best UX for farmers.",
    lor: "https://drive.google.com/file/d/1u17WB_2twY4lmUyqb7ctxBjEA5tlVoXw/view?usp=sharing",
    logo: k2k,
  },
];

export default experiences;