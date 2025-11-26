import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const SectionHeader = ({ subtitle, title, className = "" }) => (
  <motion.div
    variants={textVariant(0)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`mb-6 ${className}`}
  >
    <p className={`${styles.sectionSubText} text-center`}>{subtitle}</p>
    <h2 className={`${styles.sectionHeadText} text-center`}>{title}</h2>
    <div
      className="mt-3 w-24 h-1 rounded bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400"
      aria-hidden="true"
    />
  </motion.div>
);

export default SectionHeader;