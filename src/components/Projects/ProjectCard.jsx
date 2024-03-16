const ProjectCard = ({ project }) => {
  return (
    <div id="project-card" className="bg-gray-700 md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
      <div className="card-taskbar flex justify-start p-2">
        <span className="card-dot h-3 w-3 bg-red-500 rounded-full mr-1"></span>
        <span className="card-dot h-3 w-3 bg-yellow-500 rounded-full mr-1"></span>
        <span className="card-dot h-3 w-3 bg-green-500 rounded-full mr-1"></span>
      </div>
      <div className="card-wrapper flex items-center justify-center relative">
        <img className="card-img w-full transition-all duration-500" src={project.image} alt={project.name} />
        <div className="card-desc-wrapper flex flex-col items-center justify-center absolute w-full h-full transition-all duration-500 bg-transparent">
          <h1 className="text-white text-2xl font-bold text-center">{project.name}</h1>
          <p className="text-white p-5 text-center text-xl">{project.description}</p>
          <ul className="flex flex-row items-center justify-center gap-2 text-xs text-white font-semibold">
            [{project.techStack.map((tech, index) => (
                (index === project.techStack.length - 1)?
                 <li key={index}>{tech}</li> // if last element, don't add comma
                 : 
                 <li key={index}>{tech} ,</li> // else, add comma
            ))}]
          </ul>
          <div className="flex justify-center items-center mt-5 text-3xl">
            <a href={project.GithubLink} target="_blank" rel="noreferrer">
              {project.icon}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
