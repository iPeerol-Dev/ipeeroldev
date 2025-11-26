import { motion } from "framer-motion";
import React from "react";
import SectionHeader from "./SectionHeader";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-16 h-16 object-contain"
          loading="lazy"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <SectionHeader subtitle="Introduction" title="Overview" />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
      >
        I'm a Full-Stack Software Engineer specializing in the MERN stack, with
        proven experience solving real-world problems in educational technology
        and building dynamic web applications. I've diagnosed payment gateway
        issues affecting thousands of users, reduced authentication errors by
        35%, and developed responsive SPAs with React and Node.js. My approach
        combines technical expertise with problem-solving, collaboration, and a
        commitment to clean, maintainable code. I'm passionate about continuous
        learning, writing efficient solutions, and creating seamless user
        experiences. Whether debugging backend systems or designing intuitive
        interfaces, I bring analytical thinking and attention to detail to every
        project.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");

export default WrappedAbout;
