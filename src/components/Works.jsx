import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import SectionHeader from "./SectionHeader";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={`${name} project screenshot`}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.open(source_code_link, "_blank");
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View source code for ${name}`}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={github} alt="GitHub" className="w-1/2 h-1/2 object-contain" />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <SectionHeader subtitle="My work" title="Projects" />

      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)} 
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
        >
          The following projects showcase my skills and experience through samples
          of my work. Each project is briefly described with links to code
          repositories.
        </motion.p>
      </div>
      <div className="mt-8 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.name || `project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");