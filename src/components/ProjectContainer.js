import Projects from "./Projects.js";
import finx from "./images/finx.png";
import isl from "./images/isl.png";
import crypton from "./images/crypton.png";
import worm from "./images/worm.png";
import tetris from "./images/tetris.png";
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
        id="tetris-opener"
        source={tetris}
        name="Tetris Opener Bot"
        description="Implemented image recognition to identify Tetris pieces and optimize placement strategies."
        description2="Developed an algorithm capable of efficiently determining optimal placement for the first three bags, handling 128 billion possible configurations. Developed for Tetr.io"
        direction="row-reverse"
        link="https://github.com/TChoy04/tetris-opener-bot"
        target="_blank"
      />
      <Projects
        id="isl-image"
        source={isl}
        name="International Socioeconomics Laboratory"
        description="The International Socioeconomics Laboratory is a non-profit 501(c) organization which serves as a student enrichment non-profit that bridges the gap between young students and post-graduate researchers, serving as an output of research in the overlooked field of socioeconomics. "
        description2="As a member of the web development Board of Directors, I served an integral role in the development of various parts of the website, such as the navigation bar and 8+ pages in order to get the site up and running."
        direction="row"
        link="https://www.linkedin.com/company/international-socioeconomics-laboratory/about/"
        target="_blank"
      />
      <Projects
        id="finx-image"
        source={finx}
        name="Finxerunt Policy Institute"
        description="The Finxerunt Policy Institute is an international organization founded on the basis of building a sustainable future. They colloborate with a diverse set of legislators and scholars and since it's founding, have passed numerous bills in policy."
        description2="In order to contribute to the effort, I created 5+ fully responsive pages, bringing them one step closer to their goal."
        direction="row-reverse"
        link="https://twitter.com/finxeruntpolicy?lang=en"
        target="_blank"
      />
      <Projects
        id="crypton-image"
        source={crypton}
        name="Planet Crypton"
        description="Planet Crypton: A side project I created in order to keep track of the ever volatile cryptocurrency market. It currently tracks the top 250 cryptocurrencies, ranked by their market cap."
        description2="Planet Crypton updates real time with important information, such as a cryptocurrency's change over time, its highs and lows within 24 hours and a summary informing the user about the cryptocurrency, allowing the user to more confidently invest."
        direction="row"
        link="./crypton"
        target=""
      />
      <Projects
        id="worm-image"
        source={worm}
        name="Happy Worm"
        description="Happy Worm is a Snake styled game where you follow the adventure of the Happy Worm, Bartholomew and his journey to find true happiness."
        description2="Unfortunately, the only thing that makes him happy is the consumption of love, and slowly but surely, Bartholomew is turning the world into a wasteland, deprived of love. (Not reflected in gameplay)"
        direction="row-reverse"
        link="./worm"
        target=""
      />
    </div>
  );
};
export default ProjectContainer;
