import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LeftBarIcons from "../components/LeftBarIcons";
import SkillsBackground from "../components/SkillsBackground";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Skills = () => {
  return (
    <div className=" relative w-screen h-screen normal:h-[1600px] bg-white dark:bg-black overflow-hidden flex items-center justify-evenly py-28">
      <SkillsBackground />
      <Link
        to="/"
        className=" text-black dark:text-white absolute top-4 font-serif no-underline z-3 right-8"
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
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className=" sm:text-[5vw] normal:text-3xl text-[2.6vw] z-1 absolute dark:text-white p-8 top-20 text-5xl"
      >
        Skills & Abilites
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className=" py-28 flex z-2 absolute normal:flex-col "
      >
        <div className=" p-8 w-[35vw] normal:w-[54vw] h-[60vh] border-4 border-black dark:border-white sm:text-[4vw] m-8 z-1 dark:text-white">
          <span className=" font-medium text-2xl">Skills:</span>
          <br />
          -React
          <br />
          -Javascript / Typescript
          <br />
          -Node.js
          <br />
          -NoSQL (mongoDB) / SQL(prisma as ORM)
          <br />
          -CSS (frameworks: chakra, tailwind)
          <br />
          -REST API
          <br />
          -GraphQL
          <br />
          -Server side State / Client side state
          <br />
          -Docker
          <br />
          -Next.js (already learning 13 but still in beta)
          <br />
          -Basics of NestJs
        </div>
        <div className=" p-8 w-[35vw] normal:w-[54vw] h-[60vh] border-4 border-black dark:border-white sm:text-[4vw] m-8 z-1 dark:text-white">
          <span className=" font-medium text-2xl">
            Things i am planning to learn:
          </span>
          <br />
          -Kubernetes / Terraform
          <br />
          -React CMS like strapi
        </div>
      </motion.div>

      <LeftBarIcons />
    </div>
  );
};

export default Skills;
