import { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../components/LangProvider";
import { motion } from "framer-motion";
import EdgyBackground from "../components/EdgyBackground";
import { useTypewriter } from "react-simple-typewriter";
import LeftBarIcons from "../components/LeftBarIcons";

const Home = () => {
  const { lang} = useContext(LangContext);
  const [text] = useTypewriter({
    words: ["Hi my name is Dawid", "I am student and aspiring web developer"],
    loop: false, // Infinit
    delaySpeed: 3000,
  });

  return (
    <div className=" relative w-screen h-screen sm:h-[92vh] bg-white dark:bg-black overflow-hidden flex justify-center items-center">
      <EdgyBackground />

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
      <Link
        to="/about"
        className=" text-black dark:text-white absolute top-4 font-serif no-underline z-1 "
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
          {lang === "eng" ? "About" : "O mnie"}
        </motion.h1>
      </Link>

      <div className=" absolute bottom-4 w-2/2 left-0 right-0 flex justify-evenly">
        <Link
          to="/projects"
          className=" text-black dark:text-white font-serif no-underline z-1"
        >
          <motion.h1
            initial={{
              y: 200,
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
            {lang === "eng" ? "Projects & Work" : "Projekty"}
          </motion.h1>
        </Link>

        <Link
          to="/Skills"
          className=" text-black dark:text-white font-serif no-underline z-1"
        >
          <motion.h1
            initial={{
              y: 200,
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
            {lang === "eng" ? "Skills" : "Umiejętności"}
          </motion.h1>
        </Link>
      </div>

      <motion.div
        initial={{
          y: -200,
          transition: { type: "spring", duration: 1.5, delay: 1 },
        }}
        animate={{
          y: 0,
          transition: { type: "spring", duration: 1.5, delay: 1 },
        }}
        className=" absolute top-4 right-[calc(1vw)]"
      ></motion.div>
      <LeftBarIcons />

      <h1 className=" absolute m-auto sm:text-2xl sm:w-3/5 text-6xl dark:text-white">
        {text}
      </h1>
    </div>
  );
};

export default Home;
