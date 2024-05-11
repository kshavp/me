import gssoc from "../assets/gssoc.png";
import paloalto from "../assets/paloalto.png";
import dseu from "../assets/dseu.png";

export const HERO_CONTENT_DEV = `I am a full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const ABOUT_SEC = `I am familiar with modern day threats and tools to handle the security of Network, Devices and primarily the Applications, I have conducted seminar and workshops for the awareness among folks`
export const ABOUT_DEV = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Contributor",
    company: "GirlScript Summer of Code 2024",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["TypeScript","Node", "Express", "React", "MongoDB", "TailWind"],
    image: gssoc,
    location: "Remote"
  },
  {
    year: "Jan 2024 - March 2024",
    role: "Intern",
    company: "Palo Alto Networks (Facilitated by AICTE)",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
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
    title: "EcoTrac, 2nd Position, Inter-departmental Hackathon",
    description:
      "A personalized fully working carbon footprint tracking system with an in built reward system in a span of 8 hours in the Inter-departmental Hackathon",
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
    technologies: ["HTML", "Tailwind CSS", "Firebase", "JavaScript"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};