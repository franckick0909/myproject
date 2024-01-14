import "./Links.scss";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
  close: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const navigationVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const links = [
    {
      id: 1,
      name: "Hero",
      url: "#hero",
    },
    {
      id: 2,
      name: "About",
      url: "#about",
    },
    {
      id: 3,
      name: "Portfolio",
      url: "#portfolio",
    },
    {
      id: 4,
      name: "Service",
      url: "#service",
    },
    {
      id: 5,
      name: "Contact",
      url: "#contact",
    },
  ];

  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 60 ? setBg(true) : setBg(false);
    });
  });

  return (
    <motion.div className="links" variants={variants}>
      {links.map((link) => (
          <motion.a
            href={link.url}
            key={link.id}
            className={bg ? "link active" : "link"}
            variants={navigationVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            spy={true}
          >
            {link.name}
          </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
