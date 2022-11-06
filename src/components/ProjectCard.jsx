const ProjectCard = ({ id, name, description, tech, githubLink }) => {
  return (
    <div
      className=" m-4 add:h-fit h-[40vh] w-[30vh] rounded-[40px] 
        
    border-2 border-black bg-black p-4 text-white hover:bg-white hover:text-black dark:border-white dark:bg-white
     dark:text-black dark:hover:bg-black dark:hover:text-white"
    >
      <h1 className=" text-2xl font-bold">{name}</h1>
      <br />

      <span className=" mb-2">{description}</span>
      <div className=" mt-1 flex flex-row flex-wrap">
        {tech?.map((t) => (
          <div className=" mr-2 mb-2 rounded-full border-2 border-black bg-white p-1 text-black hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white">
            {t}
          </div>
        ))}
      </div>
      <div className=" h-[1px] w-[100%] bg-white"></div>
      {githubLink ? (
        <div className=" py-4 font-medium">
          <a href={githubLink} target="_blank" rel="noreferrer">
            View code on Github
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectCard;
