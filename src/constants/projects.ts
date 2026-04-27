import conacy from "../assets/conacy.png";
import confereus from "../assets/confereus.jpg";
import goodmerchant from "../assets/good-merchant.png";
import mahika from '../assets/mahika.jpg';
import coderacer from "../assets/coderacer.png";

export const projects = [
    {
    id: "coderacer",
    name: "Coderacer",
    type: ["Web App"],
    technologies: [
      "TypeScript",
      "Python",
      "Tailwind CSS",
      "Docker",
      "Django",
      "NextJS",
      "PostgreSQL"
    ],
    description: "A Coding platform built on Next.JS and Django, used bun and uv package manager for efficiency. Using Judge0 as self-hosted code engine for submission of code and supports 5 languages.",
    links: {
      github: "https://github.com/YashvardhanKumar/coderacer-web",
    },
    img: coderacer,
  },
  {
    id: "confereus",
    name: "Confereus",
    type: ["Mobile App", "Web App (Landing)"],
    technologies: [
      "Flutter",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "Firebase Storage",
      "LinkedIn OAuth2",
      "JWT"
    ],
    description:
      "A research conference management application, having conference scheduling, abstract submission and approval, session scheduling and notification, attendee registration, feedback, etc.",
    links: {
      github: "https://github.com/YashvardhanKumar/confereus",
      website: "https://confereus.netlify.app/",
    },
    img: confereus,
  },
  {
    id: "good-merchant",
    name: "Good Merchant",
    type: ["Web App"],
    technologies: ["ReactJS", "Flask", "Keras", "TensorFlow"],
    description:
      "A ReactJS app for price categorization across e-commerce sites. Developed a CNN model for image classification using Keras and TensorFlow, achieving 92.8% accuracy, and deployed on Flask.",
    links: {
      github: "https://github.com/YashvardhanKumar/good-merchant",
    },
    img: goodmerchant,
  },
  {
    id: "conacy",
    name: "Conacy",
    type: ["Web App"],
    technologies: [
      "TypeScript",
      "JavaScript",
      "CSS",
      "HTML",
      "NestJS",
      "ReactJS",
      "Neo4J",
      "GraphQL",
      "Tailwind",
      "JWT",
      "Cloudinary",
      "Docker",
    ],
    description:
      "A social media website with a backend built on NestJS serving GraphQL and REST APIs, a frontend built with React and Tailwind, and Neo4J for data storage and recommendation systems.",
    links: {
      github: "https://github.com/YashvardhanKumar/conacy-web",
      website: "https://conacy.netlify.app/",
    },
    img: conacy,
  },
  {
    id: "mahika",
    name: "Mahika",
    type: ["Mobile App"],
    technologies: ["Flutter", "Firebase"],
    description:
      "Developed a cross-platform mobile application with a light UI using Flutter, employing Firebase for cloud storage, real-time database access, and authentication. The app was published on the Play Store.",
    links: {
      github: "https://github.com/YashvardhanKumar/mahika",
      playstore: "https://play.google.com/store/apps/details?id=com.mahikav",
    },
    img: mahika
  },
];
