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
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
    {
    title: "Customer Care | Full-time",
    company_name: "Flex Homes Realty | Nigeria | Remote",
     icon: mathwork,
    iconBg: "#161329",
    date: "Sep 2023 - Present",
    points: [
      "Provided accurate details on property listings, pricing, payment plans, and services, boosting client trust and informed decision-making.",
      "Resolved customer complaints effectively, maintaining a high level of client satisfaction and loyalty.",
      "Guided clients through documentation, agreements, and payment processes, ensuring smooth transactions.",
      "Maintained up-to-date customer records and interaction logs, supporting efficient client management.",
      "Collaborated with sales and marketing teams to nurture leads, contributing to revenue growth.",
      "Conducted after-sales follow-ups to strengthen long-term client relationships and referrals.",
      "Gathered and reported customer feedback, supporting service improvement initiatives.",
    ],
  },
  {
    title: "Laboratory Assistant | Contract",
    company_name: "Fuotuoke Microbiology Laboratory | Bayelsa, Nigeria | On-site",
     icon: mathwork,
    iconBg: "#161329",
    date: "Oct 2022 - May 2023",
    points: [
      "Provided timely and accurate support in microbiological testing and sample analysis.",
      "Assisted in the preparation, sterilisation, and maintenance of culture media, reagents, and laboratory equipment.",
      "Conducted routine microbiological tests following strict aseptic techniques and quality standards.",
      "Maintained detailed records of laboratory procedures, results, and inventory.",
      "Supported the implementation of lab safety protocols and ensured compliance with regulatory guidelines.",
    ],
  },
  {
    title: "Research And Development Assistant | Intern",
    company_name: "BIODEC | Bayelsa, Nigeria | On-site",
    icon: mathwork,
    iconBg: "#161329",
    date: "Apr 2021 - Sep 2021",
    points: [
      "Actively participated in research-based activities aimed at exploring and optimising bioresource products of economic importance.",
      "Coordinated and supported field investigations to collect data and samples for laboratory analysis, ensuring methodological accuracy and relevance to research objectives.",
      "Contributed to the design and implementation of Standard Operating Procedures (SOPs) for the development and quality control of various bioresource-based innovations.",
      "Maintained precise documentation of experimental methods, data, and progress reports, facilitating reliable analysis, reproducibility, and informed decision-making within the research team.",
      "Played a key role in bridging field and laboratory work, ensuring alignment between experimental outcomes and real-world applications.",
    ],
  },
  {
    title: "Administrative Assistant | Full-time",
    company_name: "Bozatec Computers | Lagos, Nigeria | On-site",
     icon: mathwork,
    iconBg: "#161329",
    date: "Jan 2017 - Sep 2017",
    points: [
      "Delivered exceptional customer service by proactively listening to concerns and answering questions",
      "Displayed strong customer service with professional skills.",
      "Rendered professional computer-based services.",
      "Handled high-volume calls to address customer inquiries and concerns.",
      "Carried out day-to-day duties accurately and effectively.",
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
      { name: "MONGODB", color: "pink-text-gradient" },
    ],
    image: ecommerce,
    source_code_link: "",
  },
  {
    name: "Quiz App",
    description:
      "A web application that allows users to take quizzes and see their results.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JAVASCRIPT", color: "pink-text-gradient" },
    ],
    image: quizapp,
    source_code_link:
      "",
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
