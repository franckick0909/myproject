import "./Social.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const Social = () => {

    const social = [
        {
            id: 1,
            name: "Facebook",
            url: "https://www.facebook.com/",
            icon: <FaFacebookF />,
        },
        {
            id: 2,
            name: "Twitter",
            url: "https://twitter.com/",
            icon: <FaTwitter />,
        },
        {
            id: 3,
            name: "Instagram",
            url: "https://www.instagram.com/",
            icon: <FaInstagram />,
        },
        {
            id: 4,
            name: "Linkedin",
            url: "https://www.linkedin.com/",
            icon: <FaLinkedinIn />,
        },
        {
            id: 5,
            name: "Github",
            url: "https://www.github.com/",
            icon: <FaGithub />,
        },
    ];

    const socialVariants = {
        initial: {
          y: 25,
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 1,
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      };

    return (   
        <div>
            <motion.div className="social" variants={socialVariants} initial="initial" animate="animate">
                {
                    social.map((social) => (
                            <motion.a href={social.url} key={social.id}               
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{y:-5, scale: 1.1 }}
                            whileTap={{y:0, scale: 0.95 }}
                            >
                                {social.icon}
                            </motion.a>
                        )
                    )
                }
            </motion.div>
        </div>
    );
};

export default Social;