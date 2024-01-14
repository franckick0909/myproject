import "./Logo.scss";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <>
      <motion.a
        href="#hero"
        className="logo"
        initial={{ opacity: 0, scale: 0, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
        }}
      >
        Fran<motion.span>Kick</motion.span>
      </motion.a>
    </>
  );
};

export default Logo;
