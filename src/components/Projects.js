import "./Projects.css";

const Projects = (item) => {
  return (
    <div className={item.direction + " projects"}>
      <div className="project-text">
        <h4 className="project-title">
          <a
            href={item.link}
            target={item.target}
            rel="noopener noreferrer"
            className="hover-cover"
          >
            {item.name}
          </a>
        </h4>
        <p className="project-description">{item.description}</p>
        <p className="project-description">{item.description2}</p>
      </div>

      <img className="project-image" src={item.source} alt={item.id}></img>
    </div>
  );
};
export default Projects;
