import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LeftBarIcons from "../components/LeftBarIcons";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { projectsData } from "../projectsData/projectsData";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className=" relative flex h-screen w-screen items-center justify-center overflow-hidden bg-white dark:bg-black add:h-[2000px]">
      <Link
        to="/"
        className=" font-serif z-1 absolute top-4 right-8 text-black no-underline dark:text-white"
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
        className=" absolute top-4 left-6 font-['Pacifico'] text-4xl dark:text-white"
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
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className=" z-1 absolute top-6 py-8 text-[2.6vw] text-5xl dark:text-white sm:text-[5vw] normal:text-3xl"
      >
        Projects & Work
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className=" absolute top-56 flex add:flex-col"
      >
        {projectsData.map((p) => (
          <ProjectCard name={p.name} description={p.description} tech={p.tech} githubLink={p?.githubLink}/>
        ))}
      </motion.div>
      <LeftBarIcons />
    </div>
  );
};

export default Projects;
