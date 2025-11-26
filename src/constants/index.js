import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  bootstrap,
  mongodb,
  nodejs,
  git,
  mathwork,
  leadcity,
  sqi,
  threejs,
  fairmoney,
  kuda,
  quizapp,
  ycombinator,
  ecommerce,
  netflix,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "HTML 5", icon: html },
  { title: "CSS 3", icon: css },
  { title: "React", icon: reactjs },
  { title: "JavaScript", icon: javascript },
  { title: "Node.js", icon: nodejs },
  { title: "Tailwind CSS", icon: tailwind },
  { title: "Bootstrap 5", icon: bootstrap },
  { title: "MongoDB", icon: mongodb },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs }, // fixed typo
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git }, // capitalized
];

export const experiences = [
  {
   title: "Software Engineer | Intern",
    company_name: "Lead City University, ICT Software Unit | Ibadan, Nigeria | On-site",
    icon: leadcity,
    iconBg: "#161329",
    date: "Nov 2025 - Present",
    points: [
      "Diagnosed and resolved payment gateway issues, improving transaction success rate and ensuring seamless processing for student fees across multiple payment channels.",
      "Maintained student portal systems, reducing authentication and login issues by 35% through systematic debugging and optimisation.",
      "Debugged and fixed software defects in the codebase, performing code reviews and implementing patches to enhance system stability.",
      "Managed hostel management system functionalities, including room allocation, occupancy tracking, and availability updates.",
      "Investigated and resolved payment discrepancies and portal errors by identifying and fixing root causes in backend systems.",
      "Conducted database maintenance and data integrity checks to ensure accurate student and payment records.",
      "Collaborated with the development team on feature implementations and participated in system testing before releases.",
      "Documented code changes, bug fixes, and technical procedures for knowledge management.",
      "Monitored system performance during peak usage periods, such as registration and exam result releases.",
      "Contributed to system improvements by identifying optimisation opportunities and implementing user experience enhancements.",
    ],
  },
  {
    title: "Software Engineer | Intern",
    company_name: "SQI College of ICT | Ibadan, Nigeria | On-site",
    icon: sqi,
    iconBg: "#161329",
    date: "Jan 2025 - Nov 2025",
    points: [
      "Built responsive web interfaces using HTML5, CSS3, Bootstrap, and Tailwind CSS to ensure cross-device compatibility.",

      "Developed interactive single-page applications (SPAs) with React + Vite, improving load times and user experience.",

      "Designed and consumed RESTful APIs with Node.js + Express, enabling smooth client-server communication.",

      "Implemented CRUD operations with MongoDB, including schema design and database queries.",

      "Collaborated on full-stack projects, integrating frontend and backend workflows in a MERN-style stack.",

      "Applied version control with Git/GitHub, contributing to collaborative codebases and resolving merge conflicts.",

      "Participated in code reviews and debugging sessions, improving application reliability and maintainability.",

      "Assisted in deploying applications on test servers, gaining exposure to hosting and deployment practices.",

      "Strengthened knowledge of JavaScript features such as async/await, destructuring, and modular coding.",

      "Practiced agile workflows, including sprint planning, standups, and project documentation.",

      "Built reusable UI components, enhancing maintainability and consistency across multiple projects.",

      "Troubleshot common web application issues (CORS, routing, database connection errors) under mentor guidance.",

      "Gained foundational exposure to security best practices such as input validation and authentication handling.",

      "Enhanced professional skills in teamwork, adaptability, and problem-solving by working on group projects.",
    ],
  },
  {
    title: "Computer Operator",
    company_name: "Bozatec Computers | Lagos, Nigeria | On-site",
    icon: mathwork,
    iconBg: "#161329",
    date: "Jan 2017 - Dec 2017",
    points: [
      "Accurately entered and updated data into databases, spreadsheets, and internal systems.",
      "Prepared reports, correspondence, and documentation using MS Office (Word, Excel, PowerPoint).",
      "Managed printing, photocopying, scanning, and filing of documents to support daily operations.",
      "Ensured proper record-keeping and retrieval of electronic and hardcopy files for smooth workflow.",
      "Handled routine administrative tasks such as email correspondence and scheduling support.",
      "Assisted colleagues with basic ICT tasks, improving overall office efficiency.",
      "Maintained confidentiality and data integrity while handling sensitive information.",
      "Demonstrated speed, accuracy, and attention to detail in completing repetitive clerical tasks.",
      "Supported supervisors with documentation for meetings, reports, and presentations.",
    ],
  },
];

export const projects = [
  {
    name: "FairMoney",
    description:
      "FairMoney website, a digital banking platform that offers personal loans and financial services.",
    tags: [
      { name: "CSS", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "BOOTSTRAP", color: "pink-text-gradient" },
    ],
    image: fairmoney,
    source_code_link: "https://github.com/iPeerol-Dev/FairMoney",
  },
  {
    name: "Ecommerce Website",
    description:
      "An ecommerce website that allows admin to perform CRUD operations and users to view products, add to cart and checkout.",
    tags: [
      { name: "REACT+VITE", color: "blue-text-gradient" },
      { name: "NODE+EXPRESS", color: "green-text-gradient" },
      { name: "TAILWINDCSS", color: "pink-text-gradient" },
      { name: "MONGODB", color: "pink-text-gradient" },
    ],
    image: ecommerce,
    source_code_link: "",
  },
  {
    name: "MultiLevel-Quiz Application",
    description:
      "Interactive multi-level quiz app with Easy, Medium, and Hard levels. Features randomized questions and options, a timer, progress tracking, and pass/fail results. Unlock higher levels by passing previous ones. Perfect for learning, self-testing, or casual quizzes.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JAVASCRIPT", color: "pink-text-gradient" },
    ],
    image: quizapp,
    source_code_link: "https://github.com/iPeerol-Dev/multilevel-quiz.git",
  },
  {
    name: "kuda Bank",
    description:
      "Kuda Bank website, a digital banking platform that offers personal loans and financial services.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "BOOTSTRAP", color: "pink-text-gradient" },
    ],
    image: kuda,
    source_code_link: "https://github.com/iPeerol-Dev/KUDA-Landing-Page",
  },
  {
    name: "Y Combinator",
    description:
      "Landing page of Y Combinator website that displays the latest news and articles.",
    tags: [
      { name: "BOOTSTRAP", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: ycombinator,
    source_code_link: "https://github.com/iPeerol-Dev/Y-Combinator",
  },
  {
    name: "Netflix",
    description:
      "The Landing page of Netflix website, a streaming platform that offers a wide variety of award-winning TV shows.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
    ],

    image: netflix,
    source_code_link: "https://github.com/iPeerol-Dev/Netflix",
  },
];
