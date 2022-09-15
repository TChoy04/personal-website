import Projects from "./Projects.js";
import finx from "./images/finx.png";
import isl from "./images/isl.png";
const ProjectContainer = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <h1 className="project-heading">Projects</h1>
        <h4 className="project-heading-description">
          Showcase of websites I have worked on.
        </h4>
      </div>

      <Projects
        id="isl-image"
        source={isl}
        name="International Socioeconomics Laboratory"
        description="The International Socioeconomics Laboratory is a non-profit 501(c) organization which serves as a student enrichment non-profit that bridges the gap between young students and post-graduate researchers, serving as an output of research in the overlooked field of socioeconomics. "
        description2="As a member of the web development Board of Directors, I served an integral role in the development of various parts of the website, such as the navigation bar and 8+ pages in order to get the site up and running."
        direction="row"
        link="https://socioeconlabs.org"
      />
      <Projects
        id="finx-image"
        source={finx}
        name="Finxerunt Policy Institute"
        description="The Finxerunt Policy Institute is an international organization founded on the basis of building a sustainable future. They colloborate with a diverse set of legislators and scholars and since it's founding, have passed numerous bills in policy."
        description2="In order to contribute to the effort, I created 5+ fully responsive pages, bringing them one step closer to their goal."
        direction="row-reverse"
        link="https://finxerunt.org"
      />
    </div>
  );
};
export default ProjectContainer;
