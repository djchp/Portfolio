const ProjectCard = ({id, name, description, tech, githubLink}) => {
    console.log(tech)
    return (
    <div
      className=" m-4 h-[40vh] w-[30vh] rounded-[40px] 
        
    border-2 border-black bg-black p-4 text-white hover:bg-white hover:text-black dark:border-white dark:bg-white
     dark:text-black dark:hover:bg-black dark:hover:text-white"
    >
      <h1 className=" text-2xl font-bold">{name}</h1>
      <br />
      <span className=" mb-2">
        {description}
      </span>
      <div className=" flex flex-row flex-wrap mt-1">
        {tech?.map((t) => (
            <div className=" bg-white border-2 border-black dark:border-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white rounded-full mr-2 mb-2 p-1">{t}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
