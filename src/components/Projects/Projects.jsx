import "./card.css";
import "./taskbar.css";
import ProjectCard from "./ProjectCard";
import info from "../../england";

const Projects = () => {
    return (
        <div className="flex flex-col md:flex-row items-center flex-wrap justify-center gap-5 mt-9">
            {info.project.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}
 
export default Projects;