import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, menu, displaypicture } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // lock body scroll when mobile menu open
    document.body.style.overflow = toggle ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  const handleLinkClick = (title, isMobile) => {
    setActive(title);
    if (isMobile) setToggle(false);
  };

  const renderNavLinks = (isSecondary = false) => (
    <ul
      className={`list-none flex-row gap-6 ${
        isSecondary ? "flex flex-col" : "hidden sm:flex"
      }`}
    >
      {navLinks.map((link) => (
        <li
          key={link.id}
          onClick={() => handleLinkClick(link.title, isSecondary)}
          className={`${
            active === link.title ? "text-white" : isSecondary ? "text-secondary" : "text-white/90"
          } hover:text-secondary text-[18px] font-medium cursor-pointer px-3 py-2`}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}

      <li
        className={`${
          isSecondary ? "text-secondary" : "text-white/90"
        } hover:text-secondary text-[18px] font-medium cursor-pointer px-3 py-2`}
        onClick={() => isSecondary && setToggle(false)}
      >
        <a
          href="/mycv/Peter_Osho_CV.pdf"
          download="Peter_Osho_CV.pdf"
          aria-label="Download CV"
          className="block"
        >
          CV
        </a>
      </li>

      <li
        className={`${
          isSecondary ? "text-secondary" : "text-white/90"
        } hover:text-secondary text-[18px] font-medium cursor-pointer px-3 py-2`}
      >
        <button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/peter-osho-04671634b/",
              "_blank"
            )
          }
          aria-label="Visit LinkedIn profile"
          className="block"
        >
          LinkedIn
        </button>
      </li>
    </ul>
  );

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={displaypicture}
            alt="iPeerolDev logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[20px] font-bold cursor-pointer flex">
            iPeerolDev&nbsp;
          </p>
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center">{renderNavLinks(false)}</div>

        {/* Mobile hamburger */}
        <div className="sm:hidden flex items-center relative">
          <button
            aria-label="Toggle menu"
            aria-expanded={toggle}
            onClick={() => setToggle((s) => !s)}
            className="p-2 rounded-md text-white hover:bg-white/5 focus:outline-none"
          >
            <img
              src={toggle ? close : menu}
              alt={toggle ? "Close menu" : "Open menu"}
              className="w-[28px] h-[18px] object-contain"
            />
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="absolute right-0 top-12 z-30 min-w-[140px] bg-[#0b1020]/95 backdrop-blur-md rounded-xl shadow-lg p-3"
                role="dialog"
                aria-modal="true"
              >
                {renderNavLinks(true)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;