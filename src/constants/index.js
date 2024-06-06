import gssoc from "../assets/gssoc.png";
import paloalto from "../assets/paloalto.png";
import dseu from "../assets/dseu.png";
import nips from "../assets/nips.jpg";
import ggsipu from "../assets/ggsipu.png";
import srmist from "../assets/srmist.png";

export const ABOUT_DEV_SEC = `Expertised in Full Stack Development and Cyber Security with a knack for crafting robust,
                        secure and scalable applications.
                          Familiar with modern day threats and tools to handle the security 
                          of Network, Devices and the Applications, 
                          I do conduct discussions and workshops for the relevance of awareness among folks.
                          I can be found contributing regularly to Open-Source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Contributor",
    company: "GirlScript Summer of Code 2024",
    description: `Designed and developed user interfaces for web applications using Next.js and React.js. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["TypeScript","Node", "Express", "React", "MongoDB", "TailwindCSS"],
    image: gssoc,
    location: "Remote"
  },
  {
    year: "Jan 2024 - March 2024",
    role: "Intern",
    company: "Palo Alto Networks (Facilitated by AICTE)",
    description: `Gained familiarity with Network Security, Cloud Security and End Point Security to analyze security threats.
    Gone through Prisma Cloud and Cortex XDR for threat detection with behavioral analytics and to speed up investigations by 50%.
    Learning on Next Generation Firewalls and Advanced Persistent Threats for defensive measures against 80% of threats.`,
    technologies: ["Endpoint Security", "Network Security", "Prisma Cloud", "Cortex XDR", "Security Operations"],
    image: paloalto,
    location: "Remote"
  },
  {
    year: "Aug 2022 - Oct 2022",
    role: "Web Management Intern",
    company: "Delhi Skill and Entrepreneurship University - Govt of NCT Delhi",
    description: `Contributed to the commercial perspective of web development involving PHP, JavaScript, MySQL and WordPress.. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["PHP", "MySQL", "WordPress", "JavaScript", "BootStrap"],
    image: dseu,
    location: "Delhi"
  },
];

export const PROJECTS = [
  {
    title: "EcoTrac",
    description:
      "A personalized fully working carbon footprint tracking system with an in built reward system in a span of 8 hours in the Inter-department Hackathon",
    technologies: ["NodeJS", "ExpressJS" ,"React", "MongoDB", "TailwindCSS"],
  },
  {
    title: "BitSync",
    description:
      "A a peer-to-peer file sharing web-app using NodeJS and Web Socket Technology (Socket.io)",
    technologies: ["TypeScript", "NodeJS", "ExpressJS", "Socket.io", "Vanilla CSS"],
  },
  {
    title: "Jaxel",
    description:
      "A mini-web tool to covert CSV to JSON and vice versa",
    technologies: ["NodeJS", "ExpressJS", "ReactJS", "TailwindCSS"],
  },
  {
    title: "RailYatra Corridor",
    description:
      "A python based desktop application for rail e-ticketing, with features like ticket booking, cancellation, seat availability and so on.",
    technologies: ["Python", "Tkinter", "MySQL"],
  },
  {
    title: "Krishna Sewa Sansthan",
    description:
      "A trust based website for a client to show case NGO's work and accept donations.",
    technologies: ["HTML", "TailwindCSS", "Firebase", "JavaScript"],
  },
];

export const Edu = [
  {
    institute: "Nehru International Public School, Noida",
    course: "Secondary Education",
    image: nips,
    duration:"2007-2020"
  },
  {
    institute: "Guru Gobind Singh Indraprastha University",
    course: "Bachelors, Computer Applications",
    image: ggsipu,
    duration:"2020-2023"
  },
  {
    institute: "SRM Institute of Science and Technology",
    course: "Masters, Computer Applications",
    image: srmist,
    duration:"2023-2025"
  }
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};