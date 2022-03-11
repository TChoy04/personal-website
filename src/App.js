import MyHeader from "./components/header.js";
import "./App.css";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects.js";
import finx from "./components/images/finx.png";
import isl from "./components/images/isl.png";
import Experiences from "./components/Experiences.js";
function App() {
  return (
    <div className="wrapper">
      <MyHeader />
      <AboutMe />
      <div className="project-container">
        <div className="project-header">
          <h1 className="project-heading">—Projects</h1>
          <strong className="project-heading-description">
            Showcase of websites I have worked on.
          </strong>
        </div>

        <Projects
          id="isl-image"
          source={isl}
          name="International Socioeconomics Laboratory"
          description="The International Socioeconomics Laboratory is a non-profit 501(c) organization which serves as a student enrichment non-profit that bridges the gap between young students and post-graduate researchers, serving as an output of research in the overlooked field of socioeconomics. As a member of the web development Board of Directors, I served an integral role in the development of various parts of the website, such as the navigation bar and 8+ pages in order to get the site up and running.
"
          direction="row"
        />
        <Projects
          id="finx-image"
          source={finx}
          name="Finxerunt Policy Institute"
          description="The Finxerunt Policy Institute is an international organization founded on the basis of building a sustainable future. They colloborate with a diverse set of legislators and scholars and since it's founding, have passed numerous bills in policy. In order to contribute to the effort, I created 5+ fully responsive pages, bringing them one step closer to their goal."
          direction="row-reverse"
        />
      </div>
      <div className="experience-container">
        <div className="experience-header">
          <h1 className="experience-heading">—Experience</h1>
          <strong className="experience-heading-description">
            Relevant Experience
          </strong>
        </div>
        <Experiences
          title="International Socioeconomics Laboratory"
          role="Board of Directors - Web Development"
          date="March 2020 - Feb 2022"
        />
        <Experiences
          title="Finxerunt Policy Institute"
          role="Web Developer"
          date="March 2020 - Feb 2022"
        />
        <Experiences
          title="STEM from Scratch"
          role="Writer + Editor"
          date="March 2021 - Present"
        />
        <Experiences
          title="Brooklyn Public Library"
          role="Technical Support Internship"
          date="September 2019 - May 2020"
        />
      </div>
    </div>
  );
}

export default App;
