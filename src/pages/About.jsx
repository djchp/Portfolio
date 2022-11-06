import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LeftBarIcons from "../components/LeftBarIcons";
import AboutBackground from "../components/AboutBackground";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const About = () => {
  return (
    <div className=" relative w-screen h-screen sm:h-[92vh] bg-white dark:bg-black overflow-hidden flex justify-center items-center">
      <AboutBackground />
      <Link
        to="/"
        className=" text-black dark:text-white absolute top-4 right-8 font-serif no-underline z-1 "
      >
        <motion.h1
          initial={{
            y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className=" text-xl font-medium"
        >
          <ArrowBackIcon />
          go back
        </motion.h1>
      </Link>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className=" sm:text-[5vw] normal:text-3xl text-[2.6vw] z-1 absolute dark:text-white p-8 top-20 text-5xl"
      >
        About
      </motion.h1>
      <motion.h1
        className=" absolute top-4 left-6 text-4xl font-['Pacifico'] dark:text-white"
        initial={{
          y: -200,
          transition: { type: "spring", duration: 1.5, delay: 1 },
        }}
        animate={{
          y: 0,
          transition: { type: "spring", duration: 1.5, delay: 1 },
        }}
      >
        D
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className=" w-[55vw] h-[55vh] border-4 border-black dark:border-white sm:text-[5vw] normal:text-[3.7vw] text-[2.2vw] z-1 absolute dark:text-white p-8"
      >
        I am actively looking for a job. I am ambitious and open to
        propositions, learning about new technologies and 
        frameworks comes to me without a problem. I stand out in areas requiring
        analytical thinking and a critical approach to the problem.
      </motion.div>
      <LeftBarIcons />
    </div>
  );
};

export default About;
